export class MalaltModel {
  malalt_num?: number;
  malalt_nom?: string;
  malalt_adreca?: string;
  malalt_dnaixa?: Date;
  malalt_sexe?: string;
  malalt_nss?: number;

  constructor(num: number, nom: string, adreca: string, dnaixa: Date, sexe: string, nss: number) {
    this.malalt_num = num;
    this.malalt_nom = nom;
    this.malalt_adreca = adreca;
    this.malalt_dnaixa = dnaixa;
    this.malalt_sexe = sexe;
    this.malalt_nss = nss;
  }
}
