import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';

export const routes: Routes = [  { path: '', component: TodoItemsComponent },
  { path: 'about', component: AboutComponentComponent },];
