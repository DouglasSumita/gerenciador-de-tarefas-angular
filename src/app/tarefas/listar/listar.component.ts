import { Component, OnInit } from '@angular/core';

import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../shared/tarefa.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  cadastrar(tarefa: Tarefa): void {
    this.tarefaService.cadastrar(tarefa);
  }

  remover($event: any, tarefa: Tarefa): void {

  }
}
