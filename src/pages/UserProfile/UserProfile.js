import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import { useData } from "../../context/data/videoContext";
import { ACTION_TYPE } from "../../utils";
import "./UserProfile.css";

export function UserProfile() {
  const { user, setUser, setToken } = useAuth();
  const { dispatch, setLoader } = useData();
  const { firstName, lastName, email } = user;
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch({
      type: ACTION_TYPE.LOG_OUT,
    });
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("signup");

    setUser();
    setToken("");
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
    navigate("/");
  };
  return (
    <div className="profile-container">
      <div className="profile-main-container">
        <h2>Account</h2>

        <div className="profile-main">
          <div className="tabs">
            <label htmlFor="profile">Profile</label>
            <div className="tab">
              <div className="profile-details">
                <h3 className="details-header">Profile Details</h3>

                <div className="profile-details-main">
                  <div className="title">
                    <p className="paragraph-md">Full Name</p>
                    <p className="paragraph-md">Email</p>
                  </div>
                  <div>
                    <p className="paragraph-md">{`${firstName} ${lastName}`}</p>
                    <p className="paragraph-md"> {email}</p>
                  </div>
                </div>
              </div>
              <div className="">
                <h3 className="details-header">Account Settings</h3>
                <button
                  className="btn danger setting-logout"
                  onClick={() => logOutHandler()}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
