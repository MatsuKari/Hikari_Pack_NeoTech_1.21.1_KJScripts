ServerEvents.recipes(Recipe =>
{
  function Evaporating_Recipes(input, input_amount, output, output_amount)
  {
      Recipe.custom
({
  "type": "mekanism:evaporating",
  "input": {
    "amount": input_amount,
    "tag": input
  },
  "output": {
    "amount": output_amount,
    "id": output
  }

})
   }
})