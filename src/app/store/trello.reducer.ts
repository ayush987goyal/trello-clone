import { Board } from '../models/board.model';
import * as TrelloActions from './trello.actions';
import { List } from '../models/list.model';
import { ListItem } from '../models/list-item.model';

export interface State  {
    boards: Board[];
}

const initialState: State = {
    boards: []
};

export function trelloReducer(state = initialState, action: TrelloActions.TrelloActions) {
    switch (action.type) {
        case TrelloActions.ADD_BOARD:
            const newBoard = new Board(action.payload);
            return {
                ...state,
                boards: [...state.boards, newBoard]
            };
        case TrelloActions.ADD_LIST:
            const newList = new List(action.payload.listName);
            const lists = [...state.boards[action.payload.boardIndex].lists, newList];
            const board = {...state.boards[action.payload.boardIndex], lists: lists};
            const boards = [...state.boards];
            boards[action.payload.boardIndex] = board;
            return {
                ...state,
                boards: boards
            };
        case TrelloActions.ADD_ITEM:
            const newItem = new ListItem(action.payload.itemName);
            const updatedListItems = [...state.boards[action.payload.boardIndex].lists[action.payload.listIndex].items, newItem];
            const updatedList = {...state.boards[action.payload.boardIndex].lists[action.payload.listIndex], items: updatedListItems};
            const oldList = [...state.boards[action.payload.boardIndex].lists];
            oldList[action.payload.listIndex] = updatedList;
            const myBoards = [...state.boards];
            myBoards[action.payload.boardIndex].lists = oldList;
            return {
                ...state,
                boards: myBoards
            };
        default:
            return state;
    }
}
