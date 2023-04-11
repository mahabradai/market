import { Component, OnInit } from '@angular/core';
import { Vegetables } from '../vegetables';
import { VegetablesService } from '../vegetables.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allVegetables: Vegetables[] = [];
  deleteModal: any;
  idToDelete: number = 0;

  constructor(private vegetableService: VegetablesService) {}

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.get();
  }

  get() {
    this.vegetableService.get().subscribe((data: Vegetables[]) => {
      this.allVegetables = data;
      console.log("data=",data);
    });
  }

  openDeleteModal(id: number) {
    this.idToDelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.vegetableService.delete(this.idToDelete).subscribe({
      next: () => {
        this.allVegetables = this.allVegetables.filter((v: Vegetables) => v.id !== this.idToDelete);
        this.deleteModal.hide();
      },
    });
  }
}
