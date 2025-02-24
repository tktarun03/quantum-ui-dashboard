import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Quantum UI Dashboard</h1>
    <div class="dashboard">
      <quantum-widget></quantum-widget>
      <wasm-qc-widget></wasm-qc-widget>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }