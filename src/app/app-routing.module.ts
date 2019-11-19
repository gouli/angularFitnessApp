import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';


const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'category', component:CategoryComponent },
  {path: 'category/:id', component:ExerciseComponent },
  {path: 'category/:id/:exId', component: ExerciseDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
