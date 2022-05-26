/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['파이썬 독학', '타입스크립트 독학', '리액트 독학']);
  let [thumb, setThumb] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);  // ui가 보임/안보임 정보를 state로 저장해 둠
  let [text, setText] = useState(0); // 누른제목, 누른제목 변경
  let [입력값, 입력값변경] = useState(''); // 입력값, 입력값 변경

  function 제목바꾸기() {
    // shallow copy, deep copy (값공유 x, 서로 독립적인 값을 가지는 복사)
    let newArray = [...title].sort(); // title 가나다순 정렬 기능
    setTitle(newArray);
  }

  // return 부분
  return (
    <>
      <div className="App">
        <div className="black-nav">
          <div>개발 Blog</div>
        </div>
        {/* <button onClick={제목바꾸기}>제목바꾸기</button> */}

        {/*title은 배열 안에 있는 데이터
         i는 반복문 돌 때마다 0부터 1씩 증가하는 정수 */}
        {
          title.map((a, i) => {
            return (
              <div className="list" key={i}>
                <h4 onClick={() => { setModal(true); setText(i); }}>
                  {title[i]}
                  <span onClick={(e) => {
                    e.stopPropagation(); // 이벤트 버블링 막기
                    let copy = [...thumb];
                    copy[i] = copy[i] + 1;
                    setThumb(copy);
                  }}> 👍</span> {thumb[i]}
                  {/* state가 배열일 경우, 복사부터 하고 수정 */}
                </h4>
                <p>5월 25일 발행</p>
                <button onclick={() => {
                  let copy = [...title];
                  copy.splice(i, 1);
                  setTitle(copy);
                }}>삭제</button> {title[i]}
                <hr />
              </div>
            );
          })
        }

        <div>
          <input onChange={(e) => { 입력값변경(e.target.value); }} />
          <button onclick={() => {
            let copy = [...title];
            copy.unshift(입력값);
            setTitle(copy);
          }}>글 발행</button>
        </div>

        <button onClick={() => { setModal(!modal); }}>열고 닫기</button>
        {modal === true ? <Modal title={title} text={text} /> : null}
        {/* if 문을 이용해 state가 true일 때 ui를 보여줌 */}

      </div>
    </>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.text]} 👍  </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

/////////////////////////////////////////////////////////
// TODO: Component 만드는 법
// 1. function 만들고
// 2. return() 안에 html 담기
// 3. 원하는 곳에서 <함수명 /> 쓰기 (or <함수명></함수명> 쓰기)
// 이름은 대문자로 시작
// return() 안에 있는 건 태그 하나로 묶어야 함
// 상위 component에서 만든 state 쓰려면 props 문법 사용해야됨

export default App;
