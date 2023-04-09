const ImpotRevenu=require("../../../Models/ImpotRevenuModel")
const ImpotRevenuFactories=require("../Factories/ImpotRevenuFactories")
ImpotRevenu.insertMany(ImpotRevenuFactories)
console.log('ImpotRevenu adding successfully');
