import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //  Mapear blocos e salas
  salasPorBloco: { [key: string]: string[] } = {
    "Bloco A": ["A1", "A2", "A3"],
    "Bloco B": ["B101", "B201", "B301"],
    "Bloco C": ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"],
    "Bloco D": ["D1", "D2", "D3", "D4"],
    "Bloco E": ["E101", "E102", "E103"],
    "Bloco F": ["F101", "F102", "F201", "F202", "F203"],
    "Bloco G": ["G1", "G2", "G3"]
  };

  //  Controle do modal aberto
  modalAberto: string | null = null;

  // Abrir modal
  abrirModal(nome: string) {
    this.modalAberto = nome;
  }

  // Fechar modal
  fecharModal() {
    this.modalAberto = null;
  }

  //  Atualizar salas baseado no bloco escolhido
  blocoSelecionado: string = '';
  salasDisponiveis: string[] = [];

  atualizarSalas() {
    if (this.blocoSelecionado && this.salasPorBloco[this.blocoSelecionado]) {
      this.salasDisponiveis = this.salasPorBloco[this.blocoSelecionado];
    } else {
      this.salasDisponiveis = [];
    }
  }
}