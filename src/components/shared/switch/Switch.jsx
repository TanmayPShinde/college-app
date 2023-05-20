import P from "../p";

const Switch = ({ forCurrency, setMonthly }) => {
  const onClick = () => {
    setMonthly((prev) => !prev);
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <P
        sx={{
          fontSize: "18px",
          margin: "0",
          color: "#170f49",
          fontFamily: "Jost,sans-serif",
        }}
      >
        {forCurrency ? "$USD ( For World )" : "Monthly"}
      </P>
      <span
        className="form-check form-switch ms-3 fs-3"
        style={{ display: "inline-block" }}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          style={{ cursor: "pointer" }}
          onClick={onClick}
        />
      </span>
      <P
        sx={{
          fontSize: "18px",
          margin: "0",
          color: "#170f49",
          fontFamily: "Jost,sans-serif",
        }}
      >
        {forCurrency ? "₹ ( For India )" : "Anually"}
      </P>
    </div>
  );
};

export default Switch;
