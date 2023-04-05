import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureService } from '../facture.service';
import { Facture } from '../facture';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  factureForm: Facture = {
    id: 0,
    designation: '',
    quantity: 0,
    price: 0,
    total:0,
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private factureService: FactureService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.factureService.getById(id).subscribe((data) => {
      this.factureForm = data;
    });
  }
 
  update() {
    this.factureService.update(this.factureForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/facture/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}