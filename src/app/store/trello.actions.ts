import { Action } from '@ngrx/store';
import { Board } from '../models/board.model';

export const ADD_BOARD = 'ADD_BOARD';
export const ADD_LIST = 'ADD_LIST';
export const ADD_ITEM = 'ADD_ITEM';

export class AddBoard implements Action {
    readonly type = ADD_BOARD;

    constructor(public payload: String) {}
}

export class AddList implements Action {
    readonly type = ADD_LIST;

    constructor(public payload: { boardIndex: number, listName: string }) {}
}

export class AddItem implements Action {
    readonly type = ADD_ITEM;

    constructor(public payload: { boardIndex: number, listIndex: number, itemName: string }) {}
}

export type TrelloActions = AddBoard | AddList | AddItem;
