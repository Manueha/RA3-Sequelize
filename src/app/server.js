
const express = require('express');
const app = express();
const fs = require('node:fs')
app.use(express.json());

port = 3080;

app.listen(port, ()=>{
  console.log(`Server listening on the port::${port}`);
})

const cors = require('cors');
app.use(cors());

const {crearConfigBaseDades}  = require('C:\\Users\\Usuario\\Desktop\\ciCLO\\DAM\\Acess_A_Dades\\RA3-Sequelize\\src\\app\\db.config.js')

const db = crearConfigBaseDades();
const {getModelCity} = require('C:\\Users\\Usuario\\Desktop\\ciCLO\\DAM\\Acess_A_Dades\\RA3-Sequelize\\src\\app\\city.model.js')

const initModels = require('./models/init-models');
const {empleat,dept,doctor,hospital,malalt,plantilla,sala} = initModels(db)
const City = getModelCity(db)

const {getModelCountry} = require('C:\\Users\\Usuario\\Desktop\\ciCLO\\DAM\\Acess_A_Dades\\RA3-Sequelize\\src\\app\\country.model.js')
const {Sequelize} = require("sequelize");
const Country = getModelCountry(db)


db.sync().then(()=>{
  console.log("Drop and re-sync db")
})


app.post('/nouPais', async (req,res)=>{
  await Country.create({country_id: 1,country: "Patatas Bravas"})
});

  app.post('/afegirEmpleat',async (req,res)=>{

    const { empleat_num, empleat_nom, empleat_ofici, empleat_dir, empleat_datalt, empleat_salari, empleat_comissio } = req.body;

    const nouEmpleat = await empleat.create({
      empleat_num,
      empleat_nom,
      empleat_ofici,
      empleat_dir,
      empleat_datalt,
      empleat_salari,
      empleat_comissio,
    });
    res.status(201).json({ success: true, data: nouEmpleat });
  })

  app.get('/llistaDoctors', async (req,res)=>{
    const doctors = await doctor.findAll({
      include:[{
        model: hospital,
        as: 'doctor_hospital_codi_hospital',
        where: { hospital_nom:'La Paz'}
      }]
    })
    res.status(201).json({success:true, data: doctors})
  })


app.get('/llistarDept/:id', async (req, res) => {
  const id = req.params.id;
  const empleasnum = await empleat.count({
    where: {
      empleat_dept_num: id
    }
  });
  res.status(201).json({ success: true, empleasnum });


})

// app.put('/cafe/:doctorCodi', async (req, res) => {
//   const doctorCodi = req.body.doctor_codi;
//   const  {doctor_hospital_codi, doctor_codi,doctor_nom,doctor_especialitat} = req.body;
//
//   console.log(req.body)
//
//   console.log("cafe")
//
//   try {
//     const doctorModificat = await doctor.update(doctor_codi,doctor_hospital_codi,doctor_nom,doctor_especialitat,{
//       where: { doctor_codi: doctorCodi }
//     });
//
//     if (doctorModificat) {
//       res.send('Doctor modificat.');
//     } else {
//       res.status(404).send('No s\'ha trobat el doctor.');
//     }
//
//
//
//   }catch (err){
//     console.log(err)
//   }
//
//
// })


// app.put('/modificar-doctor/:doctorHospitalCodi', async (req, res) => {
//   const doctorHospitalCodi = req.params.doctorHospitalCodi;
//   const novaInfoDoctor = req.body;
//
//   const doctorModificat = await doctor.update(novaInfoDoctor, {
//     where: { doctor_hospital_codi: doctorHospitalCodi }
//   });
//
//   if (doctorModificat) {
//     res.send('Doctor modificat.');
//   } else {
//     res.status(404).send('No s\'ha trobat el doctor.');
//   }
//
// });


// app.delete('/borrar-empleat/:empleatNum', async (req, res) => {
//   const empleatNum = req.params.empleatNum;
//
//   const numFilesBorrades = await empleat.destroy({
//     where: { empleat_num: empleatNum }
//   });
//
//   if (numFilesBorrades > 0) {
//     res.send('Empleat al carrer.');
//   } else {
//     res.status(404).send('No s\'ha trobat l\'empleat.');
//   }
//
// });


app.get('/hospitals/sales-llits', async (req, res) => {
  try {
    const hospitals = await hospital.findAll({
      attributes: [
        'hospital_codi',
        'hospital_nom',
        [Sequelize.fn('COUNT', Sequelize.col('salas.sala_codi')), 'num_sales'],
        [Sequelize.fn('SUM', Sequelize.col('salas.sala_nllits')), 'total_llits']
      ],
      include: [{
        model: sala,
        as: 'salas',
        attributes: []
      }],
      group: ['hospital.hospital_codi', 'hospital.hospital_nom']
    });

    res.json(hospitals);
  } catch (error) {
    console.error('Error obtenint les dades:', error);
    res.status(500).json({ error: 'Error en la consulta', error});
  }
});
