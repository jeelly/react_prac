import React from "react";
import styled from "styled-components";
import {useParams, Link, BrowserRouter, Route, Switch, useHistory} from "react-router-dom"

const Review = (props) => {
    const history = useHistory();
    const params = useParams();
    console.log(props)
    //평점
    const [rate, setRate] = React.useState(0);

    //별점
    React.useEffect(() => {

        /**
         * Q7. 키보드의 1~5까지 숫자를 누르면 평점이 입력되도록 하고 싶어요! 
         *  -> 키보드를 누를 때 발생할 이벤트를 관리해야겠다! 
         *  -> 자바스크립트에서 키보드 누를 때 발생하는 이벤트가 뭐가 있을까 검색해보기!
         * 
         * Q8. keydown 이벤트를 등록해주면 된다는데, 어디에 등록을 해야할까?
         *  -> 어디에 포커스 되어 있던 나는 평점을 매겨주고 싶으니까 window 객체에 등록해야겠어요. :)
         *  -> 어떻게 등록해줄까? 1. addEventListener로 등록을 해야해! 필요한 게 뭐가 있지? 2. 앗 이벤트 발생할 때 실행할 함수가 필요해! 함수를 만들자. 3. 함수에서는 뭘 해야할까? 4. 1~5를 누를 때를 알아야 해! 그 때만 setRate해주자!
         * 
         * Q9. 등록을 했으면 해제를 해야해요! 언제 이벤트를 해애해야할까?
         *  -> 이 페이지에서 벗어나면 이 이벤트는 필요하지 않으니 해제하고 싶어요.
         *  -> 이 페이지에서 벗어난다? Review 컴포넌트가 화면에 보이지 않을 때구나!
         *  -> useEffect에서 컴포넌트가 사라지는 타이밍을 어떻게 찾는 지 검색해보기!
         *  -> useEffect 훅 내에서 return에 넣어주면 된대요! :)
         */
        
    
        // keydown 이벤트가 발생하면 실행할 함수를 만들어요.
        const press = (e) => {
          console.log("키보드를 누르면 어떤 이벤트가 발생하는 지 확인해야지! : ", e);
    
          // e.key로 받아온(누른 키) 값이 1~5까지 숫자가 맞아?
          // 저는 배열에 넣고 indexOf로 확인했어요. :)
          if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
            // 1~5까지 숫자가 맞으면 state에 넣어주자!
            setRate(parseInt(e.key));
          }
        };
        window.addEventListener("keydown", press);
    
        // 컴포넌트가 언마운트 되면(화면에서 사라지면) 이벤트도 지워줘요!
        return () => window.removeEventListener("keydown", press);
      }, []);
    return (
        <>
            <Title><Pstyle>{params.week_day}요일</Pstyle> 평점 남기기</Title>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "1rem 0",
                    width: "100%",
                }}
            >
            {/* 동그라미 5개를 만들어볼까요! */}
            {Array.from({ length: 5 }, (item, idx) => {
                return (
                    <div
                        key={idx}
                        onClick={() => {
                        // 동그라미 하나를 누르면 평점을 남길거예요.
                        // idx는 0부터 시작하니까 +1을 해줘요.
                        // setRate는 state를 바꿔주는 칭구입니다. (위에서 useState 훅을 사용해서 만들어줬죠!)
                          setRate(idx + 1);
                        }}
                        style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "30px",
                            margin: "5px",
                            backgroundColor: rate < idx + 1 ? "#ddd" : "#ffeb3b",
                        }}
                    ></div>
                );
            })}
            </div>

            <Line/>
            <StyledLink to="/">평점 남기기</StyledLink>
        </>
    )
}

const Pstyle = styled.p`
color:#eee;
padding:5px;
border-radius:10px;
background-color:#8b6162;
display:inline-block
`
const Title = styled.h1`
  color:rosybrown;
  text-align: center;
`;
const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;
const StyledLink = styled(Link)`
    border:none;
    text-align:center;
    text-decoration:none;
    font-size:20px;
    color:#fff;
    padding:10px 20px;
    border-radius:5px;
    background-color:rosybrown;
    &:hover{
        background-color:#efbfbf;
    }
`
export default Review;