import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [RouterLink,
    CommonModule,
    PensamentoComponent,
    HttpClientModule],

    //Em componentes standalone, precisamos registrar manualmente os serviços que serão injetados.
  // Como esse componente usa o PensamentoService, adicionamos ele no array de providers.
  providers: [PensamentoService],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css',
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  //injetando o serviço
  constructor(private service: PensamentoService) {}

  //loógica que você quer quando o projeto for aberto
  //EMite notificação ao receber pensamento
  ngOnInit(): void {
    this.service.listar().subscribe((dados) => {
      console.log('Pensamentos recebidos:', dados);
      this.listaPensamentos = dados;
    });
  }

}
