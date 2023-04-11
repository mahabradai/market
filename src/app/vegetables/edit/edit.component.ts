import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vegetables } from '../vegetables';
import { VegetablesService } from '../vegetables.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  vegetableForm: Vegetables = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vegetablesService: VegetablesService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.vegetablesService.getById(id).subscribe((data) => {
      this.vegetableForm = data;
    });
  }
 
  update() {
    this.vegetablesService.update(this.vegetableForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(['/vegetables/home']);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
