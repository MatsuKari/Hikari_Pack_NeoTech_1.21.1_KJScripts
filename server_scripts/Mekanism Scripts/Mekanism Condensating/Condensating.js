ServerEvents.recipes(Recipe =>
{
  function Condensating_Recipes(chem_input_amount,chem_input, fluid_output_amount, fluid_output)
  {
    Recipe.custom(
{
  "type": "mekanism:rotary",
  "chemical_input": {
    "amount": chem_input_amount,
    "chemical": chem_input
  },
  "fluid_output": {
    "amount": fluid_output_amount,
    "id": fluid_output
  }
})
   }
  Condensating_Recipes(100,'kubejs:custom_stellar_fuel', 100, "stellaris:fuel")
})