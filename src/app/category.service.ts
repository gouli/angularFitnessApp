import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[];
  constructor() {
    this.categories =  [
      new Category(8,"Arms", "https://wger.de/media/exercise-images/3/Standing-biceps-curl-1.png"), 
      new Category(10, "Abs", "https://wger.de/media/exercise-images/4/Crunches-1.png"),
      new Category(12, "Back", "https://wger.de/media/exercise-images/9/Dead-lifts-2.png"),
      new Category(14, "Calves", "https://wger.de/media/exercise-images/13/Standing-calf-raises-1.png"),
      new Category(11, "Chest", "https://wger.de/media/exercise-images/15/Bench-press-1.png"),
      new Category(9, "Legs", "https://wger.de/media/exercise-images/5/Walking-lunges-1.png"),
      new Category(13, "Shoulders", "https://wger.de/media/exercise-images/8/Dumbbell-shrugs-2.png")
    ];
  }
  getCategory():Category[]{
    return this.categories;
  }
}
