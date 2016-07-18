import { Injectable } from '@angular/core';
import { ItemModel } from './item/';

@Injectable()
export class ItemsService {
  public items : ItemModel[];

  constructor() {
    this.items = [
      new ItemModel('Rename files & components'),
      new ItemModel('Remove price & state'),
      new ItemModel('Add Status to model'),
      new ItemModel('Duplicate lists'),
      new ItemModel('Send unique data to each list'),
      new ItemModel('Add model functionality'),
      new ItemModel('Add Status arrows'),
      new ItemModel('Add Status functionality'),
    ];
  }

  getItems():ItemModel[] {
    return this.items;
  }

  addItem(itemName : string) : void {
    // add the new Item to the top of the list
    this.items.splice(0, 0, new ItemModel(itemName));
  }

  removeItem(item : ItemModel) : void {
    let index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  nextItemStatus(item : ItemModel) : void {
    item.incrementStatus();
  }

  prevItemStatus(item : ItemModel) : void {
    item.decrementStatus();
  }
}
