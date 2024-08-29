import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  lista: JSON.parse(localStorage.getItem('lista') || '[]')
});

onChange('lista', value => {
  localStorage.setItem('lista', JSON.stringify(value));
});

export { state };
