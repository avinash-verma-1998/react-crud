import React from "react";
import { Redirect, useHistory } from "react-router";

const UserBox = ({ name, email, id, active }) => {
  const history = useHistory();
  const handleUserClick = () => {
    if(!active){
      return
    }
    history.push(`/users/${id}`);
  };
  return (
    <div onClick={handleUserClick} className={active? "user-icon box border-active" : "user-icon box user-inactive" }>
      <p>
        <span title="send email" className="icon">
          <a href={`mailto:${email}`}>
            <i className="fas fa-paper-plane"></i>
          </a>
        </span>

        {name}
      </p>
    </div>
  );
};

export default UserBox;
