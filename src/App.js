import React from 'react';
import './App.css';
import Laptop from './Laptop.svg'

function App() {
  return (
    <div className="App">
      <section class="container">
        <div class="heading">
          <img src={Laptop} alt="Laptop" class="heading-img" />
          <h1 class="heading-title">My TODO List</h1>
        </div>
        <div>Completed: <span class="completed-count">0 of 0</span> items</div>
        <button id="js-save" class="button save">Save</button>
        <section class="todo__add">
          <div class="todo__title-wrap" id="js-label-add">
            <label for="js-new-task" class="section__title section__title--add">Add Item</label>
          </div>
          <input id="js-new-task" class="text-input task__input--new" type="text" />
          <button id="js-add-button" class="button"><i class="material-icons icon__add">add_circle</i></button>
        </section>
        <section class="todo__list">
          <div class="todo__title-wrap todo__title-wrap--todo" id="js-todo">
            <h3 class="section__title">To-do</h3>
          </div>
          <ul id="js-incomplete-tasks" class="list">
          </ul>
        </section>
        <section class="todo__done">
          <div class="todo__title-wrap" id="js-completed">
            <h3 class="section__title">Completed</h3>
          </div>
          <ul id="js-completed-tasks" class="list">
          </ul>
        </section>
      </section>
    </div>
  );
}

export default App;
