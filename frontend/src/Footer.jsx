import logoUrl from "./assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <img src={logoUrl} alt="logo" className="footerLogo" />
        </div>
        <small>Copyright © 2023 GAS Coders</small>
      </footer>
    </>
  );
};

export default Footer;
