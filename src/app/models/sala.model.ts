export class SalaModel {
  sala_codi?: number;
  sala_hospital_codi?: number;
  sala_nom?: string;
  sala_nllits?: number;

  constructor(codi: number, hospital_codi: number, nom: string, nllits: number) {
    this.sala_codi = codi;
    this.sala_hospital_codi = hospital_codi;
    this.sala_nom = nom;
    this.sala_nllits = nllits;
  }
}
