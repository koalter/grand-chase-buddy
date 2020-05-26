import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defense-calculator',
  templateUrl: './defense-calculator.component.html',
  styleUrls: ['./defense-calculator.component.css']
})
export class DefenseCalculatorComponent implements OnInit {

  totalPoints: string = '';
  individualPoints: string = '';
  checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(checked) {
    let result = checked ? (parseInt(this.totalPoints) * 2 - 100000) / 7 : parseInt(this.totalPoints) * 2 / 8;
    this.individualPoints = result.toFixed(0);
  }

}
