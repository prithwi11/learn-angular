import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-child',
  templateUrl: './item-child.component.html',
  styleUrls: ['./item-child.component.css']
})
export class ItemChildComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  //@Output is a decorator making the property a way for data to go from child component to parent component
  //newItemEvent : name of the @Output
  //EventEmitter<string> : The Output's type
  //new EventEmitter<string> : Tells the angular to create a event emitter and that the data it emits is of type string

  addNewItem(value : string) {
    this.newItemEvent.emit(value)
    //when the addNewItem function is called  then it uses @output to raise an event with the value
  }
}
