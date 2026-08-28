/* ServerEvents.recipes(Recipe =>
{
  function Condensating_Recipes(chem_input_amount,chem_input, fluid_output_amount, fluid_output, fluid_input, fluid_input_amount, chem_output, chem_output_amount)
  {
    Recipe.custom(
{
  "type": "mekanism:rotary",
  "chemical_input": {
    "amount": chem_input_amount,
    "chemical": chem_input
  },
  "chemical_output":
  {
    "amount": chem_output_amount,
    "id": chem_output
  },
  "fluid_input": {
    "amount": fluid_input_amount,
    "tag": fluid_input 
  },
  "fluid_output":
  {
    "amount": fluid_output_amount,
    "id": fluid_output
  }
})
   }
  Condensating_Recipes(1,'kubejs:custom_stellar_fuel', 1, "stellaris:fuel","c:fusion_fuel",1, "kubejs:custom_stellar_fuel", 1)
}) */