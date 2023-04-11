import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vegetables } from '../vegetables';
import { VegetablesService } from '../vegetables.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  vegetableForm: Vegetables = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
  };
 
  constructor(private vegetablesService: VegetablesService,
    private router: Router) {}
 
  ngOnInit(): void {}
 
  create() {
    this.vegetablesService.create(this.vegetableForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(['/vegetables/home']);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
