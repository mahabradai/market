import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../review';
import { ReviewService } from '../review.service';

 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  reviewForm: Review = {
    id: 0,
    name: '',
    email: '',
    comment: '',
    date: new Date()

  };
 
  constructor(private reviewService: ReviewService,
              private router: Router) {}
 
  ngOnInit(): void {}

  create() {
    this.reviewService.create(this.reviewForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(['/review/home']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
