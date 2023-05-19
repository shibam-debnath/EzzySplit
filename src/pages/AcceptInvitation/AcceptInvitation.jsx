import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, updateProfile } from "firebase/auth";

const AcceptInvitation = () => {
  const auth1 = getAuth();
  const navigate = useNavigate();
  console.log("ye dekho");
  console.log(auth1.currentUser);
  const [emailId, setEmailId] = useState("");
  const [proceed, setProceed] = useState(false);
  const [userData, setUserData] = useState([]);
  const params = useParams();
  console.log(params);
  var groupId = params.id;

  const [toggleInvitation, FtoggleInvitation] = useState(true);
  const check = () => {
    if (auth1.currentUser === null) {
      navigate("/login");
    }
  };

  useEffect(() => {
    check();
  }, []);

  const notifyInvitation = () => {
    toast.success("Added to group successfully", {
      autoClose: 1200,
      pauseOnFocusLoss: false,
      transition: Flip,
    });
  };
  const failed = (msg) => {
    toast.error(msg, {
      autoClose: 1200,
      pauseOnFocusLoss: false,
      transition: Flip,
    });
  };
  const failedProcees = () => {
    toast.error("Email Id not registered", {
      autoClose: 1200,
      pauseOnFocusLoss: false,
      transition: Flip,
    });
  };

  const dlyInvitation = () => {
    setTimeout(() => {
      FtoggleInvitation(true);
      console.log("Yaha tak to aa gaya bhai");
      const temp = userData._id + "---" + groupId;
      updateDisplayName(temp);
      // navigate("/dashboard/");
      // navigate("/dashboard/", { state: { groupid: groupId } });
    }, 1000);
  };
  const setInvitation = () => {
    setTimeout(() => {
      notifyInvitation();
      dlyInvitation();
    }, 2000);
  };
  const set2Invitation = (msg) => {
    setTimeout(() => {
      FtoggleInvitation(true);
      failed(msg);
    }, 2000);
  };
  const set2Proceed = () => {
    setTimeout(() => {
      failedProcees();
    }, 1000);
  };

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

  const updateDisplayName = (newName) => {
    const user = auth1.currentUser;
    console.log(user);
    if (user) {
      updateProfile(user, {
        displayName: newName,
        // photoURL: "https://example.com/newProfilePhoto.jpg"
      })
        .then(() => {
          console.log("Display name updated successfully");
          navigate("/dashboard/");
        })
        .catch((error) => {
          console.log(`Error updating display name: ${error}`);
        });
    }
  };

  const verify = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/user/profile/emailId/${emailId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.status);
      const data = await res.json();
      console.log(data);
      if (res.status === 422) {
        set2Proceed();
      } else {
        setUserData(data[0]);
        if (res.status === 200) setProceed(true);
      }
      console.log("gaaya");
    } catch (error) {
      console.log("exit");
      set2Proceed();
    }
  };

  const addUser = async () => {
    try {
      FtoggleInvitation(false);
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/group/addUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            groupId: params.id,
            userId: userData._id,
          }),
        }
      );
      await res.json();

      if (res.status === 200) {
        setInvitation();
      } else {
        set2Invitation("User already exist");
      }
    } catch (err) {
      FtoggleInvitation(false);
      set2Invitation("Error occured..!!");
    }
  };

  return (
    <div className=" flex justify-center h-1/5 ">
      <div className="bg-white shadow-2xl rounded-md  h-1/5 w-2/6 mt-20 p-10 ">
        {proceed ? (
          <div>
            <div>Click accept to join the group 🤖</div>

            {toggleInvitation ? (
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
            ) : (
              <div className="items-center flex justify-center mt-5">
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
      <ToastContainer />
    </div>
  );
};

export default AcceptInvitation;
