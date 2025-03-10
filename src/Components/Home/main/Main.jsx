import React from "react";
import "./main.css";

import WebIcon from "@mui/icons-material/Web"; // استيراد أيقونة الويب من Material UI

const data=[
    {
    icon:<WebIcon className="icons" /> ,
    title:"Web Development",
    suptitle:"   Our web development services deliver responsive, high-performance websites tailored to your business needs. We ensure seamless user experiences with cutting-edge technology and robust functionality.  "
    },
    {
    icon:<WebIcon className="icons" /> ,
    title:"Web Development",
    suptitle:"   Our web development services deliver responsive, high-performance websites tailored to your business needs. We ensure seamless user experiences with cutting-edge technology and robust functionality.  "
    },
    {
    icon:<WebIcon className="icons" /> ,
    title:"Web Development",
    suptitle:"   Our web development services deliver responsive, high-performance websites tailored to your business needs. We ensure seamless user experiences with cutting-edge technology and robust functionality.  "
    },
    {
    icon:<WebIcon className="icons" /> ,
    title:"Web Development",
    suptitle:"   Our web development services deliver responsive, high-performance websites tailored to your business needs. We ensure seamless user experiences with cutting-edge technology and robust functionality.  "
    },
]
export default function Main() {
  return (
    <div className="main">
      <h4>Or Sirvic</h4>
     <div className="boxing">
     {data.map((index)=>{
    return(
        <div key={index.icon}  className="cards">
        <div className="box ">
          <div className="img">
            {index.icon}
          </div>

          <h5> {index.title}</h5>
          <p>
           {index.suptitle}
          </p>
        </div>
      </div>
    )
  })}
     </div>

    </div>
  );
}
