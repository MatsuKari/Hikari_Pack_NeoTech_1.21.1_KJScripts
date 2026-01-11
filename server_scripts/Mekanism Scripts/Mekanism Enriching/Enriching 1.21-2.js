ServerEvents.recipes(Recipe => {
  function Enriching_2(item_input, amount_input, count_output, item_output) {
    Recipe.custom
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

  /* Enriching_2("minecraft:rotten_flesh", 1, 1, "tombstone:grave_dust") */

  Enriching_2("tombstone:grave_dust", 3, 1, "tombstone:essence_of_undeath")

  Enriching_2("silentgear:netherwood_sapling", 1, 2, "silentgear:nether_banana")

  Enriching_2("minecraft:red_mushroom", 1, 2, "minecraft:nether_wart")

  Enriching_2("minecraft:short_grass", 1, 1, "minecraft:wheat_seeds")

  Enriching_2("compass", 1, 1, "twilightforest:maze_map_focus")

  Enriching_2('occultism:raw_iesnium', 1, 3, "occultism:iesnium_dust")

  Enriching_2("powah:uraninite", 1, 3, "mekanism:yellow_cake_uranium")

  Enriching_2("forbidden_arcanus:soul", 3, 1, "forbidden_arcanus:enchanted_soul")

  Enriching_2('irons_spellbooks:raw_mithril', 1, 3, 'irons_spellbooks:mithril_scrap')

  Enriching_2("minecraft:muddy_mangrove_roots", 1, 1, "minecraft:clay")
})