ServerEvents.recipes(Recipe =>
{
  function Reaction_Recipes()
  {
    Recipe.custom(
    {
      "type": "mekanism:reaction",
      "chemical_input": {
        "amount": 100,
        "chemical": "mekanism:hydrogen"
      },
      "chemical_output": {
        "amount": 100,
        "id": "mekanism:ethene"
      },
      "duration": 100,
      "fluid_input": {
        "amount": 10,
        "tag": "minecraft:water"
      },
      "item_input": {
        "count": 10,
        "tag": "minecraft:cactus"
      },
      "item_output": {
        "count": 5,
        "id": "minecraft:slime_block"
      }
     })
   }

})