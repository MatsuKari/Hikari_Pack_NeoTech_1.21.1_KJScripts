ServerEvents.recipes(Recipe => 
{
 function Squeeze(item_input, item_output) 
 {
  Recipe.custom
  ({
    "type": "integrateddynamics:squeezer",
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
    ]
  })
 }

Squeeze("allthemodium:allthemodium_ingot", "kubejs:silent_allthemodium_plate")

Squeeze("allthemodium:vibranium_ingot", "kubejs:silent_vibranium_plate")

Squeeze("allthemodium:unobtainium_ingot", "kubejs:silent_unobtainium_plate")

Squeeze("allthemodium:allthemodium_plate", "allthemodium:allthemodium_rod")
})