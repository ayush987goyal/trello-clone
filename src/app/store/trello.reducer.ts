import { Board } from '../models/board.model';
import * as TrelloActions from './trello.actions';

export interface State  {
    boards: Board[];
    currentId: number;
}

const initialState: State = {
    boards: [],
    currentId: 0
};

export function trelloReducer(state = initialState, action: TrelloActions.TrelloActions) {
    switch (action.type) {
        case TrelloActions.ADD_BOARD:
            const newBoard = new Board(action.payload, state.currentId);
            return {
                ...state,
                boards: [...state.boards, newBoard],
                currentId: state.currentId + 1
            };
        default:
            return state;
    }
}
