import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: '0',
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  //injetar services que vamos usar
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamento) =>{
      this.pensamento = pensamento
    })
  }

  excluirPensamento(){
    if(this.pensamento.id){
    this.service.excluir(this.pensamento.id).subscribe(() =>{
      //passar rota
      this.router.navigate(['/listarPensamento'])
    })
  }
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }

}
