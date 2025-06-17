ServerEvents.recipes(Recipe => 
{
  function Energizing(input1, input2, energy, output, count_output) 
  {
   Recipe.custom(
   {
    "type": "powah:energizing",
    "energy": energy,
    "ingredients": 
    [
    {
      "item": input1
    },
    {
      "item": input2
    }
    ],
    "result": 
    {
    "count": count_output,
    "id": output
    }
    })
  }
//Receita de All The Modium Vibranium Ingot feito na Energizing Orb por 6M de FE
Energizing("allthemodium:allthemodium_ingot", "allthemodium:vibranium_ingot", 6000000, "allthemodium:vibranium_allthemodium_alloy_ingot", 1)
    
Energizing("allthemodium:allthemodium_ingot", "allthemodium:unobtainium_ingot", 7000000, "allthemodium:unobtainium_allthemodium_alloy_ingot", 1)
    
Energizing("allthemodium:unobtainium_ingot", "allthemodium:vibranium_ingot", 9000000, "allthemodium:unobtainium_vibranium_alloy_ingot", 1)
})