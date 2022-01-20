import React, { Component } from "react";

// 클래스는 대문자로 시작
class Habit extends Component {
  //setState :  클래스 컴포넌트에서 클래스 안의 state를 업데이트할 때 쓰는 API
  //useState :  리액트 훅에서 state를 사용하고 싶을떄 쓰는 API
  // Habit이라는 컴포넌트에는 단순히 props으로 전달된 콜백함수들을 호출
  // 또 props으로 전달받은 각각의 데이터를 다시 인자로 전달해줌
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    console.log(`habit: ${name}`);
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
