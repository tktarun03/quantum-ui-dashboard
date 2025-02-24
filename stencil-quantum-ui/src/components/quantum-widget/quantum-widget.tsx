import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'quantum-widget',
  styleUrl: 'quantum-widget.css',
  shadow: true
})
export class QuantumWidget {
  @State() result: string = "Awaiting Quantum Computation...";

  runQuantumSimulation() {
    const quantumStates = ["|0⟩", "|1⟩", "|+⟩", "|-⟩"];
    this.result = quantumStates[Math.floor(Math.random() * quantumStates.length)];
  }

  render() {
    return (
      <div class="quantum-box">
        <h2>Quantum State Simulator</h2>
        <button onClick={() => this.runQuantumSimulation()}>Run Simulation</button>
        <p>{this.result}</p>
      </div>
    );
  }
}
