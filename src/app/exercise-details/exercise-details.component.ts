import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit {
  exercise: Exercise;
  constructor(private exerciseService: ExerciseService, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.loadExerciseById();
  }

  loadExerciseById() {
    let exId = parseInt(this.activatedRouter.snapshot.paramMap.get('exId'));
    this.exercise = this.exerciseService.getExerciseById(exId);
  }
}
