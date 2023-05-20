import React, { useState } from "react";
import Hero from "../../components/hero";
import HeroImage from "./assets/resume-writing-service.svg";
import Description from "../../components/description/Description";
import PageConclusion from "../../components/layout/pageConclusion/PageConclusion";
import Plans from "../../components/pricing/plans";

import serviceImage from "./assets/dsdfds.svg";
import first from "./assets/frame-11521-p-800.png";
import second from "./assets/group-11384.svg";
import third from "./assets/group-11385.svg";

function Candidates() {
  const [currency, setCurrency] = useState(1);
  return (
    <>
      <Hero
        heading="‍Apply for your jobs professionally"
        subHeading="For Candidates"
        description="Connect seamlessly with employers and placement drives at your university with a modern resume, cover letters and dedicated website."
        heroImage={HeroImage}
      />
      <Description
        serviceTitle="JOB-HUNTING MADE SIMPLE"
        serviceHeading="Create your resume, showcase your skills, and Apply for jobs easily"
        serviceImage={serviceImage}
        serviceImageAlt="candidate service"
        title="Candidate Features"
        heading="All - in - one resume builder and job tracking"
        contents={[
          {
            image: first,
            alt: "alt",
            heading: "Build a professional Resume",
            description:
              "Share your modern resume with potential employers by using a template with essential data",
            width: "60%",
            padding: "0px",
            imageWidth: "100%",
          },
          {
            image: second,
            alt: "alt",
            heading: "Section - wise Resume filling",
            description:
              "Premade resume sections will help you to create a professionally acclaimed resume quickly and easily",
            width: "60%",
            padding: "0px",
            imageWidth: "100%",
            side: "right",
            marginBottom: "120px",
          },
          {
            image: third,
            alt: "alt",
            heading: "Get your own Personal Website",
            description:
              "Set up a personal website with your resume data and share link with employers",
            width: "60%",
            padding: "0px",
            imageWidth: "100%",
            marginBottom: "0px",
          },
        ]}
      />
      <Plans
        billedAnually
        monthly={currency}
        setMonthly={setCurrency}
        plans={[
          {
            title: "Standout",
            price: 2,
            priceINR: 100,
            benefits: [
              "Create up to 1 resume",
              "Create up to 1 cover letter",
              "Create up to 1 website",
              "Share resumes and cover letters online",
              "Basic support (by email only)",
            ],
          },
          {
            title: "Professional",
            price: 4,
            priceINR: 249,
            priceDesc: "One-time pay for lifetime access",
            popular: true,
            popularText: "Best seller",
            benefits: [
              "Create upto 5 resumes",
              "Create upto 5 cover letters",
              "Create upto 5 websites",
              "Share resumes and cover letters, websites online",
              "Review your resumes with Industry expert",
              "Free 30-mins career counselling",
              "Premium support (by phone call & email)",
            ],
          },
        ]}
      />
      <PageConclusion
        content="Showcase talent and uncover opportunities!"
        buttonText="Get Started"
        buttonLink="https://app.talenlio.com/auth/login"
      />
    </>
  );
}

export default Candidates;
