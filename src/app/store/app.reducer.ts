import { ActionReducerMap } from '@ngrx/store/src/models';
import * as fromTrello from './trello.reducer';

export interface AppState {
    trello: fromTrello.State;
}

export const reducers: ActionReducerMap<AppState> = {
    trello: fromTrello.trelloReducer
};
