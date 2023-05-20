import { Link } from "react-router-dom";
import Heading from "../../shared/heading";
import "./styles.css";

const LinksBlock = ({ heading, links }) => {
  return (
    <div className="div-block-12">
      <Heading variant="footer-heading">{heading}</Heading>
      {Object.keys(links).map((text, index) => (
        <Link
          to={links[text]}
          className="footer-link-2"
          target="_blank"
          key={index}
        >
          {text}
        </Link>
      ))}
    </div>
  );
};

LinksBlock.dedaultProps = {
  heading: "footer",
  links: {},
};

export default LinksBlock;
