import React from "react";
import { connect } from "react-redux";
import { UserPanel } from "./MyAccount.styles";
import { getMe } from "../../redux/actions";

import { UserName, SecParagrapgh } from "./MyAccount.styles";

const MyAccount = ({ user, getMe }) => (
  <UserPanel>
    <UserName> NAME: {user.name}</UserName>
    {Object.keys(user).map((bio, idx) => {
      return bio !== "name" ? (
        <>
          <SecParagrapgh key={idx}>
            {bio} : {user[bio]}
          </SecParagrapgh>
        </>
      ) : null;
    })}
  </UserPanel>
);

const mapStateToProps = ({ data: { user } }) => ({ user });

export default connect(
  mapStateToProps,
  { getMe }
)(MyAccount);
