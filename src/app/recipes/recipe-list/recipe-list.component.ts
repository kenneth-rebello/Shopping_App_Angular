import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test", "This is a test", 'https://media.istockphoto.com/photos/pasta-casserole-with-tomatoes-and-mozzarella-cheese-in-a-cast-iron-picture-id1190036539?k=6&m=1190036539&s=612x612&w=0&h=IbmO_86RBKRkcY6FT-3azE530Fw7Od0d8KdmZFtiqic='),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
