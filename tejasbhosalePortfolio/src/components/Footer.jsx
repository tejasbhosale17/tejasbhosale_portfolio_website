import React from "react";
import "./styles/footer.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2025 Tejas Bhosale. All rights reserved.{" "}
          <a
            href="https://www.tejasbhosale.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            www.tejasbhosale.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
