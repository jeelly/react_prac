// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {
  useHistory,
  Link,
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
//랜덤 1~5 생성
function getRandomStar() {
  return Math.floor(Math.random() * 5 + 1);
}

const Rating = (props) => {
  const history = useHistory();
  // // 날짜
  // const day = new Date ();
  // var week = new Array('일','월','화','수','목','금','토','일','월','화','수','목','금','토','일')
  //   // 별점
  //   const [rank, setRank] = useState("0");
  //   const star = '*'

  //   const onClick = () => {
  //     setRank(getRandomStar());
  //     console.log(rank)
  //   }
  //   window.onload = function () {
  //   }

  //날짜
  const day_text = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  };

  const week_days = Object.keys(day_text).map((_d, idx) => {
    // 오늘 날짜를 구해요!
    let today = new Date().getDay();
    let d =
      today + parseInt(_d) > 6
        ? today + parseInt(_d) - 7
        : today + parseInt(_d);

    // console.log(d);
    return day_text[d];
  });

  //평점 합계
  let sum = 0;
  const week_rates = week_days.map((w, idx) => {
    const random = Math.floor(Math.random() * (Math.floor(5) + 1));

    sum += random;

    return {
      day: w,
      rate: random,
    };
  });

  const rate_avg = (sum / week_rates.length).toFixed(1);
  const [avg, setAvg] = useState(rate_avg);
  return (
    <>
      <div>
        <Title>내 일주일은?</Title>
        <Line />

        {week_rates.map((w, idx) => {
          return (
            <Item key={`week_day_${idx}`}>
              <Week>{w.day}</Week>
              {Array.from({ length: 5 }, (item, idx) => {
                return (
                  <Circle
                    key={idx}
                    style={
                      { backgroundColor: w.rate < idx ? "#ddd" : "#FFD400" }
                      // {borderLeft: w.rate < idx ? "15px solid #ddd" : "15px solid #ffeb3b"}
                      // {borderTop: w.rate < idx ? "15px solid #ddd" : "15px solid #ffeb3b"},
                    }
                  ></Circle>
                );
              })}
              <StyledLink
                onClick={() => {
                  history.push(`/review/${w.day}`);
                }}
              >
                삼각버튼
              </StyledLink>
            </Item>
          );
        })}
        <Avg>
          평균 평점 {avg}
          <AvgBtn
            onClick={() => {
              setAvg(parseInt(0).toFixed(1));
            }}
          >
            <p>Reset</p>
          </AvgBtn>
        </Avg>
      </div>
    </>

    // {/* <button onClick={onClick}>랜덤</button>
    // <Item>
    // <p>{week[day.getDay()]}</p>
    // {/* <div>{star.repeat(rank)}</div> */}
    // {/* {rank} */}
    // {/* <StyledLink to="/Review">삼각버튼</StyledLink> */}
    // {/* </Item> */}
    // {/* <Item> */}
    // {/* <p>{week[day.getDay() + 1]}</p> */}
    // {/* <StyledLink to="/Review">삼각버튼</StyledLink> */}
    // {/* </Item> */}
    // {/* <Item> */}
    // {/* <p>{week[day.getDay() + 2]}</p> */}
    // {/* <StyledLink to="/Review">삼각버튼</StyledLink> */}
    // {/* </Item> */}
    // {/* <Item> */}
    // {/* <p>{week[day.getDay() + 3]}</p> */}
    // {/* <StyledLink to="/Review">삼각버튼</StyledLink> */}
    // {/* </Item> */}
    // {/* <Item> */}
    // {/* <p>{week[day.getDay() + 4]}</p> */}
    // {/* <StyledLink to="/Review">삼각버튼</StyledLink> */}
    // {/* </Item> */}
    // {/* <Item> */}
    // {/* <p>{week[day.getDay() + 5]}</p> */}
    // {/* <StyledLink to="/Review">삼각버튼</StyledLink> */}
    // {/* </Item> */}
    // {/* <Item> */}
    // {/* <p>{week[day.getDay() + 6]}</p> */}
    // {/* <StyledLink to="/Review">삼각버튼</StyledLink> */}
    // {/* </Item> */}
  );
};

// const StarsRating = styled.StarsRating``
//Style
const Avg = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: brown;
  margin-top: 50px;
`;
const AvgBtn = styled.div`
  margin: 0 auto;
  background-color: #bc8f8f;
  width: 50%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  &:hover {
    background-color: #efbfbf;
  }
`;
const Circle = styled.div`
  // width:30px;
  // height:30px;
  // border-radius:30px;
  // margin:5px;
  display: block;
  width: 31px;
  height: 40px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;
const Week = styled.p`
  margin: 0 0.5rem 0 0;
  font-weight: bold;
`;
/* 삼각버튼 */
const StyledLink = styled(Link)`
  text-indent: -9999px;
  width: 0;
  height: 0;
  border: none;
  background-color: transparent;
  border-top: 15px solid transparent;
  border-left: 30px solid rosybrown;
  border-bottom: 15px solid transparent;
  cursor: pointer;
`;
// const Item = styled.div`
//   display:flex;
//   flex-direction:row;
//   align-items: center;
//   justify-content:space-between;
// `
const Title = styled.h1`
  color: rosybrown;
  text-align: center;
`;
const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default Rating;
