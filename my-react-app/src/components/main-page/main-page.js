import React, { useEffect } from "react";
import "./main-page.css";
import { Element } from "react-scroll";

function MainPage() {

  //Play the video without Controls
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

  //Download Game
  const handleDownloadZip = () => {

    const zipFileUrl = "https://firebasestorage.googleapis.com/v0/b/anwesbite.appspot.com/o/hauntedHollows.zip?alt=media&token=b2c35a1f-cad6-4272-af43-285910b8c2c1&_gl=1*114c2kt*_ga*MTY3NDg0NzkzLjE2OTc0NzU3MDE.*_ga_CW55HF8NVT*MTY5NzU1ODIxOC41LjEuMTY5NzU1ODI2MC4xOC4wLjA.";
    const link = document.createElement("a");

    link.href = zipFileUrl;
    link.download = "HauntedHollow.zip";
    link.click();
  };

  return (
    <div>
      <div className="mainpage-container">
        <div className="download">
          <div className="picture">
            <img src="./images/Screenshot_2-removebg-preview.png" alt="Image" />
          </div>
          <div className="button-play-now" onClick={handleDownloadZip}>
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
        </div>
      </Element>
    </div>
  );
}

export default MainPage;
