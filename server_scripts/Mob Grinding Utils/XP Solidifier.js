ServerEvents.recipes(Receita => 
{
 function Solidifying(fluidAmount, item_input ,count_output, item_output)
{
 Receita.custom({
  "type": "mob_grinding_utils:solidify",
  "fluidAmount": fluidAmount,
  "ingredient": 
  {
    "item": item_input
  },
  "result": 
  {
    "count": count_output,
    "id": item_output
  }
})
}

Solidifying(100, "quartz", 1, "forbidden_arcanus:xpetrified_orb")
})