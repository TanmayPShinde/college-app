import React, { useEffect, useState } from "react";
import "./styles.css";
import H1 from "../shared/h1";
import P from "../shared/p";
import Button from "../shared/button";

const Hero = ({ heading, subHeading, description, heroImage }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [animation, setAnimation] = useState("");

  const handleMouseEnter = () => {
    setAnimation("animate__animated animate__jello");
  };

  const handleMouseLeave = () => {
    setAnimation("");
  };

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="d-flex animate__animated animate__fadeInDown">
          <div className="hero-block">
            <div className="content-block-hero">
              {subHeading && <P variant="title-page">{subHeading}</P>}
              <H1 content={heading} />
              <P variant="paragraph-hero">{description}</P>
              <div className="btn-wrap-hero">
                <Button
                  content="Join Waitlist"
                  link="https://app.talenlio.com/auth/user-type"
                  variant="primary"
                />
                <Button
                  content="Watch Video"
                  link="https://youtu.be/axjp1bjy5eI"
                  sx={{ marginLeft: "22px" }}
                />
              </div>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img
              src={heroImage}
              className={`hero-image ${animation}`}
              alt="job interview"
              onMouseEnter={handleMouseEnter}
              onAnimationEnd={handleMouseLeave}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
