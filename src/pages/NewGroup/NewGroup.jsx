import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const NewGroup = () => {
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupMembers, setGroupMembers] = useState("");
  const [groupImage, setGroupImage] = useState(null);
  const [groupId,setGroupId] = useState("");

  function handleGroupNameChange(event) {
    setGroupName(event.target.value);
  }

  function handleGroupDescriptionChange(event) {
    setGroupDescription(event.target.value);
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
    if (groupMembers) {
      const temp = groupMembers.split(",");
      console.log("setmmbers called");
      console.log("inviteusers called");
      setMembers(temp);
      post();
    }
    
    // handle form submission here
  }
  console.log("after");
  console.log(members);
  
  const post = async () => {
    try {
      axios
      .post(
        "http://localhost:8000/group/creategroup/63d645f7e653329b6cab4ef8",
        {
          groupName: groupName,
          // groupIcon:groupImage
        }
        )
        .then((response) => {
          console.log(response);
          if(response.status===201)
          {
            setGroupId(response.data.groupId);
          }
          console.log(groupId);
          if(groupId!=="")
          {
      
            inviteUsers();
            // inviteUsers();
            alert("Group created and mail sent");
            navigate("/dashboard/");
          }
        });
      } catch (err) {
        console.log(err);
      }
    };


  const inviteUsers = async ()=> {
    for (let i = 0; i < members.length; i++) {
      // console.log("memebrs[i]")
      // console.log(members[i]);
      let config = {
        method: "post",
        url: "http://localhost:8000/group/inviteUser",

        data: {
          groupName: groupName,
          emailId: members[i],
          groupId:groupId,
        },
      };

      try {
        const response = await axios(config);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  }

  console.log(groupName);
  console.log(groupDescription);
  console.log(groupMembers);

  // console.log(groupImage);
  // console.log(groupName);
  return (
    <div className="flex flex-col items-center justify-center h-full scrollbar-none bg-gray-200">
      <h1 className="text-3xl font-bold mb-2">Create a New Group</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-2">
          <label
            htmlFor="group-name"
            className="block text-gray-700 font-bold mb-2"
          >
            Group Name:
          </label>
          <input
            type="text"
            id="group-name"
            name="group-name"
            className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
            value={groupName}
            onChange={handleGroupNameChange}
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="group-description"
            className="block text-gray-700 font-bold mb-2"
          >
            Group Description:
          </label>
          <textarea
            id="group-description"
            name="group-description"
            className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
            value={groupDescription}
            onChange={handleGroupDescriptionChange}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="members"
            className="block text-gray-700 font-bold mb-2"
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
        <div className="mb-2">
          <label
            htmlFor="group-image"
            className="block text-gray-700 font-bold mb-2"
          >
            Group Image:
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
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-primary transition-colors duration-300"
        >
          Create Group
        </button>
      </form>
    </div>
  );
};

export default NewGroup;
