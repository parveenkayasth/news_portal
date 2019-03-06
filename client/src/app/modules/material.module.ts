import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule, 
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule, 
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]  
})
export class MaterialModule { }
