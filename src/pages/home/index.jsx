import React from "react";
import Hero from "../../components/hero";
import HeroImage from "./assets/job-interview.svg";
import Services from "./Services";
import Description from "../../components/description/Description";
import PreviewService from "./PreviewService";
import PageConclusion from "../../components/layout/pageConclusion/PageConclusion";

import EmployerImg from "./assets/job-offer.svg";
import UniversityImg from "./assets/global-online-education.svg";
import CandidateImg from "./assets/resume-writing-service.svg";
import UniversityPreview from "./assets/group-11383.svg";
import EmployerPreview from "./assets/group-11354.svg";
import CandidatePreview from "./assets/group-11364.svg";

function Home() {
  return (
    <>
      <Hero
        heading="Showcase talents and uncover opportunities"
        subHeading=""
        description="Talenlio helps streamline campus placements for universities, makes recruitment seamless for employers and helps candidates land their dream job."
        heroImage={HeroImage}
      />
      <Services />
      <Description
        title="How it Works"
        heading="Connecting Employers, Universities and Candidates"
        contents={[
          {
            image: EmployerImg,
            alt: "employer descr-img",
            index: "1",
            heading: "Employer creates Jobs",
            description:
              "Talenlio enables companies to recruit top talent by creating jobs, managing interviews and connecting with colleges and universities.",
            link: "/for-employers",
          },
          {
            image: UniversityImg,
            alt: "university descr-img",
            index: "2",
            heading: "Universities manage campus drives",
            description:
              "Campus placement drives can be seamlessly managed by University and college placement centres, helping students to get placed at different companies",
            link: "/for-universities",
            side: "right",
            marginBottom: "140px",
          },
          {
            image: CandidateImg,
            alt: "candidate descr-img",
            index: "3",
            heading: "Candidates can apply for jobs",
            description:
              "Candidates can create their Resumes and Personal websites to showcase their skills and apply for open jobs and Campus placements.",
            link: "/for-candidates",
            marginBottom: "0px",
          },
        ]}
      />
      <PreviewService
        align="left"
        previewImage={UniversityPreview}
        title="Universities"
        features={[
          "Seamless Campus Placements",
          "Batch-wise Candidate management",
          "Candidate placement data and Job",
          "Evaluation records",
        ]}
      />
      <PreviewService
        section="w"
        align="right"
        previewImage={EmployerPreview}
        title="Employers"
        features={[
          "Streamlined Hiring Process",
          "Easy Workflows and Virtual Interviews",
          "Evaluations and Automated HR Documentation process",
        ]}
      />
      <PreviewService
        align="left"
        previewImage={CandidatePreview}
        title="Candidates"
        features={[
          "Personal Website",
          "Modern Resume templates in Web and PDF mode",
          "Easily apply for Jobs and Campus Placement drives",
        ]}
      />
      <PageConclusion
        content="Discover the place where Talent meets Opportunities!"
        buttonText="Join waitlist"
        buttonLink="https://app.talenlio.com/auth/user-type"
      />
    </>
  );
}

export default Home;
