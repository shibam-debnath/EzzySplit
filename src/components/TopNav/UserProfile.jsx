import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { logout } from "../../firebase/firebase";
import axios from "axios";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const UserProfile = (props) => {
  const userId = useRef("");
  const groupId = useRef("");
  const uid = useRef("");
  
  const [user] = useAuthState(auth);
  const [UserData, FgetUsersData] = useState(props.UserData);
  const [ProfileName, setProfileName] = useState("");
  const [ProfileImage, setProfileImage] = useState("");

  const [Url, setUrl] = useState(props.UserData.imageUrl);
  const [percentage, setPercentage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("checking the user ");
    if (user == null) {
      return navigate("/login");
    } else {
      console.log("Accessing the user ");
      console.log(user.displayName);
      var temp = user.displayName.split("---");
      userId.current = temp[0];
      groupId.current = temp[1];
      console.log(userId.current);
      uid.current = user.uid;
    }
    // eslint-disable-next-line
  }, [user]);

  async function handleLogout(e) {
    e.preventDefault();
    try {
      await logout();
    } catch (e) {
      alert("Logout unsuccessful");
    }
  }

  const [editProfile, setEditProfile] = useState(false);

  const openEditProfile = (e) => {
    e.preventDefault();
    setEditProfile(!editProfile);
  };

  useEffect(() => {
    // if we have profile image upload it and save
    const upload = () => {
      const uniqueName = new Date().getTime() + ProfileImage.name;
      console.log(uniqueName);
      const storageRef = ref(storage, ProfileImage.name);
      const uploadTask = uploadBytesResumable(storageRef, ProfileImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPercentage(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
            console.log("File available at");
            console.log(downloadURL);
            console.log(Url);
          });
        }
      );
    };
    ProfileImage && upload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ProfileImage]);


  async function handleSubmit(e) {
    e.preventDefault();

    console.log("Yaha aaya");
    console.log(ProfileName);
    console.log(uid.current);
    console.log(Url);

    let config = {
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/user/edituser/${userId.current}`,
      data: {
        name: ProfileName,
        uid: uid.current,
        imageUrl: Url,
      },
    };

    try {
      const response = await axios(config);
      console.log("yehi chahiye");
      console.log(response);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
    console.log(ProfileName);
    console.log("Yaha aaya 2");
    // props.closeProfile();
    console.log("Yaha ayaa 3");
    // console.log(isChanged);
    // setIsChanged(1);
    // console.log(isChanged);
  }

  return (
    <div>
      {!UserData ? (
        <h2>Loading.....</h2>
      ) : (
        <div className="nav-item absolute right-0 top-20 bg-slate-50 border-spacing-3 p-8 rounded-lg w-96">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl text-primary">User Profile</p>
            <button
              className="bg-none text-2xl text-primary rounded-2xl"
              onClick={props.closeProfile}
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
            <img
              className="rounded-full h-24 w-24"
              src={Url}
              alt="user-profile"
            />
            <div className="flex flex-col">
              {!UserData.name ? (
                <p className="text-gray-500 text-xl">No data found</p>
              ) : (
                <>
                  <p className="font-semibold text-2xl text-primary">
                    {UserData.name}
                  </p>
                  <p className="text-gray-500 text-sm">{UserData.emailId}</p>
                </>
              )}
            </div>
          </div>
          <div className="mt-5">
            <button
              onClick={openEditProfile}
              className="bg-primary text-2xl text-white pt-3 pb-3 w-full"
            >
              Edit Profile
            </button>
          </div>
          <div className="mt-5">
            <button
              onClick={handleLogout}
              className="bg-primary text-2xl text-white pt-3 pb-3 w-full"
            >
              Logout
            </button>
          </div>
        </div>
      )}
      {editProfile && (
        <div className="fixed right-1/3 flex flex-col bg-white top-[12%] pt-5 items-center justify-center h-50 scrollbar-none">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl text-primary">User Profile</p>
            <button
              className="bg-none text-2xl text-primary rounded-2xl"
              onClick={props.closeProfile}
            >
              <MdOutlineCancel />
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-2">
              <label
                htmlFor="user-name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="user-name"
                name="user-name"
                className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
                value={ProfileName}
                onChange={(e) => {
                  setProfileName(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="group-image"
                className="block text-gray-700 font-bold mb-2"
              >
                Profile Image:
              </label>
              <input
                type="file"
                id="profile-image"
                name="profile-image"
                accept="image/*"
                required
                className="w-full border border-gray-400 mb-2 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
                onChange={(e) => {
                  setProfileImage(e.target.files[0]);
                }}
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              disabled={percentage != null && percentage < 100}
              className="mt-6 w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-primary transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
