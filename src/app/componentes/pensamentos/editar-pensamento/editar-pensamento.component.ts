import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { PensamentoService } from '../pensamento.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})

export class EditarPensamentoComponent {

  pensamento: Pensamento = {
    id:'0',
    conteudo:'',
    autoria:'',
    modelo:''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })

  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
