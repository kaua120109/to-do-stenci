import { Component, State, h, Listen } from '@stencil/core';
import { state } from '../app-form/store';
import { Lista } from '../../types/Lista';

@Component({
  tag: 'app-lista',
  styleUrl: 'app-lista.css',
  shadow: true
})
export class AppLista {
  @State() lista: Lista[] = state.lista;

  @Listen('listaAtualizada', { target: 'body' })
  handleListaAtualizada(event: CustomEvent<Lista[]>) {
    this.lista = [...event.detail];
  }

  remove = (item: Lista) => {
    const index = state.lista.indexOf(item);
    if (index > -1) {
      state.lista = [
        ...state.lista.slice(0, index),
        ...state.lista.slice(index + 1)
      ];
      this.handleListaAtualizada(new CustomEvent('listaAtualizada', { detail: state.lista }));
    }
  }

  render() {
    const dataNascimentoPtBr = (dataNascimento: string) => {
      const [ano, mes, dia] = dataNascimento.split('-');
      return `${dia}/${mes}/${ano}`
    }

    return (
      <div>
        <main>
          <ul>
            {this.lista.map((item) => (
              <li key={item.id}>{item.nome} - {dataNascimentoPtBr(item.dataNascimento)} - <button onClick={() => this.remove(item)}>Remover</button> </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}
