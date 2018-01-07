import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BoardsComponent } from './boards/boards.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BoardsComponent,
    BoardComponent
  ]
})
export class CoreModule { }
