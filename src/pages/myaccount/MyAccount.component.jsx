import React, { useState } from "react";
import { connect } from "react-redux";
import { UserPanel } from "./MyAccount.styles";
import FileUpload from "../../component/file-upload/File-Upload.component";
import {getMe} from "../../redux/actions/user.action";
import {
  ImageContaineer,
  ProfileImage
} from "../../component/file-upload/file-upload.styles";
import requireAuth from "../../hoc/requireAuth";
import { ErrorDisplay } from "../signIn/SignIn.styles";
import maintenancetrackerapp from "../../api/maintenancetrackerapp";
import { UserName, SecParagrapgh } from "./MyAccount.styles";
import Loader from "../../component/loader/withLoader";

const MyAccount = ({ user, getMe }) => {
  const [photo, setPhoto] = useState(null);
  const [isUploadloading, setIsUploadloading] = useState(false);
  const [error, setError] = useState(false);

  function getImage(e) {
    setError(false);
    setPhoto(e.target.files[0]);
  }

  const onFileupload = e => {
    e.preventDefault();
    const data = new FormData();
    if (photo) {
      data.append("profile", photo, photo.name);

      // Assign to Redux
      maintenancetrackerapp
        .post("/users/profileImage", data)
        .then(res => {
          getMe()
          setIsUploadloading(false);
          setPhoto(res.data.data.image.filename);
        })
        .catch(err => {
          console.log(err);
          setIsUploadloading(false);
          setError(true);
        });
      return;
    }
    setError(true);
  };

  return (
    <UserPanel>
      <UserName> NAME: {user.name}</UserName>
      {Object.keys(user).map((bio, idx) => {
        return bio !== "name" ? (
          <SecParagrapgh key={idx}>
            {bio} : {user[bio]}
          </SecParagrapgh>
        ) : null;
      })}
      <ImageContaineer>
        <ProfileImage
          src={`http://localhost:3000/images/${user.image}`}
          alt="profile"
        />
      </ImageContaineer>

      {isUploadloading ? (
        <Loader />
      ) : (
        <>
          <FileUpload onFileupload={onFileupload} getImage={getImage} />
          {error ? (
            <ErrorDisplay>
              There was an error uploading this image !
            </ErrorDisplay>
          ) : null}
        </>
      )}
    </UserPanel>
  );
};

const mapStateToProps = ({ data: { user } }) => ({ user });

export default connect(mapStateToProps, { getMe})(requireAuth(MyAccount));
