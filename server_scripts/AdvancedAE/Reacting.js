ServerEvents.recipes(Recipe =>
{
  function Advanced_Reacting(energy, fluid_input, input_amount, item_input, item_amount, fluid_output, fluid_output_amount)
  {
      Recipe.custom
({ 
  "type": "advanced_ae:reaction",
  "input_energy": energy,
  "input_fluid": {
    "amount": input_amount,
    "ingredient": {
      "fluid": fluid_input
    }
  },
  "input_items": [
    {
      "ingredient": {
        "item": item_input
      }
    }
  ],
  "output": {
    "#": fluid_output_amount,
    "#t": "ae2:f",
    "id": fluid_output
  }
})
    }
    
})