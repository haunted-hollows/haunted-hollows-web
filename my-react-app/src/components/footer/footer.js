import React from "react";
import "./footer.css";
import imageSrc from "../../images/fio-removebg-preview.png";
import imageSrcGitHub from "../../images/icons8-github-100.png";
import imageSrcLinkedin from "../../images/icons8-linkedin-100.png";
import imageSrcTwitter from "../../images/icons8-twitter-100.png";

function Footer () {
  return (
    <div className="box">
      <div className="box-top">
        
        <div>
          <img className="logo"  src={imageSrc}/>
        </div>

        <div className="pm">
          <p className="p1">ANW Games Team:</p>
          <p className="p1">Filipe Pereira, Gonçalo Veloso, Gonçalo Sousa, Martim Moreira</p>
        </div>
        
        <div className="spacing"></div>
        <div className="spacing-mobile"></div>
        
        <div className="pd">
          <p className="p1">Number: + 351 964 741 017</p>
          <p className="p1">Email: AintNoWayGames@gmail.com</p>
          <p className="p1-mobile">AintNoWayGames@gmail.com</p>
          <p className="p1">Locate us: R. Fonte de Boucas 146, 4720-621 Rendufe</p>
        </div>
        
      </div>
      <div className="box-down">
        <div>
          <p className="p2">© 2023 ANW Games. Todos os direitos reservados.</p>
          <p className="p2-mobile">© 2023 ANW Games. Todos os direitos reservados.</p>
        </div>
        
        <div className="images">
          <a href="https://github.com/haunted-hollows" target="_blank"><img className="social" href="https://github.com/haunted-hollows" src={imageSrcGitHub}/></a>
          <a href="https://www.linkedin.com/in/martim-moreira-1401b3258/" target="_blank"><img className="social" href="https://www.linkedin.com/in/martim-moreira-1401b3258/" src={imageSrcLinkedin}/></a>
          <a href="https://twitter.com/Velosogvf" target="_blank"><img className="social" src={imageSrcTwitter}/></a>
        </div>  
        
        <div></div>
      </div>
    </div>
  );
};

export default Footer;