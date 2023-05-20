import Section from "../../shared/section";
import Container from "../../shared/container/Container";
import Wrap from "../../shared/wrap";
import Heading from "../../shared/heading";
import Button from "../../shared/button";

const PageConclusion = ({ content, boldContent, buttonText, buttonLink }) => {
  return (
    <Section variant="cta-section-4">
      <Container className="container-1201">
        <Wrap variant="title-wrap-2">
          <Heading variant="h1-cta-4">
            {content}
            {boldContent && (
              <>
                <br />
                <strong>{boldContent}</strong>
              </>
            )}
          </Heading>
        </Wrap>
      </Container>
      <Button variant="primary" content={buttonText} link={buttonLink} />
    </Section>
  );
};

export default PageConclusion;
