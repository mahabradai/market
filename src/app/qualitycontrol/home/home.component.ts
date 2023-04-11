import { Component, OnInit } from '@angular/core';
import { Qualitycontrol } from '../qualitycontrol';
import { QualitycontrolService } from '../qualitycontrol.service';
 
declare var window: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allQualitycontrols: Qualitycontrol[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private qualitycontrolService: QualitycontrolService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
 
  get() {
    this.qualitycontrolService.get().subscribe((data) => {
      this.allQualitycontrols = data;
      console.log("data=",data) ; 

    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
  delete() {
    this.qualitycontrolService.delete(this.idTodelete).subscribe({
        next: (data) => {
            this.allQualitycontrols = this.allQualitycontrols.filter(_ => _.id != this.idTodelete)
            this.deleteModal.hide();
        },
    });
}

}
