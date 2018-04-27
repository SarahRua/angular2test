import { Component, OnInit } from '@angular/core';

import { Snap } from '../shared/snap';

const SNAPS: Snap[] = [
                         {
                           name:'Preparation',
                           image: '/assets/images/prep.jpg',
                           category: 'Before',
                           label:'colour',

                           description:'Preparation before hand'     },
                        {
                           name:'Newly Weds',
                           image: '/assets/images/newlywed.jpg',
                           category: 'Ceremony',
                           label:'black and white',
         
                           description:'After the ceremony'                        },
                        {
                           name:'Barna',
                           image: '/assets/images/woods.jpg',
                           category: 'dessert',
                           label:'',
                           
                           description:'In the woods'                        }
                        ];;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  snaps: Snap[] = SNAPS;

  selectedSnap: Snap = SNAPS[0];

  constructor() { }

  ngOnInit() {
  }

}
