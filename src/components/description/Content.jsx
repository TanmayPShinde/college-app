import "./styles.css";
import P from "../shared/p";
import Heading from "../shared/heading";
import Button from "../shared/button";
import Wrap from "../shared/wrap";

const Content = ({ index, heading, description, link, side }) => {
  return (
    <div className={`content-block ${side === "left" ? "left" : "right"}`}>
      <Wrap variant="wrap-content">
        {index && (
          <P variant="title-copy">
            {index}
            <span style={{ color: "var(--secondary-color)" }}>.</span>
          </P>
        )}
        <Heading>{heading}</Heading>
        <P variant="paragraph">{description}</P>
        {link && (
          <Button content="Learn More" sx={{ display: "block" }} link={link} />
        )}
      </Wrap>
    </div>
  );
};

Content.defaultProps = {
  side: "left",
};

export default Content;
