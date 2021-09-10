/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [글제목2, 글제목변경2] = useState(['글제목2', '8월 24일']);
  let [글제목3, 글제목변경3] = useState(['글제목3', '8월 25일']);

  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');
  // ui가 보임/안보임 정보를 state로 저장해 둠

  function 반복된UI() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(<div>반복된UI</div>);
    }
    return arr;
  }

  function 제목바꾸기() {
    // let newArray = [...글제목].sort(); 
    // deep copy (값공유 x, 서로 독립적인 값을 가지는 복사)
    let newArray = [...글제목].sort();
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  // return 부분
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>

      { 반복된UI()}

      {
        글제목.map((글, i) => {
          return (
            <div className="list" key={i}>
              <h3 onClick={() => { 누른제목변경(i) }}>{글} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>{따봉} </h3>
              <p>8월 30일 발행</p>
              <hr />
            </div>
          )
        })
      }

      <div className="publish">
        <input />
        <button>저장</button>
      </div>

      <button onClick={() => { modal변경(!modal) }}>열고 닫는 버튼</button> {
        modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null
      }
      {/* if 문을 이용해 state가 true일 때 ui를 보여줌 */}

      {/* <div className="list">
        <h3 onClick={() => { modal변경(true) }}>{글제목[2]}</h3>
        <p>{글제목3[1]}</p>
        <hr />
      </div> */}
    </div>
  );
}
/////////////////////////////////////////////////////////
// TODO: Component 만드는 법
// 1. 함수 만들고 이름 짓고
// 2. 축약을 원하는 HTML 넣고
// 3. 원하는 곳에서 <함수명 />
// 이름은 대문자로 시작
// return() 안에 있는 건 태그 하나로 묶어야 함
// 상위 component에서 만든 state 쓰려면 props 문법 사용해야됨
function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
