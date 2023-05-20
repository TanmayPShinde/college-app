import Section from "../../components/shared/section";
import ContainerLarge from "../../components/shared/container/containerLarge/ContainerLarge";
import Wrap from "../../components/shared/wrap";
import P from "../../components/shared/p";
import Heading from "../../components/shared/heading";
import CardProcess from "../../components/shared/card/cardProcess/CardProcess";
import EmployersIcon from "./assets/group-11375.svg";
import UniversityIcon from "./assets/group-11374.svg";
import CandidatesIcon from "./assets/group-11373.svg";

const Services = () => {
  return (
    <Section variant="section-blog">
      <Section variant="sub-section">
        <ContainerLarge>
          <Wrap variant="wrap-title">
            <P variant="title">OUR&nbsp;SERVICES</P>
            <Heading>End - to - End solution for Hiring and Placement</Heading>
          </Wrap>
          <div className="row gx-4 gy-4">
            <div className="col-lg-4 col-md-6">
              <CardProcess
                heading="For Employers"
                link="/for-employers"
                icon={EmployersIcon}
              >
                Campus-Hiring and online <br />
                Recruitment Infrastructure.
              </CardProcess>
            </div>
            <div className="col-lg-4 col-md-6">
              <CardProcess
                heading="For Universities"
                link="/for-universities"
                icon={UniversityIcon}
              >
                Automated and networked <br />
                Placement System.
              </CardProcess>
            </div>
            <div className="col-lg-4 col-md-6">
              <CardProcess
                heading="For Candidates"
                link="/for-candidates"
                icon={CandidatesIcon}
              >
                Job application tracking <br />
                and &nbsp;profile building.
              </CardProcess>
            </div>
          </div>
        </ContainerLarge>
      </Section>
    </Section>
  );
};

export default Services;
