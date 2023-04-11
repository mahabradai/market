import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/category';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  allCategories: Category[] = [];

  fruitForm: Fruits = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    category :  
    {
      id: 0,
      name: '',   
      description: '', }
  };
 
  constructor(private categoryService: CategoryService ,
     private fruitService:FruitsService,
    private router:Router) {}
 
  ngOnInit(): void {
    console.log ("entrering create fruit ...") ;
    this.get();          // call get() method to populate allCategories on component initialization
  }
 
  
  get() {
    console.log ("get all categories ...") ;

    this.categoryService.get().subscribe((data) => {
      this.allCategories = data;
      console.log("data=",data) ; 

    });
  }
  


  create(){
    console.log("fruitform :" , this.fruitForm ) ;
    this.fruitService.create(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/fruits/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}