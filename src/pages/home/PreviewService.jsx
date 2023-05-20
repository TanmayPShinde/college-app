import React from "react";
import Section from "../../components/shared/section";
import Container from "../../components/shared/container/Container";
import P from "../../components/shared/p";

import "./styles.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const PreviewService = ({ section, align, previewImage, title, features }) => {
  return (
    <Section variant={`section-${section}`}>
      <Container className="container-1201">
        <div
          className={`d-flex align-items-center preview-content-wrap ${
            align === "right" ? "justify-content-end" : ""
          }`}
        >
          <div style={{ width: "80%" }}>
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOnce
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src={previewImage}
                alt="preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll
            animateIn={`animate__fadeIn${align === "left" ? "Right" : "Left"}`}
            animateOnce
            className="content-square-1 "
            style={{ [align === "left" ? "right" : "left"]: "0" }}
          >
            <div className="">
              <P variant="title-content">{title}</P>
              {features.map((feature, ind) => (
                <h3 className="heading-5" key={ind}>
                  - {feature}
                </h3>
              ))}
            </div>
          </AnimationOnScroll>
        </div>
      </Container>
    </Section>
  );
};

PreviewService.defaultProps = {
  section: "ow",
  align: "left",
};

export default PreviewService;
