import React, { useEffect } from "react";
import "./main-page.css";
import { Element } from "react-scroll";

function MainPage() {

  useEffect(() => {
    const videos = document.querySelectorAll(".video-container video");

    videos.forEach((video) => {
      video.addEventListener("click", () => {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });

      video.addEventListener("ended", () => {
        video.load();
      });
    });
  }, []);


  return (

    
    <div>
      <div className="mainpage-container">
        {/* Content for mainpage-container */}
      </div>
      <Element name="gameplay">
      <div className="titulo-container">
            <p>PRE BETA FOOTAGE</p>
          </div>
        <div className="gameplay">
          <div className="video-container">
            <video src="/video.mp4" poster="Group 14.png"></video>
          </div>
          <div className="video-container">
            <video src="/video.mp4"  poster="Group 15.png"></video>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default MainPage;
