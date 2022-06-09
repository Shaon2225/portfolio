import React, { useState } from "react";
import "./Navigation.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BiHomeCircle, BiMessageRounded } from "react-icons/bi";
import { TbLivePhoto } from "react-icons/tb";

const Navigation = () => {
  const [u, setU] = useState("home");

  return (
    <div className="navigation-container">
      <div className="cont">
        <a
          href="#home"
          className={`nav-link ${u == "home" && "active"}`}
          onClick={() => setU("home")}
        >
          <BiHomeCircle></BiHomeCircle>
        </a>
        <a
          href="#profile"
          className={`nav-link ${u == "profile" && "active"}`}
          onClick={() => setU("profile")}
        >
          <BsFillPersonFill></BsFillPersonFill>
        </a>
        <a
          href="#"
          className={`nav-link ${u == "demo" && "active"}`}
          onClick={() => setU("demo")}
        >
          <TbLivePhoto></TbLivePhoto>
        </a>
        <a
          href="#"
          className={`nav-link ${u == "msg" && "active"}`}
          onClick={() => setU("msg")}
        >
          <BiMessageRounded></BiMessageRounded>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
