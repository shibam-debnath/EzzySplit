import React, { useState, useEffect,useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { logout } from "../../firebase/firebase";
import axios from "axios";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

var response;

const UserProfile = (props) => {
  const [user] = useAuthState(auth);
  var temp = user.displayName.split("---");
  console.log(temp);
  const userId = temp[0];
  const [UserData, FgetUsersData] = useState({});
  const [ProfileName, setProfileName] = useState("");
  const [ProfileImage, setProfileImage] = useState("");
  const [Url, setUrl] = useState("");
  const [percentage, setPercentage] = useState(null);
  const uid = user.uid;

  // console.log(ProfileName);
  // console.log(ProfileImage);

  async function handleLogout(e) {
    e.preventDefault();
    try {
      await logout();
    } catch (e) {
      alert("Logout unsuccessful");
    }
  }

  const getData = async () => {
    try {
      let config = {
        method: "get",
        url: `http://localhost:8000/user/profile/${userId}`,
      };
      response = await axios(config);
      FgetUsersData(response.data.users);
      console.log(`Data: ${UserData.name}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

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
            console.log(Url);
          });
        }
      );
    };
    ProfileImage && upload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ProfileImage]);

  function handleSubmit(e) {
    console.log("button clicked");
    e.preventDefault();
    try {
      axios
        .post("http://localhost:8000/user/edituser/6433c5b22e64c9bc0d4931a6", {
          name: ProfileName,
          uid: uid,
          imageUrl: Url,
        })
        .then((response) => {
          if (response.status === 201) {
            console.log("Successfully edited the user");
          }
        });
    } catch (err) {
      console.log(err);
    }
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
              src={Url || "../images/avatar.png"}
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

// import React from "react";

// const UserProfile = () => {
//   return <>HELLOOOOo</>;
// };

// export default UserProfile;
