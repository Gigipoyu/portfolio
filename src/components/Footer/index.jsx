import './footer.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="footer_home">
        <img src={logo} alt="logo" />
        <p className="footer_legend">© 2024 portfolio. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;