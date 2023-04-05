import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facture } from '../facture';
import { FactureService } from '../facture.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  factureForm: Facture = {
    id: 0,
    designation: '',
    quantity: 0,
    price: 0,
    total:0,

  };
 
  constructor(private factureService: FactureService,
              private router: Router) {}
 
  ngOnInit(): void {}
 
  create() {
    this.factureService.create(this.factureForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(['/facture/home']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
