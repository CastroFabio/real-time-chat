import React from "react";

const UserProfile = () => {
  return (
    <>
      <div className="av" style={{ backgroundColor: "#3454d1" }}>
        VC<span className="st"></span>
      </div>
      <div className="who">
        <b>Você</b>
        <small>
          <span className="dot"></span>Disponível
        </small>
      </div>
    </>
  );
};

export default UserProfile;
