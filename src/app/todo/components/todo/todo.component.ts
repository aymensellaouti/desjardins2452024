import { Component, inject } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: Todo[] = [];
  // todo contient la référence du Todo
  // @124
  todo = new Todo();
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  httpService = inject(HttpService);
  constructor() {
    this.todos = this.todoService.getTodos();
    this.toastr.info('Bonjour c est votre gestionnaire de Todo');
    this.httpService.getTodosFromApi().subscribe({
      // Voila ce que je veux faire avec mes todos
      next: (todos) => { console.log(todos);},
      // Voila ce que je veux faire en cas d'erreur
      error: (e) => {},
      // Voila ce que je veux faire quand le flux se termine
      complete: () => {},
    });
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
