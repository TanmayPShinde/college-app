import Section from "../shared/section";
import ContainerBg from "../shared/container/containerBg/ContainerBg";
import Wrap from "../shared/wrap";
import P from "../shared/p";
import Heading from "../shared/heading";
import Content from "./Content";

import "./styles.css";
import ExampleImage from "../assets/rectangle-1684.svg";
import Service from "./Service";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Description = ({
  serviceTitle,
  serviceHeading,
  serviceImage,
  serviceImageAlt,
  title,
  heading,
  contents,
}) => {
  return (
    <Section variant="section-content">
      {serviceImage && (
        <Service
          title={serviceTitle}
          heading={serviceHeading}
          serviceImage={serviceImage}
          imageAlt={serviceImageAlt}
        />
      )}
      <ContainerBg>
        <Wrap>
          <P variant="title">{title}</P>
          <Heading>{heading}</Heading>
        </Wrap>
        {contents.map((element, index) => (
          <div
            className={`${
              index % 2 === 0 ? "column-wrap-reversed" : "d-flex column-wrap"
            }`}
            style={
              element.marginBottom
                ? {
                    marginBottom: element.marginBottom,
                  }
                : {}
            }
            key={index}
          >
            <AnimationOnScroll
              animateIn={`${
                index % 2 === 0 ? "animate__fadeInRight" : "animate__fadeInLeft"
              }`}
              animateOnce
              animatePreScroll={false}
            >
              <div
                className={`image-block `}
                style={{
                  padding: element.padding ? element.padding : "30px",
                }}
              >
                <img
                  src={element.image}
                  alt={element.alt}
                  width={element.imageWidth ? element.imageWidth : "315"}
                  className={
                    element.imageWidth ? "" : "home-description-content"
                  }
                  loading="lazy"
                />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn={`${
                index % 2 === 0 ? "animate__fadeInLeft" : "animate__fadeInRight"
              }`}
              animateOnce
              animatePreScroll={false}
            >
              <Content
                index={element.index ? element.index : undefined}
                heading={element.heading}
                description={element.description}
                link={element.link}
                side={element.side ? element.side : "left"}
              />
            </AnimationOnScroll>
          </div>
        ))}
      </ContainerBg>
    </Section>
  );
};

Description.defaultProps = {
  contents: [
    {
      image: ExampleImage,
      alt: "example image",
      index: 1,
      heading: "example",
      description:
        "Talenlio enables companies to recruit top talent by creating jobs, managing interviews and connecting with colleges and universities.",
      link: "/for-employers",
    },
  ],
};

export default Description;
