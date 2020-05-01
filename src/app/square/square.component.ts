import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button mat-stroked-button color="primary" *ngIf="!value">{{ value }}</button>
    <button mat-stroked-button color="accent" *ngIf="value =='X'"> {{ value }} </button>
    <button mat-stroked-button color="primary" *ngIf="value =='O'"> {{ value }} </button>
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
