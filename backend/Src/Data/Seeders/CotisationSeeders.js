const Cotisation=require("../../../Models/CotisationModel")
const CotisationFactories=require("../Factories/CotisationFactory")
Cotisation.insertMany(CotisationFactories)
console.log('ImpotRevenu Cotisation successfully');
