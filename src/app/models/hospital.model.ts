export class HospitalModel {
  hospital_codi?: number;
  hospital_nom?: string;
  hospital_adreca?: string;
  hospital_telefon?: string;
  hospital_nllits?: number;

  constructor(codi: number, nom: string, adreca: string, telefon: string, nllits: number) {
    this.hospital_codi = codi;
    this.hospital_nom = nom;
    this.hospital_adreca = adreca;
    this.hospital_telefon = telefon;
    this.hospital_nllits = nllits;
  }
}
