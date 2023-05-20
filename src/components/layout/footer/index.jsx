import ContainerFooter from "../../shared/container/containerFooter";
import Logo from "../../../media/logo-white.svg";
import { Link } from "react-router-dom";
import LinksBlock from "./LinksBlock";

import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <ContainerFooter>
        <div style={{ order: "-1" }}>
          <Link to="#" className="footer-logo-link">
            <img
              src={Logo}
              width="140"
              alt="Showcase talents and uncover opportunities"
              className="footer-image"
            />
          </Link>
        </div>
        <div className="div-block-2">
          <LinksBlock
            heading="Legal"
            links={{
              "Contact us": "/privacy-policy/#contact-us",
              "Privacy Policy": "/privacy-policy",
              Disclaimer: "/disclaimer",
              "Terms and Conditions": "/terms-and-conditions",
            }}
          />
          <LinksBlock
            heading="Community"
            links={{
              Login: "https://app.talenlio.com/auth/login",
              "Join Waitlist": "https://form.jotform.com/221864175912358",
              "Book a demo": "https://www.talenlio.com/#",
            }}
          />
          <LinksBlock
            heading="Get Started"
            links={{
              Home: "#",
              Employers: "/for-employers",
              Universities: "/for-universities",
              Candidates: "/for-candidates",
            }}
          />
        </div>
      </ContainerFooter>
      <div className="d-flex p-0 justify-content-between align-items-center company-info">
        <div className="text-block-3">
          © Copyright 2023 All Rights Reserved | Powered by{" "}
          <a
            href="https://www.ilmtec.in/"
            target="_blank"
            className="link-3"
            rel="noreferrer"
          >
            <strong>ILMTEC</strong> Solutions
          </a>
          Private Limited
        </div>
        <div className="footer-content-wrapper">
          <div className="footer-social-row">
            <a
              href="https://www.linkedin.com/company/talenlio/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link-2"
            >
              <img
                src="https://d33wubrfki0l68.cloudfront.net/96f41bdb71863c04b1d14057d9dd6e7aba8e1676/fa42b/images/bi_linkedin.svg"
                loading="lazy"
                width="22"
                alt="Showcase talents and uncover opportunities"
              />
            </a>
            <a href="/" className="footer-social-link-2 w-inline-block">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/c4a307a5c328d7451b80854ece843ca09b99b64b/6c7ea/images/dashicons_email.svg"
                loading="lazy"
                width="26"
                alt="Showcase talents and uncover opportunities"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
