import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-defense-builder',
  templateUrl: './defense-builder.component.html',
  styleUrls: ['./defense-builder.component.css']
})
export class DefenseBuilderComponent implements OnInit {

  heroes: Array<Hero> = HEROES;
  teamList: Array<Hero> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addHero(e, id): void {
    let nullIndex: number = this.teamList.findIndex(hero => hero == null);
    let index: number;

    if (this.teamList.length >= 8 && nullIndex === -1) {
      console.log('Array is full');
    }
    else {
      if (nullIndex != -1) {
        this.teamList.splice(nullIndex, 1, this.heroes[id]);
        index = nullIndex;
      }
      else {
        this.teamList.push(this.heroes[id]);
        index = this.teamList.length -1;
      }
      let el = document.getElementById(index.toString()).children[0];
      
      el.innerHTML = this.heroes[id].name;
      
      e.target.parentElement.classList.add('disabled');
    }
  }

  removeHero(e): void {
    let name = e.target.innerHTML;
    this.teamList.splice(this.teamList.findIndex(hero => hero != null && hero.name == name), 1, null);
    e.target.innerHTML = '';
    document.getElementById(name).classList.remove('disabled');
  }
}
