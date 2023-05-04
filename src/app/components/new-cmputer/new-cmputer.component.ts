import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/models/computer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cmputer',
  templateUrl: './new-cmputer.component.html',
  styleUrls: ['./new-cmputer.component.css'],
})
export class NewCmputerComponent {
  formComputer: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private computersService: ComputerService,
    private router: Router
  ) {
    this.formComputer = this.formBuilder.group({
      model: ['', [Validators.required]],
      brand: ['', [Validators.required]],
    });
  }

  saveComputer() {
    let data = this.formComputer.value as Computer;
    this.computersService.saveComputer(data).subscribe({
      next: (response) => {
        this.router.navigate(['/computers']);
      },
      error: (e) => {
        alert('Lo sentimos ocurrio un error!');
      },
    });
  }
}
