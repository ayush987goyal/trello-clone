import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Board } from './../../models/board.model';
import * as TrelloActions from '../../store/trello.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  boardsState: Observable<{boards: Board[]}>;
  newBoardName: string;

  constructor(private store: Store<fromApp.AppState>,
    private router: Router) { }

  ngOnInit() {
    this.boardsState = this.store.select('trello');
  }

  addBoard() {
    if (!this.newBoardName) {
      return;
    }
    this.store.dispatch(new TrelloActions.AddBoard(this.newBoardName));
    this.newBoardName = '';
  }

  gotoBoard(boardId: number) {
    this.router.navigate(['/board', boardId]);
  }

}
