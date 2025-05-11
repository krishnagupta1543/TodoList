import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../module/todo.config';
@Component({
  selector: 'app-todo',
  imports: [],
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
  
  onDelete(todo: Todo){
    console.log("ondelete");
    this.todoDelete.emit(todo);
  }

}
