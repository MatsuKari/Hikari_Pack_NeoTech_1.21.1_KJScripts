ServerEvents.recipes(Receita => 
{
  function Enriching_Recipes(item_input, amount_input,count_output, item_output) 
  {
    Receita.custom
    ({
    "type": "mekanism:enriching",
    "input":
    {
     "count": amount_input,
     "item": item_input
    },
    "output": {
     "count": count_output,
     "id": item_output
    }
    })
  }

  Enriching_Recipes("minecraft:rotten_flesh", 1, 1,"tombstone:grave_dust")

  Enriching_Recipes("tombstone:grave_dust", 3, 1, "tombstone:essence_of_undeath")

  Enriching_Recipes("silentgear:netherwood_sapling", 1, 2, "silentgear:nether_banana")

  Enriching_Recipes("minecraft:red_mushroom", 1, 2, "minecraft:nether_wart")

  Enriching_Recipes("minecraft:short_grass", 1, 1, "minecraft:wheat_seeds")

  Enriching_Recipes("compass", 1, 1, "twilightforest:maze_map_focus")

  Enriching_Recipes('occultism:raw_iesnium', 1, 3, "occultism:iesnium_dust")

})