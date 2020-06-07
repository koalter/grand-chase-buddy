import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defense-calculator',
  templateUrl: './defense-calculator.component.html',
  styleUrls: ['./defense-calculator.component.css']
})
export class DefenseCalculatorComponent implements OnInit {

  title = 'PvP Defense BP Calculator';
  totalPointsPlaceholder = 'Total BP';
  individualPointsPlaceholder = 'Average BP';
  totalPoints: string = '';
  individualPoints: string = '';
  checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(teamHasSachi) {
    let totalPoints = parseInt(this.totalPoints);
    if (totalPoints >= 0) {
      let result = teamHasSachi ? (totalPoints * 2 - 100000) / 7 : totalPoints * 2 / 8;
      this.individualPoints = result.toFixed(0);
    }
    else {
      this.individualPoints = '';
    }
  }

}
