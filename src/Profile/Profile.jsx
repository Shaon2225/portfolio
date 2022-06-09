import React from "react";
import "./Profile.css";
import { GiBowTieRibbon } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineFileDone } from "react-icons/ai";

const Profile = () => {
  return (
    <div className="profile-container" id="profile">
      <div>
        <img src="img/my2.png" alt="" className="about-pic" />
      </div>
      <div className="profile-details">
        <h1>About me</h1>
        <div className="exp-container">
          <div className="box-exp">
            <GiBowTieRibbon></GiBowTieRibbon>
            <p>1 year experience</p>
          </div>
          <div className="box-exp">
            <IoIosPeople></IoIosPeople>
            <p>30 happy clinet</p>
          </div>
          <div className="box-exp">
            <AiOutlineFileDone></AiOutlineFileDone>
            <p>20 projects done</p>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, ab
            quis quae, accusamus nisi ducimus repellat quibusdam recusandae sit
            ipsa suscipit aperiam temporibus voluptate facere quas nihil natus
            nemo excepturi quos. Aperiam, iure. Eaque unde perspiciatis aperiam
            sapiente, voluptate, dolorum suscipit harum at veritatis non vel
            autem accusantium, saepe nisi eius labore similique laborum expedita
            odio hic reprehenderit exercitationem dolore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
