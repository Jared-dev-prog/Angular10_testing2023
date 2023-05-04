import { Component } from '@angular/core';
import { ComputerService } from '../services/computer.service';
import { Computer } from '../models/computer.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css'],
})
export class ComputersComponent {
  computers = new MatTableDataSource<Computer>();
  displayedColumns: string[] = ['id', 'brand', 'model', 'actions'];

  constructor(private computerService: ComputerService) {
    this.loadData();
  }

  deleteComputer(item: Computer) {
    this.computerService.deleteComputer(item.id).subscribe({
      next: () => {
        this.loadData();
      },
      error: (e) => {
        alert('Ocurrio un error');
      },
    });
  }

  loadData() {
    this.computerService.getCOmputers().subscribe({
      next: (response) => {
        this.computers.data = response;
      },
      error: (e) => {
        alert('Lo sentimos ocurrio un error!');
      },
    });
  }
}
