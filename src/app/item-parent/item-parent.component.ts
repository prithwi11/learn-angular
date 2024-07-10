import { Component } from '@angular/core';

@Component({
  selector: 'app-item-parent',
  templateUrl: './item-parent.component.html',
  styleUrls: ['./item-parent.component.css']
})
export class ItemParentComponent {
  items  = ['item1', 'item2', 'item3', 'item4']
  addItem(newItem : string) {
    this.items.push(newItem)
  }
}
