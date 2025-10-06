ServerEvents.recipes(Recipe => {

    Recipe.custom(
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

    )

})