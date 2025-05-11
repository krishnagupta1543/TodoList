import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../module/todo.config';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-todo',
  imports: [NgClass],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  @Input() todo: Todo = { 
    id: 0,
    title: "",
    description: "",
    completed: false
  };

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoDone: EventEmitter<Todo> = new EventEmitter();
  onDelete(todo: Todo){
    console.log("ondelete");
    this.todoDelete.emit(todo);
  }
  checkDone(todo: Todo){
    console.log("done");
    this.todoDone.emit(todo);
  }
}
