import { Board } from './../../models/board.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as TrelloActions from '../../store/trello.actions';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  boardId: number;
  boardsState: Observable<{boards: Board[]}>;
  newListName: string;

  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.boardsState = this.store.select('trello');
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.boardId = +params.get('id');
      }
    );
  }

  addList() {
    if (!this.newListName) {
      return;
    }
    this.store.dispatch(new TrelloActions.AddList({ boardIndex: this.boardId, listName: this.newListName }));
    this.newListName = '';
  }

}
