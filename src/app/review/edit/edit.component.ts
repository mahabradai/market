import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../review.service';
import { Review } from '../review';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  reviewForm: Review = {
    id: 0,
    name: '',
    email: '',
    comment: '',
    date: new Date()
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private reviewService: ReviewService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.reviewService.getById(id).subscribe((data) => {
      this.reviewForm = data;
    });
  }
 
  update() {
    this.reviewService.update(this.reviewForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/review/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}