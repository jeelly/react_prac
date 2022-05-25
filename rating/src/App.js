import React from "react";
import "./App.css"

import styled from "styled-components";

import {useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"

//세부 페이지
import Rating from "./Rating";
import Review from "./Review"


function App() {
    return (
      <div className="App">
        {/* <Route path="/review" componet={Review}/> */}
        
        <Container>
          <List>
            <Route path="/" exact component={Rating}/>
            <Route path="/Review/:week_day" component={Review}/>
          </List>
        </Container>
      </div>
    );
  }


  // style
const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color:rosybrown;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const List = styled.div`
    padding:0;
    padding:0 30px;
    display:flex;
    flex-direction:column;
`
const Item = styled.li`
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content:space-between;
`
export default App;