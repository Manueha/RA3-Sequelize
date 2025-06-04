export class  DeptModel {

  dept_num?: number;
  dept_nom?: string;
  dept_loc?: string;

  constructor(
    num: number,
    nom: string,
    loc: string
  )
  {

    this.dept_num = num;
    this.dept_nom = nom;
    this.dept_loc = loc;

  }




}
