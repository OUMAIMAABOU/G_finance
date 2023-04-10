const Employer = require("../Models/userModel");
const Prime_anciennete = require("../Models/PrimeModel");
const Cotisation = require("../Models/CotisationModel");
const IR = require("../Models/ImpotRevenuModel");
const mongoose = require("mongoose");
const moment = require('moment');


const yearDifferenceFn = async (id_employe) => {
    const employe = await Employer.findById(new mongoose.Types.ObjectId(id_employe));
    return moment(new Date()).diff(moment(employe.data_embauche), 'years');
};

const PrimeAncienneteFn = async(id_employe) => {
  let yearDifference=await yearDifferenceFn(id_employe)
  const Primes = await Prime_anciennete.findOne({year_max: { $gte: yearDifference},year_min:{ $lte: yearDifference} })
  if(Primes) return (Primes.taux)/100;
}

const SalaireBrutFn = async(salaire_de_base, Heurs_supplementaire, prime,id_employe) => {
     let prime_d_anciennete=0
     prime_d_anciennete=await PrimeAncienneteFn(id_employe)
    return salaire_de_base + Heurs_supplementaire + ((salaire_de_base + Heurs_supplementaire)*prime_d_anciennete) + prime;
}
const deductionfn = async (SalaireBrut) => {
  const Cotisations = await Cotisation.findOne()
  if (SalaireBrut>=6000) return ((SalaireBrut*Cotisations.mutuelle)/100) + ((SalaireBrut*Cotisations.cimr)/1000) +((SalaireBrut*Cotisations.amo)/100) +((6000*Cotisations.cnss)/100)
  else return ((SalaireBrut*Cotisations.mutuelle)/100) + ((SalaireBrut*Cotisations.cimr)/1000) +((SalaireBrut*Cotisations.amo)/100) +((SalaireBrut*Cotisations.cnss)/100)
};

const ImpotRevenuFn = async (Salaire_net_imposabel) => {
    const ImpotRevenu = await IR.findOne({salaire_max: { $gte: Salaire_net_imposabel},salaire_min:{ $lte: Salaire_net_imposabel} })
    return ((Salaire_net_imposabel * ImpotRevenu.taux)/100) -ImpotRevenu.somme_deduire;
  };
  
  const IrNetFn = async (ir_brut,id_employe) => {
    const employe = await Employer.findById(new mongoose.Types.ObjectId(id_employe));
   if(employe.nombre_Denfant<7)return ir_brut-(employe.nombre_Denfant*30)
    else return  ir_brut-180

  };

module.exports = { yearDifferenceFn,SalaireBrutFn,deductionfn,ImpotRevenuFn,PrimeAncienneteFn,IrNetFn}
