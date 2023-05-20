import "./styles.css";

const Container = ({ children, className, sx }) => {
  return (
    <div className={className} style={sx}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  className: "container-1201",
};

export default Container;
