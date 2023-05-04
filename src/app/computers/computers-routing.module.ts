import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputersComponent } from './computers.component';
import { NewCmputerComponent } from '../components/new-cmputer/new-cmputer.component';
import { EditComputerComponent } from '../components/edit-computer/edit-computer.component';

const routes: Routes = [
  { path: '', component: ComputersComponent },
  {
    path: 'new',
    component: NewCmputerComponent,
  },
  {
    path: 'edit/:id',
    component: EditComputerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComputersRoutingModule {}
