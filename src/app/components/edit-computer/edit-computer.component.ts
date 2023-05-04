import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Computer } from 'src/app/models/computer.model';
import { ComputerService } from 'src/app/services/computer.service';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css'],
})
export class EditComputerComponent {
  formComputer: FormGroup;
  computer: Computer;
  id: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private computersService: ComputerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formComputer = this.formBuilder.group({
      model: ['', [Validators.required]],
      brand: ['', [Validators.required]],
    });

    this.id = this.route.snapshot.paramMap.get('id');
    this.computersService.getComputer(this.id).subscribe({
      next: (response) => {
        this.computer = response;
        this.formComputer.get('brand').setValue(this.computer.brand);
        this.formComputer.get('model').setValue(this.computer.model);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  saveChanges() {
    const data: Computer = {
      id: Number(this.id),
      model: this.formComputer.get('model').value,
      brand: this.formComputer.get('brand').value,
    };

    this.computersService.updateComputer(this.id, data).subscribe({
      next: (response) => {
        this.router.navigate(['/computers']);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
