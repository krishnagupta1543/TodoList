import { Component, computed, EventEmitter, Output  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../module/todo.config';

@Component({
  selector: 'app-addtodo',
  imports: [FormsModule],
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css'
})
export class AddtodoComponent {
  title: any;
  description: any;
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter();
  onSubmit(){
    let todo: Todo = {
      id: 10,
      title: this.title,
      description: this.description,
      completed:false
    }
    this.todoAdd.emit(todo);
  }
}
