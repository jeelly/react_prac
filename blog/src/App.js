import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let post ='강남 우동 맛집';
  let [title, titleChange] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [logo, setLogo] = useState('ReactBlog');
  let [good, goodChange] = useState(0)

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button onClick={()=> {
        let copy = [...title];
        copy = copy.sort();
        titleChange(copy)
      }}>가나다순정렬</button>
      <button onClick={()=>{
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        titleChange(copy)
      }}>글 수정</button>
      <div className="list">
        <h4>{title[0]}<span onClick={()=>{goodChange(good++)}}>👍</span>{good}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal/>
    </div>
  );
}

let Modal = () => {
  return (
    <>
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </>
  )
}

// function Modal() {
//   return (
//     <div clasName="modal">
//       <h4>제목</h4>
//       <p>날짜</p>
//       <p>상세내용</p>

//     </div>
//   )
// }
export default App;
