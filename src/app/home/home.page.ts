import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  tpSangue = ' '
  qtde = 0
  apos = 0
  aneg = 0
  bpos = 0
  bneg = 0
  abpos = 0
  abneg = 0
  opos = 0
  oneg = 0
  apos_atual = 0
  aneg_atual = 0
  bpos_atual = 0
  bneg_atual = 0
  abpos_atual = 0
  abneg_atual = 0
  opos_atual = 0
  oneg_atual = 0

  doar(formu: { value: { tpSangue: string; qtde: any; }; }) {
    const tpSangue = formu.value.tpSangue.toUpperCase();
    const qtde = formu.value.qtde;

    switch (tpSangue) {
      case "A+":
        this.apos += parseFloat(qtde);
        break;
      case "A-":
        this.aneg += parseFloat(qtde);
        break;
      case "B+":
        this.bpos += parseFloat(qtde);
        break;
      case "B-":
        this.bneg += parseFloat(qtde);
        break;
      case "AB+":
        this.abpos += parseFloat(qtde);
        break;
      case "AB-":
        this.abneg += parseFloat(qtde);
        break;
      case "O+":
        this.opos += parseFloat(qtde);
        break;
      case "O-":
        this.oneg += parseFloat(qtde);
        break;
      default:
        break;
    }
  
  }

  estoque() {

    this.apos_atual = this.apos;
    this.aneg_atual = this.aneg;
    this.bpos_atual = this.bpos;
    this.bneg_atual = this.bneg;
    this.abpos_atual = this.abpos;
    this.abneg_atual = this.abneg;
    this.opos_atual = this.opos;
    this.oneg_atual = this.oneg;

  }

}