ServerEvents.recipes(Recipe => 
{
  function Mechanical_Squeeze(item_input, item_output, duration) 
  {
    Recipe.custom
    ({
      "type": "integrateddynamics:mechanical_squeezer",
      "input_item": 
      {
        "item": item_input
      },
      "output_items": 
      [
        {
          "item": 
          {
            "id": item_output
          }
        }
      ],
      "duration": duration
    })
  }

Mechanical_Squeeze("allthemodium:allthemodium_ingot", "kubejs:silent_allthemodium_plate", 20)

Mechanical_Squeeze("allthemodium:vibranium_ingot", "kubejs:silent_vibranium_plate", 20)

Mechanical_Squeeze("allthemodium:unobtainium_ingot", "kubejs:silent_unobtainium_plate", 20)

Mechanical_Squeeze("allthemodium:allthemodium_plate", "allthemodium:allthemodium_rod", 20)

})