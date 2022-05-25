import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";



function App() {
  return (
    <Wrapper>
      {/* <Hello name="react" color="red" isSpecial={true}/> */}
       {/* 그냥 isSpecial만 넣으면 ={ture}가 생략 되있는것이다 동일한 의미이다. */}
      <Hello name="react" color="red" isSpecial/> 
      <Hello color="pink"/>
      <Hello color="yellow"/>
      <Counter/>
    </Wrapper>
  );
}

export default App;