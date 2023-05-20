import React, { useState } from "react";
import Hero from "../../components/hero";
import HeroImage from "./assets/global-online-education.svg";
import Description from "../../components/description/Description";

import serviceImage from "./assets/sdsa.svg";
import first from "./assets/group-11382.svg";
import second from "./assets/group-11383.svg";
import third from "./assets/group-11376.svg";
import PageConclusion from "../../components/layout/pageConclusion/PageConclusion";
import Plans from "../../components/pricing/plans";

function Universities() {
  const [currency, setCurrency] = useState(1);
  return (
    <>
      <Hero
        heading="‍Streamlined Campus Placements Drives"
        subHeading="For universities"
        description="Organise hassle-free digital campus placement drives for your universities and colleges."
        heroImage={HeroImage}
      />
      <Description
        serviceTitle="Placement drives made easy"
        serviceHeading="Batch-wise Placement Drive and candidate management"
        serviceImage={serviceImage}
        serviceImageAlt="university service"
        title="University Features"
        heading="Automated and networked Placement System"
        contents={[
          {
            image: first,
            alt: "alt",
            heading: "Invite candidates to groups",
            description:
              "Organize and manage your Placement Drive easily by inviting candidates and segmenting them into batches",
            width: "60%",
            padding: "0px",
            imageWidth: "100%",
          },
          {
            image: second,
            alt: "alt",
            heading: "Create campus drives ‍and share job posts",
            description:
              "Easliy monitor student data with Campus Placement drives",
            width: "60%",
            padding: "0px",
            imageWidth: "100%",
            side: "right",
            marginBottom: "120px",
          },
          {
            image: third,
            alt: "alt",
            heading: "Assess Student performance",
            description:
              "Evaluate students' interview skills and improve them by analyzing their performance during interviews",
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
            title: "Digital",
            price: 60,
            priceINR: 4900,
            benefits: [
              "Create up to 5 campus placement drives",
              "Connect up to 5 employers",
              "Up to 5 team members",
              "Email support",
            ],
          },
          {
            title: "Pro",
            price: 85,
            priceINR: 6900,
            popular: true,
            popularText: "Popular",
            benefits: [
              "Create up to 25 campus placement drives",
              "Connect up to 15 employers",
              "Up to 15 team members",
              "Email support",
            ],
          },
          {
            title: "Legend",
            benefits: [
              "Create unlimited placement drives",
              "Connect unlimited employers",
              "Unlimited users",
              "Premium support",
            ],
          },
        ]}
      />
      <PageConclusion
        content="What are you waiting for?"
        buttonText="Join waitlist"
        boldContent="Let's get your placement cell online!"
        buttonLink="https://app.talenlio.com/auth/user-type"
      />
    </>
  );
}

export default Universities;
