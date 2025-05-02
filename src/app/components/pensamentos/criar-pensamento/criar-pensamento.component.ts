import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../../../componentes/pensamentos/pensamento.service';
import { Pensamento } from '../../../componentes/pensamentos/pensamento';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-criar-pensamento',
  imports: [CommonModule, FormsModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // Método para criar o pensamento e redirecionar
  criarPensamento(): void {
    this.pensamentoService.criar(this.pensamento).subscribe({
      next: (res) => {
        console.log('Pensamento criado:', res);
        alert('Pensamento criado com sucesso!');
        this.router.navigate(['/listarPensamento']); // Redireciona para o mural
      },
      error: (err) => {
        console.error('Erro ao criar pensamento:', err);
        alert('Erro ao criar o pensamento. Tente novamente.');
      }
    });
  }

  // Método de cancelamento, apenas volta ao mural
  cancelarPensamento(): void {
    this.router.navigate(['/listarPensamento']);
  }
}
