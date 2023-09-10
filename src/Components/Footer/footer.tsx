import "./footer.scss";
import logo from "../../../public/images/logo-branca.png";
import youtube from "../../../public/images/youtube.svg";
import instagram from "../../../public/images/instagram.svg";

export const Footer = () => {
  return (
    <div className="container-footer">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <img src={logo} alt="logo" width={50} />
          <a href="https://www.youtube.com/@obralumen" className="share  youtube">
            <img src={youtube} alt="youtube" width={50} />
          </a>
          <a href="https://www.instagram.com/lumenserfeliz/" className="share  youtube">
            <img src={instagram} alt="instagram" width={50} />
          </a>
        </div>
      </footer>
    </div>
  );
};
