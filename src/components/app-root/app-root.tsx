import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <main>
        <app-form></app-form>
        <app-lista></app-lista>
        </main>
      </div>
    );
  }
}
