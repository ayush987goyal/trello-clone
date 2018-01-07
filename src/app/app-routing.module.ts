import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardsComponent } from './core/boards/boards.component';
import { BoardComponent } from './core/board/board.component';

const routes: Routes = [
  { path: '', component: BoardsComponent },
  { path: 'board/:id', component: BoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
