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

  doar(formu: { value: { tpSangue: string; qtde: any; }; }) {
    const tpSangue = formu.value.tpSangue.toUpperCase();
    const qtde = formu.value.qtde;


    this.qtde += parseFloat(qtde);

    if (tpSangue == "A+") {
      this.apos += parseFloat(qtde);
    } else if (tpSangue == "A-") {
      this.aneg += parseFloat(qtde);
    } else if (tpSangue == "B+") {
      this.bpos += parseFloat(qtde);
    } else if (tpSangue == "B-") {
      this.bneg += parseFloat(qtde);
    } else if (tpSangue == "AB+") {
      this.abpos += parseFloat(qtde);
    } else if (tpSangue == "AB-") {
      this.abneg += parseFloat(qtde);
    } else if (tpSangue == "O+") {
      this.opos += parseFloat(qtde);
    } else if (tpSangue == "O-") {
      this.oneg += parseFloat(qtde);
    }

  }
}