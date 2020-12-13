import React, { Component } from 'react';
import './App.css';
import Laptop from './Laptop.svg';

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || {
        complete: [],
        incomplete: []
      },
      newTodo: "",
      isDeleting: false
    }
  }

  addTodo = () => {
    let { newTodo, todos } = this.state;
    todos.incomplete.push(newTodo);
    this.setState({
      todos,
      newTodo: ""
    })
  }

  handleChange = (val, index) => {
    let { todos } = this.state;
    if (val === "incomplete") {
      let removed = todos.incomplete[index]
      todos.incomplete.splice(index, 1);
      console.log("checkk", removed)
      todos.complete.push(removed);
    } else if (val === "complete") {
      let removed = todos.complete[index]
      todos.complete.splice(index, 1);
      console.log("checkk2", removed)
      todos.incomplete.push(removed);
    }
    this.setState({
      todos
    })
  }

  render() {
    let { todos, newTodo } = this.state;
    return (
      <div className="App">
        <section className="container">
          <div className="heading">
            <img src={Laptop} alt="Laptop" className="heading-img" />
            <h1 className="heading-title">My TODO List</h1>
          </div>
          <div>Completed: <span className="completed-count">0 of 0</span> items</div>
          <section className="todo__add">
            <div className="todo__title-wrap" id="js-label-add">
              <label htmlFor="js-new-task" className="section__title section__title--add">Add Item</label>
            </div>
            <input id="js-new-task" onChange={e => this.setState({ newTodo: e.target.value })} className="text-input task__input--new" type="text" value={newTodo} />
            <button id="js-add-button" className="button" onClick={e => this.addTodo()}><i className="material-icons icon__add">add_circle</i></button>
          </section>
          <section className="todo__list">
            <div className="todo__title-wrap todo__title-wrap--todo" id="js-todo">
              <h3 className="section__title">To-do</h3>
            </div>
            <ul id="js-incomplete-tasks" className="list">
              {
                todos.incomplete.map((todo, i) => (
                  <li class="task" key={i}>
                    <input type="checkbox" class="task__checkbox" onChange={e => this.handleChange("incomplete", i)} />
                    <label class="task__title">{todo}</label>
                    <input type="text" class="text-input task__input" />
                    <button class="button task__delete">
                      <i class="material-icons icon__delete">delete</i>
                    </button>
                    <button class="button task__edit">
                      <i class="material-icons icon__edit">mode_edit</i>
                    </button>
                  </li>
                ))
              }
            </ul>
          </section>
          <section className="todo__done">
            <div className="todo__title-wrap" id="js-completed">
              <h3 className="section__title">Completed</h3>
            </div>
            <ul id="js-completed-tasks" className="list">
              {
                todos.complete.map((todo, i) => (
                  <li class="task" key={i}>
                    <input type="checkbox" checked class="task__checkbox" onChange={e => this.handleChange("complete", i)} />
                    <label class="task__title is-done">{todo}</label>
                    <input type="text" class="text-input task__input" />
                    <button class="button task__delete">
                      <i class="material-icons icon__delete">delete</i>
                    </button>
                    <button class="button task__edit">
                      <i class="material-icons icon__edit">mode_edit</i>
                    </button>
                  </li>
                ))
              }
            </ul>
          </section>
        </section>
        {
          this.state.isDeleting
            ?
            <div class="overlay">
              <div class="alert">
                <p>Delete this item?</p>
                <button class="button alert__button alert__button--no">No</button>
                <button class="button alert__button alert__button--yes">Yes</button>
              </div>
            </div>
            :
            ""
        }
      </div>
    )
  }
}