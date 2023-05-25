import React, { useEffect, useState } from "react";
import Hero from "../../components/hero";
import HeroImage from "./assets/job-interview.svg";
import Services from "./Services";
import Description from "../../components/description/Description";
import PreviewService from "./PreviewService";
import PageConclusion from "../../components/layout/pageConclusion/PageConclusion";
import SimpleCarousel from "../../components/carousel/SimpleCarousel";

import EmployerImg from "./assets/job-offer.svg";
import UniversityImg from "./assets/global-online-education.svg";
import CandidateImg from "./assets/resume-writing-service.svg";
import UniversityPreview from "./assets/group-11383.svg";
import EmployerPreview from "./assets/group-11354.svg";
import CandidatePreview from "./assets/group-11364.svg";

// firebase
import { db } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const query = ref(db, "events");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).forEach((project) => {
          setEvents((events) => [...events, project]);
        });
      }
    });
  }, []);

  console.log(events);

  const even = [
    {
      date: "12june",
      photo:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      register:
        "https://docs.google.com/forms/d/1J18pcGcDp7XMuU1xfZlif-yUPku4m8A0qGbmpIndd_k/edit#responses",
      subtitle:
        "there are 2 stages in the competition ideathon and hackthon respectively",
      title: "hackathon competition",
    },
    {
      date: "14june",
      photo:
        "https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      register:
        "https://docs.google.com/forms/d/1J18pcGcDp7XMuU1xfZlif-yUPku4m8A0qGbmpIndd_k/edit#responses",
      subtitle: "festival of sinhgad for enjoying life",
      title: "artist game",
    },
  ];

  return (
    <>
      <SimpleCarousel>
        {even.map((event) => {
          <div>
            <img src={event.photo} alt="event" />
            <h2>{event.title}</h2>
          </div>;
        })}
        <div>
          <img src="" alt="" />
        </div>
      </SimpleCarousel>
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
