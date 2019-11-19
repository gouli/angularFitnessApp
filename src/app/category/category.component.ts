import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { RestFitnessServiceService } from '../rest-fitness-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[];
  
  constructor(private CategoryService: CategoryService, private restService: RestFitnessServiceService) { }

  ngOnInit() {
    this.loadCategory();
  }

  loadCategory() {
    return this.restService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
