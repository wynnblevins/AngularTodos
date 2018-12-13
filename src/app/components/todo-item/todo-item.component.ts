import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo;
  private newTodoText: string;
  private editing: boolean = false;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {}

  removeTodo() {
    this._todoService.removeTodo(this.todo.id);  
  }

  editTodo() {
    this.editing = true;
  }

  saveTodo() { 
    this.todo.text = this.newTodoText;
    this.editing = false;
  }

  cancelEdit() {
    this.editing = false;
  }
}
