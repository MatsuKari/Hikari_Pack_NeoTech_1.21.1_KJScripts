ServerEvents.recipes(event => {
    function BotanyPot(seed, soil, display, drop, chance, growthTick, cropYeild) {
        event.recipes.botanypots.crop(
            seed, // seed item
            soil, // soils that this crop can be planted on
            DisplayState.basic(display), // the block that is displayed while growing
            [
                DropItem.item(drop, chance) // item (use Item.of to include stack size), chance
            ],
            growthTick, // how many ticks this takes to grow
            cropYeild // optional, yield, chance for the crop to drop
        );

    }

    function AddSoil(soil, soilDisplay, growthModifier, yieldModifier) {
        event.recipes.botanypots.soil(
            soil, // the item that this soil is attached to
            DisplayState.basic(soilDisplay), // the block that is displayed while growing
            growthModifier, // optional, growth modifier, example: 0.5 means all crops will grow an additional 50% faster
            yieldModifier // optional, yield modifier, example: 0.5 means that all crops have a additional 50% chance to drop a crop
        );

    }


    AddSoil("mysticalagradditions:insanium_farmland", "mysticalagradditions:insanium_farmland", 3.5, 1.0)

    BotanyPot("silentgear:netherwood_sapling", "mysticalagradditions:insanium_farmland", "silentgear:netherwood_sapling", "silentgear:nether_banana", 1, 100, 1)

    BotanyPot("integrateddynamics:menril_sapling", "mysticalagradditions:insanium_farmland", "integrateddynamics:menril_sapling", "integrateddynamics:menril_log", 1, 80, 1)

    BotanyPot("minecraft:mangrove_propagule", "mysticalagradditions:insanium_farmland", "minecraft:mangrove_propagule", "minecraft:mangrove_log", 1, 80, 1)

    BotanyPot("minecraft:poppy", "mysticalagradditions:insanium_farmland", "minecraft:poppy", "minecraft:poppy", 1, 160, 2)
})

/*     Recipe.custom(
        {
            "type": "botanypots:block_derived_crop",
            "block": 'evilcraft:undead_sapling',
            "grow_time": 400,
            "drops": [
                {
                    "type": "botanypots:loot_table",
                    "table_id": "evilcraft:blocks/undead_log"
                }
            ]
        }
 
    )
 
    Recipe.custom(
        {
            "type": "botanypots:block_derived_crop",
            "block": "silentgear:netherwood_sapling",
            "grow_time": 400,
 
        }
 
    ) */