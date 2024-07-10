import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  message!: string;
  parentText = "This is from parent-child component"

  receiveMessage($event: string) {
    this.message = $event
  }
}
