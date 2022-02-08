import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    //console.log('habits');
    return (
      <div>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
            // habit 컴포넌트에 habit이라는 오브젝트를 전달,
            // Habit이라는 prop 이름에 우리가 각각의 habit을 전달
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset ALL
        </button>
      </div>
    );
  }
}

export default Habits;
