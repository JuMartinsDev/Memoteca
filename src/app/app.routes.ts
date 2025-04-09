import { Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';


export const routes: Routes = [
  {
  path:'criarPensamento',
  component: CriarPensamentoComponent
  },
  //o path é a rota que fara (fica na url)
  //e adicione o component
  {
  path:'listarPensamento',
  component: ListarPensamentosComponent,
  },
  //é importante passar um caminho vazio
  {
  path:'',
  redirectTo: 'listarPensamento',
  //devemos colocar pathMatch também
  pathMatch: 'full',
  }

];
