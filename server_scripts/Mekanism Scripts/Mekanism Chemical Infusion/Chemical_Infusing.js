ServerEvents.recipes(Recipe =>
{
  function Chemical_Infusing_Recipes(chemical1, chemical1_amount, chemical2, chemical2_amount, output_chemical, output_chemical_amount)
  {
    Recipe.custom(
{
  "type": "mekanism:chemical_infusing",
  "left_input": {
    "amount": chemical1_amount,
    "chemical": chemical1
  },
  "output": {
    "amount": output_chemical_amount,
    "id": output_chemical
  },
  "right_input": {
    "amount": chemical2_amount,
    "chemical": chemical2
  }
})
   }
  Chemical_Infusing_Recipes("mekanismgenerators:fusion_fuel", 100, "mekanism:fissile_fuel", 100, 'kubejs:custom_stellar_fuel', 200)
})