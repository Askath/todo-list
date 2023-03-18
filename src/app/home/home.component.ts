import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo, TodoServiceService } from './todo-service.service';
import { filter, map, Observable, of, take } from 'rxjs';

@Component({
  selector: 'todo-list-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent {
  form: FormGroup;

  $todoList: Observable<Todo[]>;
  todoItems: Todo[] = [];

  constructor(
    private FormBuilder: FormBuilder,
    private todoService: TodoServiceService
  ) {
    this.form = FormBuilder.group({
      todo: ['', Validators.required],
    });

    this.$todoList = todoService.getTodo();
  }

  onSubmit() {
    const todoTitle: string = this.form.get('todo')?.value;
    if (!todoTitle) {
      return;
    }
    const todo: Todo = {
      title: todoTitle,
      completed: false,
    };
    this.todoService
      .addTodo(todo)
      .pipe(take(1))
      .subscribe((todo) => {
        this.$todoList = of(todo);
      });
  }

  onDelete(todo: Todo) {
    this.$todoList = this.$todoList.pipe(
      map((todos) => todos.filter((i) => i.id !== todo.id))
    );
  }
}
