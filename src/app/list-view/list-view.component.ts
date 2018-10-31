import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.sass']
})
export class ListViewComponent implements OnInit {
  private todos : Todo[];

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() : void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }
}
