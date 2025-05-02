import { Pensamento } from './../pensamento';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  imports: [CommonModule, RouterModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  //NgFor
  @Input() pensamento: Pensamento= {
    id: '0',
    conteudo: 'I love Angular',
    autoria: 'Julia',
    modelo: 'modelo3'
  }

  //NgClass
  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g';
    }
      return'pensamento-p';
    }

  }
