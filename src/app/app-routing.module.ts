import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListViewComponent } from './list-view/list-view.component';
import { TodoComponent } from './components/todo/todo.component';

//services
import { TodosService } from './services/todos.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'list', component: ListViewComponent},
  { path: 'todo/:id', component: TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TodosService]
})
export class AppRoutingModule { }
