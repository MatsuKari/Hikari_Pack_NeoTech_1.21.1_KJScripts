ServerEvents.recipes(Recipe =>
{
  function Separation_Recipes(fluid_input, fluid_input_amount, output1, output1_amount, output2, output2_amount)
  {
      Recipe.custom
({
  "type": "mekanism:separating",
  "input": {
    "amount": fluid_input_amount,
    "tag": fluid_input
  },
  "left_chemical_output": {
    "amount": output1_amount,
    "id": output1
  },
  "right_chemical_output": {
    "amount": output2_amount,
    "id": output2
  }
    

})
   }

})