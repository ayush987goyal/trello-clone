import { List } from './list.model';

export class Board {
    constructor(public name: String,
                public lists: List[] = []) {}
}
