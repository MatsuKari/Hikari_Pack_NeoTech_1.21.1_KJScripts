ServerEvents.recipes(Receita => 
{
  function Bee_Spawning(nest, bee) 
  {
    Receita.custom
    ({
        "type": "productivebees:bee_spawning",
        "ingredient": 
        {
          "item": nest
        },
        "results": 
        [
          bee
        ]
    })
  }

Bee_Spawning("productivebees:jungle_wood_nest","productivebees:leafcutter_bee")
})

