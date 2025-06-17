ServerEvents.recipes(Recipe => 
{
  function Infusing(infusion_amount,infusion_type,input_count,input_item,output_count,output_item) 
  {
    Recipe.custom
    ({
      "type": "mekanism:metallurgic_infusing",
      "chemical_input": 
      {
      "amount": infusion_amount,
      "tag": infusion_type
      },
      "item_input": 
      {
       "count": input_count,
       "item": input_item
      },
      "output": 
      {
       "count": output_count,
       "id": output_item
      },
      "per_tick_usage": false
    })
  }

  Infusing(20, "mekanism:redstone", 1, "silentgear:netherwood_sapling", 2, "silentgear:netherwood_sapling" )
})
