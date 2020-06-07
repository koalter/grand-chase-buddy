import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-defense-builder',
  templateUrl: './defense-builder.component.html',
  styleUrls: ['./defense-builder.component.css']
})
export class DefenseBuilderComponent implements OnInit {

  radio: string = 'hide';
  heroes: Hero[] = HEROES;
  teamList: Hero[] = [null, null, null, null, null, null, null, null];

  constructor() { }

  ngOnInit(): void {
    console.log(this.teamList);
    for (let i = 0; i < this.heroes.length; i++) {
      this.heroes[i].image = '../../assets/portraits/' + this.heroes[i].name + '.png';
    }
  }

  addHero(e, id): void {
    let index = this.teamList.findIndex(hero => hero == null);
    
    if (index >= 0) {
      this.teamList[index] = this.heroes[id];

      e.target.classList.add('disabled');
      e.target.parentElement.classList.add('disabled');
      e.target.parentElement.parentElement.classList.add('disabled');
    }
    // let nullIndex: number = this.teamList.findIndex(hero => hero == null);
    // let index: number;

    // if (this.teamList.length >= 8 && nullIndex === -1) {
    //   console.log('Array is full');
    // }
    // else {
    //   if (nullIndex != -1) {
    //     this.teamList.splice(nullIndex, 1, this.heroes[id]);
    //     index = nullIndex;
    //   }
    //   else {
    //     this.teamList.push(this.heroes[id]);
    //     index = this.teamList.length -1;
    //   }
    //   let teamListElement = document.getElementById(index.toString()).children[0];
      
    //   console.log(teamListElement);
    //   teamListElement.firstElementChild.setAttribute('src', this.heroes[id].image);
      
    //   e.target.classList.add('disabled');
    //   e.target.parentElement.classList.add('disabled');
    //   e.target.parentElement.parentElement.classList.add('disabled');
    // }

    // console.log(e.target);
  }

  teamList_click(e) {
    switch (this.radio) {
      case 'remove':
        this.removeHero(e);
        break;
      case 'hide':
        this.hideHero(e);
        break;
    }
  }

  removeHero(e): void {
    let name = e.target.getAttribute('alt');
    let index = this.teamList.findIndex(hero => hero != null && hero.name == name);

    this.teamList[index] = null;
    let nameElement = document.getElementById(name);
    console.log(nameElement);
    nameElement.classList.remove('disabled');
    nameElement.children[0].classList.remove('disabled');
    nameElement.children[0].children[0].classList.remove('disabled');
  }

  hideHero(e): void {
    console.log(e.target.getAttribute('alt'));
  }
}
