import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; // Adicione esta linha para que o router link do listar pensamento funcione
import { Pensamento } from '../../../componentes/pensamentos/pensamento';


@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule, RouterLink],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent  implements OnInit{

  //pensamento é atributo que é um objeto
  pensamento: Pensamento= {
    id: 0,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: '' //precisamos relacionar esses modelos e tudo aos imputs feitos pelo user

  }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("Novo pensamento criado")
  }

  cancelarPensamento(){
    alert("Pensamento deletado")
  }

}
