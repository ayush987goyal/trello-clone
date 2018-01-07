import { List } from './list.model';

export class Board {
    constructor(public name: String,
                public id: number,
                public lists: List[] = []) {}
}
