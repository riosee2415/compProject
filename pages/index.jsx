import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import QuickMenu from "../components/QuickMenu";
import Fade from "react-reveal/Fade";
import PublicComp1 from "../components/PublicComp1";
import PublicComp2 from "../components/PublicComp2";
import PublicComp3 from "../components/PublicComp3";
import PublicComp4 from "../components/PublicComp4";

const datum = [
  {
    name: "INTRO",
    target: "/intro",
  },
  {
    name: "CONTACT",
    target: "/contact",
  },
  {
    name: "TEAM",
    target: "/team",
  },
  {
    name: "PROJECT",
    target: "/project",
  },
];

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .react-reveal {
    width: 100%;
    padding: 0px !important;
  }
`;

const ImageSection = styled.section`
  width: 100%;
  padding: 20px 0px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 50%;
  height: 400px;

  object-fit: cover;
  box-shadow: 3px 3px 7px #999;
  transition: 0.5s;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
  }
`;

const QuickSection = styled.section`
  width: 100%;
  padding: 20px 0px;
`;

const App = () => {
  return (
    <Wrapper>
      <Fade>
        <ImageSection>
          <Image
            src="https://cdn.aitimes.com/news/photo/202204/143777_149131_434.jpg"
            alt="메인이미지1"
          />
          <Image
            src="https://img.hankyung.com/photo/202104/01.26068926.1.jpg"
            alt="메인이미지2"
          />
        </ImageSection>
      </Fade>

      <Fade bottom>
        <QuickSection>
          <QuickMenu datum={datum} />
        </QuickSection>
      </Fade>

      <PublicComp1
        datum={[
          {
            title: "INTRODUCE",
            content: "Introduce Us. Come To Here!",
            link: "/intro",
          },

          {
            title: "OUR TEAM",
            content: "Team Profile And Team Description",
            link: "/team",
          },

          {
            title: "SHOW YOUR THINK",
            content: "If You Contact Us...",
            link: "/contact",
          },
        ]}
      />

      <PublicComp2
        imgSource="https://www.yongpyong.co.kr/images/kor/skiNboard/img_yongpyongski01.png"
        text="블라블라블라으어쩌구저구"
      />

      <PublicComp3 />
      <PublicComp4 />
    </Wrapper>
  );
};

export default App;
