import { Component } from '@angular/core';
import { TodoItemsComponent } from "./components/todo-items/todo-items.component";
import { TodoComponent } from './components/todo/todo.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TodoItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo Application';
}
