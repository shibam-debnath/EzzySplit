import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const AcceptInvitation = () => {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState("");
  const [proceed, setProceed] = useState(false);
  const [userData, setUserData] = useState([]);
  const params = useParams();
  console.log(params);

  function handleemailId(event) {
    setEmailId(event.target.value);
    setProceed(false);
  }

  function fproceed() {
    console.log(proceed);
    verify();
  }
  function back() {
    console.log(proceed);
    setProceed(false);
  }

  const verify = async () => {
    try {
      axios
        .get(`http://localhost:8000/user/profile/emailId/${emailId}`,{
          responseType: "json",
        })
        .then(function (response) {
          console.log("response.data");
          console.log(response.data.users[0]);
          setUserData(response.data.users[0]);
          if (response.status === 200) setProceed(true);
          console.log(userData);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const addUser = async () => {
    try {
      axios
        .post("http://localhost:8000/group/addUser", {
          groupId: params.id,
          userId: userData._id,
          // groupIcon:groupImage
        })
        .then((response) => {
          console.log(response);
          if(response.status===200)
          {

              alert("You have joined the group");
              navigate("/dashboard/");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  //   console.log(emailId);
  //   console.log(proceed);

  return (
    <div className=" flex justify-center h-1/5 ">
      <div className="bg-white shadow-2xl rounded-md  h-1/5 w-2/6 mt-20 p-10 ">
        {proceed ? (
          <div>
            <div>Click accept to join the group 🤖</div>
            <div className="flex ">
              <div
                className="w-1/2 p-4 mt-4 rounded-md m-2 bg-gray-400 text-white cursor-pointer hover:bg-opacity-80 "
                onClick={back}
              >
                Back
              </div>
              <div
                className="w-1/2 p-4 mt-4 rounded-md m-2 bg-primary text-white cursor-pointer hover:bg-opacity-80 "
                onClick={addUser}
              >
                Accept
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-2">
              <label htmlFor="emailId" className="block text-gray-700  mb-2">
                Enter your registered Email Id:
              </label>
              <input
                type="text"
                id="emailId"
                name="emailId"
                className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
                value={emailId}
                onChange={handleemailId}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-lgPrimary rounded-md w-1/2 mt-2 p-2 text-white cursor-pointer hover:bg-opacity-90"
                onClick={fproceed}
              >
                Proceed
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcceptInvitation;
