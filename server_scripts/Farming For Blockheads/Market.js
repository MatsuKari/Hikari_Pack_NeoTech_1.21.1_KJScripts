ServerEvents.recipes(Receita => 
{
 function Market_Presets(category, preset,count_output, item_output) 
 {
  Receita.custom
  (
    {
        "type": "farmingforblockheads:market",
        "category": category,
        "preset": preset,
        "result": 
        {
          "count": count_output,
          "item": item_output
        }
    }
  )
 }

Market_Presets("category.farmingforblockheads.custom_matsu", "farmingforblockheads:edelwood_custom", 1 , "forbidden_arcanus:growing_edelwood")
})
