import { ListItem } from './list-item.model';

export class List {
    constructor(public name: String, public items: ListItem[] = []) {}
}
