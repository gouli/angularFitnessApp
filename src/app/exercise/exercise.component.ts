import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
import { RestFitnessServiceService } from '../rest-fitness-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})

export class ExerciseComponent implements OnInit {
  exercises: any[];
  
  constructor(
    private exerciseService: ExerciseService, 
    private restService: RestFitnessServiceService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadExercises();
  }

  loadExercises(){
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    return this.restService.getExercisesByCategory(id).subscribe((data) => {
      this.exercises = data;
    });
  }
}
