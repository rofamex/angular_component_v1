import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.sass']
})
export class Child1Component implements OnInit {

  @Output() emailBodyEmmiter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onTextChange(event) {
    this.emailBodyEmmiter.emit(event.target.value);
  }

}
