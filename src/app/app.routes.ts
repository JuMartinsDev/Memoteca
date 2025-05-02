import { Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';

export const routes: Routes = [
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentosComponent
  },
  {
    path: '',
    redirectTo: 'listarPensamento', // Redireciona para o mural (listarPensamento) se a rota for vazia
    pathMatch: 'full'
  }
];
