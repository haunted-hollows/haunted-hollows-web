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
        <div className="download">
        <div className="picture">
        <img src="./images/Screenshot_2-removebg-preview.png" alt="Image" />
      </div>
      <div className="button-play-now">
      <p>PLAY NOW</p>
  </div>
        </div>
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