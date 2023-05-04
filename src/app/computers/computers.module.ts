import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { ComputersRoutingModule } from './computers-routing.module';
import { ComputersComponent } from './computers.component';

import { NewCmputerComponent } from '../components/new-cmputer/new-cmputer.component';

//Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EditComputerComponent } from '../components/edit-computer/edit-computer.component';

@NgModule({
  declarations: [ComputersComponent, NewCmputerComponent, EditComputerComponent],
  imports: [
    CommonModule,
    ComputersRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class ComputersModule {}
