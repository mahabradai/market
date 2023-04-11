import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Qualitycontrol } from '../qualitycontrol';
import { QualitycontrolService } from '../qualitycontrol.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  qualitycontrolForm: Qualitycontrol = {
    id: 0,
    product:'',
    defectType: '',
    description: '',
    status: ''

  };
 
  constructor(private qualitycontrolService: QualitycontrolService,
              private router: Router) {}
 
  ngOnInit(): void {}
 
  create() {
    this.qualitycontrolService.create(this.qualitycontrolForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(['/qualitycontrol/home']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
