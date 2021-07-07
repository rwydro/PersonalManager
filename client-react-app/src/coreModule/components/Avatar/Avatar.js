import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Avatar.scss"

const Avatar = ({initials, size}) =>{
  return  (
          <div className="avatar avatar--large">
              {initials}
          </div>
  )
};
export default Avatar;