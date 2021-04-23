import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.sass']
})
export class Parent1Component implements OnInit {

  @Input() public title = "default title";
  @Input() public borderColor = "#000";
  public emailBodyParent: string;

  constructor() { }

  ngOnInit() {
  }

  onChangeEmailBodyParent(emailBodyValue: string): void {
    this.emailBodyParent = emailBodyValue;
  }

}
