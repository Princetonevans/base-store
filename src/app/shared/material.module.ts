import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSortModule, MatCardModule, MatTabsModule, MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  imports: [
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
   MatIconModule
  ],
  exports: [
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
    MatIconModule
  ]
})
export class MaterialModule { }
