import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QualitycontrolService } from '../qualitycontrol.service';
import { Qualitycontrol } from '../qualitycontrol';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  qualitycontrolForm: Qualitycontrol = {
    id: 0,
    product: '',
    defectType: '',
    description: '',
    status: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private qualitycontrolService: QualitycontrolService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number): void {
    this.qualitycontrolService.getById(id).subscribe((data: Qualitycontrol) => {
      this.qualitycontrolForm = data;
    });
  }

  update(): void {
    this.qualitycontrolService.update(this.qualitycontrolForm).subscribe({
      next: (data) => {
        this.router.navigate(['/qualitycontrol/home']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
