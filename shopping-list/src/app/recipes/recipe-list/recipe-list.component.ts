import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is simply a test', 'https://media.defense.gov/2015/Nov/16/2001318253/-1/-1/0/151123-A-YG824-001.JPG'),
		new Recipe('A Test Recipe', 'This is simply a test', 'https://media.defense.gov/2015/Nov/16/2001318253/-1/-1/0/151123-A-YG824-001.JPG')
	];

    constructor() { }

    ngOnInit() {
    }

    onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
    }

}
