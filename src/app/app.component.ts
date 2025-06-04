import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {response} from 'express';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RA3-Sequelize';
  doctors: any[] = [];
  departamentId: number = 20;
  comptadorEmpleats: number = 0;
  doctorHospital: number = 522;

  constructor(private http: HttpClient) {
    // this.comptarEmpleatsDept()
    // this.http.post("http://localhost:3080/nouPais",{}).subscribe()

    const empleatcaca = {
      empleat_num: 3,
      empleat_nom: 'Rodolfo',
      empleat_ofici: 'Metge',
      empleat_dir: 60420,
      empleat_datalt: '2024-03-17',
      empleat_salari: 4000.50,
      empleat_comissio: 250.00,
    }

    this.http.post('http://localhost:3080/afegirEmpleat', empleatcaca).subscribe(response => {
      console.log('Empleat afegit:', response);
    }, error => {
      console.error('Error en afegirEmpleat:', error);
    });
    // const header = new HttpHeaders({
    //   doctor_codi: 522,
    //   doctor_hospital_codi: 18,
    //   doctor_nom: 'Manel',
    //   doctor_especialitat: 'PEDIATRIA'
    // })
    // const novaInfoDoc = {
    //   doctor_codi: 12,
    //   doctor_hospital_codi: 18,
    //   doctor_nom: 'Manel',
    //   doctor_especialitat: 'PEDIATRIA',
    // }
    //
    // this.http.put(`//localhost:3080/cafe/${this.doctorHospital}`, {novaInfoDoc})
    //   .subscribe(response => {
    //   console.log('Doctor modificat:', response);
    // }, error => {
    //   console.error('Error modificant el doctor:', error);
    // });


  //   const novaInfoDoc = {
  //     doctor_codi: 12,
  //     doctor_hospital_codi: 18,
  //     doctor_nom: 'sigma',
  //     doctor_especialitat: 'UROLOGIA',
  //   }
  //
  //   this.http.put(`http://localhost:3080/modificar-doctor/${this.doctorHospital}`, novaInfoDoc)
  // .subscribe(response => {
  //     console.log('Doctor modificat:', response);
  //   }, error => {
  //     console.error('Error modificant el doctor:', error);
  //   });

  //   const empleatNum = 7934;
  //
  //   this.http.delete(`http://localhost:3080/borrar-empleat/${empleatNum}`)
  // .subscribe(
  //     response => {
  //       console.log('Empleat eliminat:', response);
  //     },
  //     error => {
  //       console.error('Error en eliminar l\'empleat:', error);
  //     }
  //   );

    this.http.get<any[]>('http://localhost:3080/hospitals/sales-llits')
      .subscribe(response => {
        console.log('Hospitals i llits:', response);
      }, error => {
        console.error('Error obtenint les dades:', error);
      });
  }


  // llistaDoctors() {
  //   this.http.get<any>('http://localhost:3080/llistaDoctors').subscribe({
  //     next: (response) => {
  //       this.doctors = response.data
  //       console.log('Lista de doctores recibida:', this.doctors);
  //     },
  //     error: (error) => {
  //       console.error('Error en llistaDoctors:', error);
  //     }
  //   });
  // }

  // comptarEmpleatsDept(){
  //   this.http.get<any>(`http://localhost:3080/llistarDept/${this.departamentId}`).subscribe({
  //     next: (response) =>{
  //       console.log(response)
  //     },
  //     error: (error) => {
  //       console.log('Eror',error)
  //     }
  //   })
  // }



}
