import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [RouterLink, CommonModule, PensamentoComponent, HttpClientModule],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css',
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((dados) => {
      console.log('Pensamentos recebidos:', dados);
      this.listaPensamentos = dados;
    });
  }

}
