import React from "react";
import { ReactComponent as FileUploadIcon } from "../../assets/cloud-upload.svg";
import { Button } from "../../pages/signIn/SignIn.styles";

const FileUpload = ({ getImage, onFileupload }) => {
  return (
    <form encType="multipart/form-data">
      <div className="form-group desktop-upload">
        <input type="hidden" value="2097152" />
        <div>
          <div id="filedrag">
            <FileUploadIcon />
            <label htmlFor="fileselect">Drop images</label>
            <input onChange={getImage} type="file" name="file" />
          </div>
          <div id="messages">
            <p></p>
          </div>
          <div id="progress"></div>
        </div>
      </div>
      <Button onClick={onFileupload}>Upload Image</Button>
    </form>
  );
};

export default FileUpload;
