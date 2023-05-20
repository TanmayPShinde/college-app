import "./styles.css";
import P from "../../p";
import { Link } from "react-router-dom";

const CardProcess = ({ icon, heading, children, link }) => {
  return (
    <div className="card-process">
      <div className="process-icon">
        <img src={icon} loading="lazy" alt="card icon" />
      </div>
      <div className="heading-large">{heading}</div>
      <P variant="paragraph-standard">{children}</P>
      <Link className="butt" to={link}>
        <div className="butt-text">Learn more</div>
      </Link>
    </div>
  );
};

export default CardProcess;
