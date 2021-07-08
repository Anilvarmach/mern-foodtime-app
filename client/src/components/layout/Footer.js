import React from "react";

const Footer = () => {
  return (
    <footer className="footer grey darken-4">
      <div className="container white-text">
        <div className="left">
          <h6>Copyright &copy; {new Date().getFullYear()}</h6>
        </div>
        <div className="right">
          <h6>
            Made by{" "}
            <a
              href="https://anilvarmach.github.io/anilvarmach-portfolio/"
              target="_blank"
            >
              <span className="blue-text">Anil Varma</span>
            </a>
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
