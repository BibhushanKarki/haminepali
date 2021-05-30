import React from "react";
import "./editprofile.css";
import { FaRegEdit } from "react-icons/fa";
import background from "../../assets/images/user.jpg";

const EditProfileSection = () => {
  return (
    <>
      <form className="mt-4">
        <div
          className="card w-50 mt-5  mx-auto "
          style={{ boxShadow: "none", border: "none" }}
        >
          <div
            className="card-header"
            style={{ backgroundColor: "#9f1718", height: 200 }}
          ></div>
          <div className="card-body text-center">
            <label for="fileToUpload">
              <div
                class="profile-pic"
                style={{
                  backgroundImage: `url(${background})`,
                }}
              >
                <span class="glyphicon glyphicon-camera"></span>
                <span>
                  {" "}
                  <FaRegEdit color={"#9f1718"} />
                </span>
              </div>
            </label>
            <input type="File" name="fileToUpload" id="fileToUpload" />

            <div className="row mt-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Firstname"
                  name="firstname"
                  required
                />
                <span className="spanicon">
                  <FaRegEdit />
                </span>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control lastname"
                  placeholder="LastName"
                  name="lastname"
                  required
                />
                <span className="spanicon">
                  <FaRegEdit />
                </span>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email-Address"
                  name="email"
                  required
                />
                <span className="spanicon">
                  <FaRegEdit />
                </span>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
                <span className="spanicon">
                  <FaRegEdit />
                </span>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  required
                />
                <span className="spanicon">
                  <FaRegEdit />
                </span>
              </div>
            </div>
            <div className="row mt-4 mb-3">
              <div className="col-md-12">
                <button type="submit" className=" btn btn-primary">
                  Save
                </button>
                &nbsp;&nbsp;
                <button type="submit" className=" btn btn-primary">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfileSection;
