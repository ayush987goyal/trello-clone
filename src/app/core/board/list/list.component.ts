import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { List } from './../../../models/list.model';

import * as fromApp from '../../../store/app.reducer';
import * as TrelloActions from '../../../store/trello.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input('list') list: List;
  @Input('boardName') boardName: string;
  @Input('boardId') boardId: number;
  @Input('listId') listId: number;

  newItemName: string;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  addItemToList() {
    if (!this.newItemName) {
      return;
    }
    this.store.dispatch(new TrelloActions.AddItem({
        boardIndex: this.boardId,
        listIndex: this.listId,
        itemName: this.newItemName}));
  }

}
