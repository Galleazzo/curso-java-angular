import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoFormComponent } from './produto-form/produto-form.component';



@NgModule({
  declarations: [
    ProdutoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [

  ]
})
export class ProdutosModule { }
