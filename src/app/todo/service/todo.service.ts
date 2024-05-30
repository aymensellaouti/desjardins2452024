import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  constructor() {}

  /**
   * Logger la liste des todos
   */
  logTodos(): void {
    console.log(this.todos);
  }
  /**
   * retourner la liste des todos
   */
  getTodos(): Todo[] {
    return this.todos;
  }

  /**
   * Ajouter un Todo dans la liste des todos
   * @param todo : Todo, c'est le Todo à jouter dans la liste des todos
   */
  addTodo(todo: Todo) {
    this.todos.push(todo);
    // [@24, @24, @24]
  }

  /**
   * supprimer un todo de la liste des todos
   * @param todo : Todo, c'est le Todo à supprimer de la liste des todos
   */
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
