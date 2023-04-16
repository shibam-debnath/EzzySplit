import React, { useRef, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { updateProfile } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";

const NewGroup = () => {
  const [user] = useAuthState(auth);
  const [groupName, setGroupName] = useState("");
  const [groupImage, setGroupImage] = useState("");
  const [groupMembers, setGroupMembers] = useState("");
  const [toggleGroup, FtoggleGroup] = useState(true);
  const navigate = useNavigate();
  const userId = useRef("");
  const groupId = useRef("");

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
    }
    // eslint-disable-next-line
  }, [user]);

  const notify = () => {
    toast.success("Group created successfully", {
      autoClose: 1200,
      pauseOnFocusLoss: false,
      transition: Flip,
    });
  };
  const failed = () => {
    toast.error("Error occured", {
      autoClose: 1200,
      pauseOnFocusLoss: false,
      transition: Flip,
    });
  };

  const dly = () => {
    setTimeout(() => {
      FtoggleGroup(true);
      navigate("/dashboard/");
    }, 1000);
  };
  const set = () => {
    setTimeout(() => {
      notify();
      dly();
    }, 2000);
  };
  const set2 = () => {
    setTimeout(() => {
      FtoggleGroup(true);
      failed();
    }, 2000);
  };

  function handleGroupNameChange(event) {
    setGroupName(event.target.value);
  }

  function handleGroupMembers(event) {
    setGroupMembers(event.target.value);
  }

  function handleGroupImageChange(event) {
    setGroupImage(event.target.files[0]);
  }

  const [members, setMembers] = useState([]);
  console.log(members);

  function handleSubmit(event) {
    event.preventDefault();
    FtoggleGroup(false);
    if (groupMembers) {
      const temp = groupMembers.split(",");
      console.log("setmmbers called");
      console.log("inviteusers called");
      setMembers(temp);
      console.log("check1");
      post();
      console.log("check2");
    } else {
      console.log("check3");
      set2();
    }

    // handle form submission here
  }
  console.log("after");
  console.log(members);

  const updateDisplayName = (newName) => {
    console.log(user);
    if (user) {
      updateProfile(user, {
        displayName: newName,
        // photoURL: "https://example.com/newProfilePhoto.jpg"
      })
        .then(() => {
          console.log("Display name updated successfully");
        })
        .catch((error) => {
          console.log(`Error updating display name: ${error}`);
        });
    }
  };

  const post = async () => {
    try {
      axios
        .post(`http://localhost:8000/group/creategroup/${userId.current}`, {
          groupName: groupName,
          // groupIcon:groupImage
        })
        .then((response) => {
          console.log("In res");
          console.log(response);
          if (response.status !== 201) {
            console.log("check4");
            set2();
          }
          if (response.status === 201) {
            groupId.current = response.data.groupId;
            console.log("Yaha bhi aaya");
            console.log(response.data.groupId);
            inviteUsers(response.data.groupId);
            const temp = userId.current + "---" + response.data.groupId;
            updateDisplayName(temp);
            set();
          }
          if (groupId.current !== "") {
            navigate("/dashboard/");
          }
        });
    } catch (err) {
      console.log("check5");
      set2();
    }
  };

  const inviteUsers = async (id) => {
    for (let i = 0; i < members.length; i++) {
      // console.log("memebrs[i]")
      // console.log(members[i]);
      let config = {
        method: "post",
        url: "http://localhost:8000/group/inviteUser",

        data: {
          groupName: groupName,
          emailId: members[i],
          groupId: id,
        },
      };

      try {
        const response = await axios(config);
        console.log(response);
      } catch (err) {
        set2();
      }
    }
  };

  console.log(groupName);
  console.log(groupMembers);

  // console.log(groupImage);
  // console.log(groupName);
  return (
    <div className="flex flex-col items-center mt-6 h-[80vh] justify-center  scrollbar-none ">
      <h1 className="text-3xl text-primary font-bold mb-2">
        Create a New Group
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 mt-5 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="group-name"
            className="block text-slate-400 font-semibold mb-2"
          >
            Group Name
          </label>
          <input
            type="text"
            id="group-name"
            name="group-name"
            className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
            value={groupName}
            onChange={handleGroupNameChange}
            placeholder="GroupName"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="members"
            className="block text-slate-400 font-semibold mb-2"
          >
            Add Members
          </label>
          <input
            type="text"
            id="members"
            name="members"
            className="shadow appearance-none border-gray-400 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter email addresses separated by comma"
            onChange={handleGroupMembers}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="group-image"
            className="block text-slate-400 font-semibold mb-2"
          >
            Group Image
          </label>
          <input
            type="file"
            id="group-image"
            name="group-image"
            accept="image/*"
            className="w-full border border-gray-400 mb-2 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
            onChange={handleGroupImageChange}
          />
        </div>
        {toggleGroup ? (
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-primary transition-colors duration-300"
            >
              Create Group
            </button>
          </div>
        ) : (
          <div className="items-center flex justify-center">
            <ThreeDots
              height="50"
              width="50"
              radius="9"
              color="#6B60F1"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default NewGroup;
