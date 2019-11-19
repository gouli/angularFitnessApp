import { Injectable } from '@angular/core';
import { Exercise } from './exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  exercises: Exercise[];
  
  constructor() {
    this.exercises = [
      new Exercise(1, "New One", 8, "https://wger.de/media/exercise-images/3/Standing-biceps-curl-1.png"),
      new Exercise(2, "New Two", 8, "https://wger.de/media/exercise-images/4/Crunches-1.png")
    ]
  }

  getAllExercise(){
    return this.exercises;
  }

  getExerciseById(id: number):Exercise{
    return this.exercises.find(exercise => exercise.id == id);
  }
}
