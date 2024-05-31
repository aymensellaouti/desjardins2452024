import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

const API_TODO = 'https://jsonplaceholder.typicode.com/todos';
export interface TodoApi {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http = inject(HttpClient);
  constructor() { }

  getTodosFromApi(): Observable<TodoApi[]> {
    return this.http.get<TodoApi[]>(API_TODO);
  }
}
