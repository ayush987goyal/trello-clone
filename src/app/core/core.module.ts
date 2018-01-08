import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BoardsComponent } from './boards/boards.component';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './board/list/list.component';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DragulaModule
  ],
  declarations: [
    BoardsComponent,
    BoardComponent,
    ListComponent
  ]
})
export class CoreModule { }
