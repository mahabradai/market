import { Component, OnInit } from '@angular/core';
import { Facture } from '../facture';
import { FactureService } from '../facture.service';
 
declare var window: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allFactures: Facture[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private factureService: FactureService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
 
  get() {
    this.factureService.get().subscribe((data) => {
      this.allFactures = data;
      console.log("data=",data) ; 

    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
  delete() {
    this.factureService.delete(this.idTodelete).subscribe({
        next: (data) => {
            this.allFactures = this.allFactures.filter(_ => _.id != this.idTodelete)
            this.deleteModal.hide();
        },
    });
}

}
