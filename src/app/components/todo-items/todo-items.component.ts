import { Component } from '@angular/core';
import { Todo } from '../../module/todo.config';
import { NgFor, NgIf } from '@angular/common';
import { TodoComponent } from "../todo/todo.component";
import { AddtodoComponent } from "../addtodo/addtodo.component";

@Component({
  selector: 'app-todo-items',
  standalone: true, 
  imports: [TodoComponent, NgFor, AddtodoComponent, NgIf],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {
  todos: Array<Todo> = [];

  constructor() {
    const localItem = localStorage.getItem('todos');
    if (localItem === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(localItem);
    }
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  doneTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].completed = !todo.completed;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
