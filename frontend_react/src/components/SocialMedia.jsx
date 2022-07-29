import React from "react";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://t.me/R_Dilrozbek" target="_blank" rel="noreferrer">
        <div>
          <FaTelegramPlane />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/dilrozbek-raximov-44ab0b223"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <GrLinkedinOption />
        </div>
      </a>
      <a
        href="https://www.facebook.com/dilrozbek.raximov"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FaFacebookF />
        </div>
      </a>
      <a
        href="https://www.instagram.com/_dilrozbek_"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
