const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a href="www.linkedin.com/in/vivek-pal-8b4a4a273" target="_blank">
          Vivek Pal
        </a>
        <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          <span>Food Factory</span>
        </strong>
      </div>
    );
  };
  export default Footer;
  