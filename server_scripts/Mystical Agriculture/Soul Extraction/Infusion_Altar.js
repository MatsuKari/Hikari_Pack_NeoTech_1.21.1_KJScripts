ServerEvents.recipes(Recipe => {
    function Infusion_Altar(output, main, input1, input2, input3, input4, input5, input6, input7, input8) {
        Recipe.custom
            ({
                "type": "mysticalagriculture:infusion",
                "input": {
                    "item": main
                },
                "ingredients": [
                    {
                        "tag": input1
                    },
                    {
                        "tag": input2
                    },
                    {
                        "item": input3
                    },
                    {
                        "item": input4
                    },
                    {
                        "item": input5
                    },
                    {
                        "item": input6
                    },
                    {
                        "item": input7
                    },
                    {
                        "item": input8
                    }
                ],
                "result": {
                    "id": output
                }

            })

    }

    Infusion_Altar("minecraft:sniffer_egg", "minecraft:dragon_egg", "minecraft:decorated_pot_sherds", "minecraft:decorated_pot_sherds", "minecraft:egg", "minecraft:egg", "minecraft:moss_block", "minecraft:moss_block", "minecraft:moss_block", "minecraft:moss_block")

})