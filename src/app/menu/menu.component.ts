import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';

const SNAPS: Dish[] = [
                         {
                           name:'Preparation',
                           image: '/assets/images/prep.jpg',
                           category: 'Before',
                           label:'colour',
                           price:'',
                           description:'Preparation before hand'     },
                        {
                           name:'Newly Weds',
                           image: '/assets/images/newlywed.jpg',
                           category: 'Ceremony',
                           label:'black and white',
                           price:'',
                           description:'After the ceremony'                        },
                        {
                           name:'Barna',
                           image: '/assets/images/woods.jpg',
                           category: 'dessert',
                           label:'',
                           price:'',
                           description:'In the woods'                        }
                        ];;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = SNAPS;

  selectedSnap: Dish = SNAPS[0];

  constructor() { }

  ngOnInit() {
  }

}
