import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSortModule, MatCardModule, MatTabsModule, MatIconModule, MatStepperModule, MatTooltipModule, MatSidenavModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
   MatSidenavModule,
   MatTooltipModule,
   MatButtonModule,
   MatCheckboxModule,
   MatMenuModule,
   MatTableModule,
   MatPaginatorModule,
   MatFormFieldModule,
   MatInputModule,
   MatSortModule,
   MatCardModule,
   MatTabsModule,
   MatIconModule,
   MatStepperModule,
   FormsModule,
   ReactiveFormsModule
  ],
  exports: [
    MatTooltipModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
