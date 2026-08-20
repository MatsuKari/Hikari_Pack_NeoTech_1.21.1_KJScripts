ServerEvents.recipes(Recipe =>
{
  function Reaction_Recipes(chem_input, chem_input_amount ,chem_output, chem_output_amount, duration, fluid_input, fluid_input_amount ,item_input, item_input_amount, item_output,item_output_amount)
  {
    Recipe.custom(
    {
      "type": "mekanism:reaction",
      "chemical_input": {
        "amount": chem_input_amount,
        "chemical": chem_input
      },
      "chemical_output": {
        "amount": chem_output_amount,
        "id": chem_output
      },
      "duration": duration,
      "fluid_input": {
        "amount": fluid_input_amount,
        "tag": fluid_input
      },
      "item_input": {
        "count": 10,
        "tag": item_input
      },
      "item_output": {
        "count": 5,
        "id": item_output
      }
     })
   }
  Reaction_Recipes('mekanism:hydrogen', 100, 'mekanism:ethene', 100, 200, 'mekanism:water', 1000, 'minecraft:cactus', 10, 'minecraft:slime_block', 5)
})