import React, { useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  padding: 30px 0px;

  display: flex;
  flex-direction: row;
`;

const ImageBox = styled.div`
  width: 350px;
  min-width: 350px;
  height: 350px;

  position: relative;
  margin-right: 40px;
`;

const Image = styled.img`
  width: 350px;
  height: 350px;
  position: absolute;
  top: 0px;
  left: 0px;

  object-fit: cover;
`;

const PrevBtn = styled.div`
  position: absolute;
  bottom: 3px;
  left: 3px;
  color: #fff;
  z-index: 2;
  text-shadow: 2px 2px 2px #000;

  cursor: pointer;
`;

const NextBtn = styled.div`
  position: absolute;
  bottom: 3px;
  right: 3px;
  color: #fff;
  z-index: 2;
  text-shadow: 2px 2px 2px #000;

  cursor: pointer;
`;

const PublicComp3 = ({
  arr = [
    {
      imageSource:
        "https://www.yongpyong.co.kr/images/kor/skiNboard/img_yongpyongski01.png",
      title: "Component Title - 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui suscipit repellat sapiente illo aut itaque id quos aspernatur consequuntur placeat quisquam repellendus officiis repudiandae nesciunt, impedit ratione voluptatibus aliquid! Eaque?",
    },
    {
      imageSource:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsM7YTvVO-4yUsxyHEYIygMQsnTZvQKcuHGw&usqp=CAU",
      title: "Component Title - 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui suscipit repellat sapiente illo aut itaque id quos aspernatur consequuntur placeat quisquam repellendus officiis repudiandae nesciunt, impedit ratione voluptatibus aliquid! Eaque?",
    },
    {
      imageSource: "https://t1.daumcdn.net/cfile/tistory/255F0F4D596A498D27",
      title: "Component Title - 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui suscipit repellat sapiente illo aut itaque id quos aspernatur consequuntur placeat quisquam repellendus officiis repudiandae nesciunt, impedit ratione voluptatibus aliquid! Eaque?",
    },
  ],
}) => {
  //////////////// STATE ////////////////
  const [idx, setIdx] = useState(0);

  //////////////// HOOKS ////////////////

  //////////////// EFFECT ////////////////

  //////////////// HANDLER ////////////////
  const prevHandler = useCallback(() => {
    setIdx((prev) => {
      if (prev === 0) {
        return arr.length - 1;
      } else {
        return prev - 1;
      }
    });
  }, [idx]);

  const nextHandler = useCallback(() => {
    setIdx((prev) => {
      if (prev === arr.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }, [idx]);

  return (
    <Box>
      <ImageBox>
        <Image src={arr[idx].imageSource} />
        <PrevBtn onClick={prevHandler}>PREV</PrevBtn>
        <NextBtn onClick={nextHandler}>NEXT</NextBtn>
      </ImageBox>

      <div>
        <div>{arr[idx].title}</div>
        <article>{arr[idx].desc}</article>
      </div>
    </Box>
  );
};

export default PublicComp3;
