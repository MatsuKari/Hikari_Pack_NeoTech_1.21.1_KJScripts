ServerEvents.recipes(Recipe => {
  function Crushing(count_input, item_input, count_output, item_output) {
    Recipe.custom
      ({
        "type": "mekanism:crushing",
        "input":
        {
          "count": count_input,
          "item": item_input
        },
        "output":
        {
          "count": count_output,
          "id": item_output
        }
      })

  }

  function Crushing_Tag(count_input, item_input, count_output, item_output) {
    Recipe.custom
      ({
        "type": "mekanism:crushing",
        "input":
        {
          "count": count_input,
          "tag": item_input
        },
        "output":
        {
          "count": count_output,
          "id": item_output
        }
      })
  }

  Crushing(1, "minecraft:amethyst_block", 4, "minecraft:amethyst_shard")

  Crushing(1, "extendedae:entro_crystal", 1, "extendedae:entro_dust")

  Crushing(1, "minecraft:end_stone", 1, "occultism:crushed_end_stone")

  Crushing(1, "calcite", 1, "occultism:crushed_calcite")

  Crushing(1, "blackstone", 1, "occultism:crushed_blackstone")

  Crushing(1, "silentgear:blaze_gold_ingot", 1, "silentgear:blaze_gold_dust")

  Crushing(1, "silentgear:azure_electrum_ingot", 1, "silentgear:azure_electrum_dust")

  Crushing(1, "silentgear:azure_silver_ingot", 1, "silentgear:azure_silver_dust")

  Crushing_Tag(1, 'enderio:entity_storage', 1, "forbidden_arcanus:spawner_scrap")

  Crushing(1, "minecraft:poppy", 4, "minecraft:red_dye")

  Crushing(1, "minecraft:blue_ice", 1, "occultism:crushed_blue_ice")

  Crushing(1, "minecraft:packed_ice", 1, "occultism:crushed_packed_ice")

  Crushing(1, "minecraft:ice", 1, "occultism:crushed_ice")

  Crushing(1, "minecraft:prismarine_shard", 1, "minecraft:prismarine_crystals")
  /* //Receita de Raw Crimson Iron para Crimson Iron Dust no Crusher (2x)
  Crushing_Recipes("silentgear:raw_crimson_iron", 1, 2, "silentgear:crimson_iron_dust", "Custom_Crimson_Iron_Crushing") */

  //Crushing_Recipes(1, {"id": "evilcraft:vein_sword", "count": 1, "components": {"minecraft:enchantments": {"minecraft:looting": 2}}}, 1, {"id": "minecraft:enchanted_book", "count": 1, "components": {"minecraft:stored_enchantments": {"minecraft:looting": 2}}})

  /* //Receita de Extração de Looting II da Vein Sword
  Crushing_Recipes('evilcraft:vein_sword[enchantments={levels:{"minecraft:looting":2}}]', 1, 1, 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:looting":2}}]') */

})