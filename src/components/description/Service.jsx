import Wrap from "../shared/wrap";
import P from "../shared/p";
import Heading from "../shared/heading";

import "./styles.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Service = ({ title, heading, serviceImage, imageAlt }) => (
  <AnimationOnScroll
    animateIn={"animate__fadeInUp"}
    animateOnce
    animatePreScroll={false}
  >
    <Wrap variant="title-wrap-copy">
      <P variant="title">{title}</P>
      <Heading variant="heading-primary h3-center">{heading}</Heading>
      <img
        className="description-service-image"
        src={serviceImage}
        loading="lazy"
        width="771"
        alt={imageAlt}
        style={{
          marginTop: "52px",
          marginBottom: "0px",
        }}
      ></img>
    </Wrap>
  </AnimationOnScroll>
);

export default Service;
