import { Action } from '@ngrx/store';
import { Board } from '../models/board.model';

export const ADD_BOARD = 'ADD_BOARD';

export class AddBoard implements Action {
    readonly type = ADD_BOARD;

    constructor(public payload: String) {}
}

export type TrelloActions = AddBoard;
