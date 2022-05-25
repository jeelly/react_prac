import React from "react";
import styled from "styled-components";
import {
  useParams,
  Link,
  BrowserRouter,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

const Review = (props) => {
  // const history = useHistory();
  const params = useParams();
  // console.log(props);
  //평점
  const [rate, setRate] = React.useState(0);
  // console.log(rate);
  //별점
  React.useEffect(() => {
    const press = (e) => {
      if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
        setRate(parseInt(e.key));
      }
    };
    window.addEventListener("keydown", press);
    return () => window.removeEventListener("keydown", press);
  }, []);
  return (
    <>
      <Title>
        <Pstyle>{params.week_day}요일</Pstyle> 평점 남기기
      </Title>
      <Wrap>
        {Array.from({ length: 5 }, (item, idx) => {
          return (
            <Circle
              key={idx}
              onClick={() => {
                setRate(idx + 1);
              }}
              style={{ backgroundColor: rate < idx + 1 ? "#ddd" : "#ffac64" }}
            ></Circle>
          );
        })}
      </Wrap>

      <Line />
      <StyledLink to="/">평점 남기기</StyledLink>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  width: 100%;
`;
const Circle = styled.div`
  width: 31px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
`;
const Pstyle = styled.p`
  color: #eee;
  font-weight: bold;
  padding: 2px 10px;
  border-radius: 10px;
  background-color: #8b6162;
  display: inline-block;
`;
const Title = styled.h1`
  color: rosybrown;
  text-align: center;
  font-size: 22px;
  font-weight: normal;
`;
const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;
const StyledLink = styled(Link)`
  border: none;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: rosybrown;
  &:hover {
    background-color: #efbfbf;
  }
`;

export default Review;
