ServerEvents.recipes(Recipe =>
{
  function Stamping(energy, input_amount, item_input, output, output_amount, mold, mold_amount)
  {
      Recipe.custom
({ 
   "type": "mekmm:stamper",
  "input": {
    "count": input_amount,
    "item": item_input
  },
  "mold": {
    "count": mold_amount,
    "item": mold
  },
  "output": {
    "count": output_amount,
    "id": output
  }
})
    }

    Stamping(1000, 1, 'minecraft:iron_ingot', "alltheores:iron_plate", 1, "evolvedmekanism:mold_plate", 1)

    Stamping(1000, 1, 'mekanism:ingot_steel', "alltheores:steel_plate", 1, "evolvedmekanism:mold_plate", 1)

    Stamping(1000, 1, 'ad_astra:desh_ingot', "ad_astra:desh_plate", 1, "evolvedmekanism:mold_plate", 1)
})