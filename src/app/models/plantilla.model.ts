export class PlantillaModel {
  plantilla_hospital_codi?: number;
  plantilla_sala_codi?: number;
  plantilla_empleat_num?: number;
  plantilla_nom?: string;
  plantilla_funcio?: string;
  plantilla_torn?: string;
  plantilla_salari?: number;

  constructor(
    hospital_codi: number,
    sala_codi: number,
    empleat_num: number,
    nom: string,
    funcio: string,
    torn: string,
    salari: number
  ) {
    this.plantilla_hospital_codi = hospital_codi;
    this.plantilla_sala_codi = sala_codi;
    this.plantilla_empleat_num = empleat_num;
    this.plantilla_nom = nom;
    this.plantilla_funcio = funcio;
    this.plantilla_torn = torn;
    this.plantilla_salari = salari;
  }
}
