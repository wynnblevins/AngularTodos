import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos: Todo[];
  private _nextId: number;

  constructor() { 
    this._todos = [
      new Todo("Make dinner tonight", 0),
      new Todo("Meet Cheryl for dinner", 1),
      new Todo("Feed the cat", 2)
    ];
    this._nextId = this._todos.length;
  }

  addTodo(text: string) {
    console.log(this._todos);
    let todo = new Todo(text, this._nextId);
    this._todos.push(todo);
    this._nextId++;
  }

  getTodos(): Todo[] {
    return this._todos;
  }

  removeTodo(id: number): void {
    for (let i = 0; i < this._todos.length; i++) {
      if (this._todos[i].id == id) {
        this._todos.splice(i, 1);
      }
    }
  }
}