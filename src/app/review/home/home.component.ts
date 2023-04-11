import { Component, OnInit } from '@angular/core';
import { Review } from '../review';
import { ReviewService } from '../review.service';
 
declare var window: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allReviews: Review[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private reviewService: ReviewService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
 
  get() {
    this.reviewService.get().subscribe((data) => {
      this.allReviews = data;
      console.log("data=",data) ; 

    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
  delete() {
    this.reviewService.delete(this.idTodelete).subscribe({
        next: (data) => {
            this.allReviews = this.allReviews.filter(_ => _.id != this.idTodelete)
            this.deleteModal.hide();
        },
    });
}

}
