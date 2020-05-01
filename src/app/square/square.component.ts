import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton info *ngIf="!value">{{ value }}</button>
    <button hero status="success" *ngIf="value =='X'"> {{ value }} </button>
    <button nbButton hero status="info" *ngIf="value =='O'"> {{ value }} </button>
  `,
  styleUrls: ['./square.styles.scss' ] 
})
export class SquareComponent implements OnInit {

  @Input() value: "X" | "O";

  rando:number;
  constructor() { }

  ngOnInit(): void {
  }

}
