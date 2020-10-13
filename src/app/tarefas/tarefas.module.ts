import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TarefaService } from './shared/tarefa.service';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
