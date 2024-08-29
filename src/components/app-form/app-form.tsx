import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { state } from './store';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.css',
  shadow: true
})
export class AppForm {
  @State() nome: string = '';
  @State() dataNascimento: string = '';
  @Event() listaAtualizada: EventEmitter;

  handleAdd = (e: Event) => {
    e.preventDefault();

    state.lista = [...state.lista, { id: state.lista.length + 1, nome: this.nome, dataNascimento: this.dataNascimento }];
    this.listaAtualizada.emit(state.lista);

    this.nome = '';
    this.dataNascimento = '';
  }

  handleChange = (e, fieldName) => {
    const { value } = e.target;
    this[fieldName] = value;
  };

  render() {
    return (
      <div>
        <h1>Formulário</h1>

        <form onSubmit={this.handleAdd}>
          <label htmlFor="nome">
            Nome
          </label>
          <input autoFocus type="text" name="nome" id="nome" onInput={(e) => this.handleChange(e, 'nome')} value={this.nome} />

          <label htmlFor="dataNascimento">
            Data de Nascimento <br />
          </label>
          <input type="date" name="dataNascimento" id="dataNascimento" onInput={(e) => this.handleChange(e, 'dataNascimento')} value={this.dataNascimento}/>

          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
