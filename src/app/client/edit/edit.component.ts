import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  clientForm: Client = {
    id: 0,
    name: '',
    mobile: '',
    email: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private clientService: ClientService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.clientService.getById(id).subscribe((data) => {
      this.clientForm = data;
    });
  }
 
  update() {
    this.clientService.update(this.clientForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/client/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
