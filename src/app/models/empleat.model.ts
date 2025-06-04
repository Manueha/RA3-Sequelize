export class EmpleatModel {
  empleat_num?: number;
  empleat_nom?: string;
  empleat_ofici?: string;
  empleat_dir?: number;
  empleat_datalt?: Date;
  empleat_salari?: number;
  empleat_comissio?: number;
  empleat_dept_num?: number;

  constructor(
    num: number,
    nom: string,
    ofici: string,
    dir: number,
    datalt: Date,
    salari: number,
    comissio: number,
    dept_num: number
  ) {
    this.empleat_num = num;
    this.empleat_nom = nom;
    this.empleat_ofici = ofici;
    this.empleat_dir = dir;
    this.empleat_datalt = datalt;
    this.empleat_salari = salari;
    this.empleat_comissio = comissio;
    this.empleat_dept_num = dept_num;
  }
}
