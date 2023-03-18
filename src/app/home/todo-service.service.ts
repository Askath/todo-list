import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  getTodo(): Observable<Todo[]> {
    return of(todo);
  }

  addTodo(newTodo: Todo): Observable<Todo[]> {
    const todoList: Todo[] = todo;
    todoList.push(newTodo);
    return of(todoList);
  }
}

const todo: Todo[] = [
  {
    id: 1,
    title: 'Buy milk',
    completed: false,
  },
  {
    id: 2,
    title: 'Buy eggs',
    completed: false,
  },
];

export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}
