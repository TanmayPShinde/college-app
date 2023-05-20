import "./styles.css";
import Heading from "../../heading";
import P from "../../p";
import Button from "../../button";

const CardPlan = ({
  title,
  popular,
  popularText,
  price,
  priceAnually,
  priceINR,
  priceDesc,
  monthly,
  benefits,
  forCurrency,
}) => {
  return (
    <div className={`card-pricing ${popular ? "popular" : "mt-4"}`}>
      {popular && (
        <div className="popular-badge-align---brix">
          <div className="badge-popular---brix">{popularText}</div>
        </div>
      )}
      <Heading variant="title-plan">{title}</Heading>
      <div
        className={`pricing ${popular ? "popular" : ""}`}
        style={price ? {} : { fontSize: "40px" }}
      >
        {price ? (
          <>
            {monthly
              ? `$${price}`
              : priceINR
              ? `₹${priceINR}`
              : `$${priceAnually}`}
            <span>
              {priceDesc ? priceDesc : forCurrency ? "monthly" : "per user"}
            </span>
          </>
        ) : (
          "Talk to us"
        )}
      </div>
      <P
        sx={{
          fontWeight: "700",
          color: popular ? "white" : "#2e3642",
          marginBottom: "0",
        }}
      >
        What's included
      </P>
      <ul
        className="list-pricing w-list-unstyled"
        style={{ marginBottom: "32px" }}
      >
        {benefits.map((content, ind) => (
          <li className="list-item-pricing" key={ind}>
            <img
              src={
                popular
                  ? "https://d33wubrfki0l68.cloudfront.net/739bca615e80e5b645490421f124fca1b8aa11e8/61fd9/images/6320876d93e4914a73e669f8_webflow-clonable-bullet-white.svg"
                  : "https://d33wubrfki0l68.cloudfront.net/9af8e7151c2b6dfec0f89d4ffaaa8ac8697c9f36/49370/images/6320876d93e4917a19e669f5_check-icon-brix-templates.svg"
              }
              loading="eager"
              alt="Icon"
              className="me-3"
            />
            <P
              sx={{ color: popular ? "white" : "#2e3642", marginBottom: "0" }}
              className=""
            >
              {content}
            </P>
          </li>
        ))}
      </ul>
      <Button
        content="Learn More"
        variant={popular ? "white" : "primary"}
        sx={{ width: "auto" }}
      ></Button>
    </div>
  );
};

CardPlan.defaultProps = {
  title: "Premium",
  popular: false,
  popularText: "popular",
  benefits: ["Publish up to 3 Job posts"],
};

export default CardPlan;
