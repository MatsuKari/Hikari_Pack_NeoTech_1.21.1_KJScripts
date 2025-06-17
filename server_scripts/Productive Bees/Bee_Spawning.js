ServerEvents.recipes(Recipe => 
{
  function Bee_Spawning(nest, bee) 
  {
    Recipe.custom
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

