
ServerEvents.recipes(Recipe => {
    function Dissoluting(item1, item2, item3, item4, item5, item6, item7, item8, fluidAmount, fluidInput, output, output_count, pTime) {
        Recipe.custom(
            {
                "type": "industrialforegoing:dissolution_chamber",
                "input": [
                    {
                        "item": item1
                    },
                    {
                        "item": item2
                    },
                    {
                        "item": item3
                    },
                    {
                        "item": item4
                    },
                    {
                        "item": item5
                    },
                    {
                        "item": item6
                    },
                    {
                        "item": item7
                    },
                    {
                        "item": item8
                    }
                ],
                "inputFluid": {
                    "amount": fluidAmount,
                    "fluid": fluidInput
                },
                "output": {
                    "count": output_count,
                    "id": output
                },
                "processingTime": pTime
            })
    }

    Dissoluting("mekanism:pellet_antimatter", "mekanism:pellet_antimatter", "mekanism:pellet_antimatter", "mekanism:pellet_antimatter", "mekanism:pellet_antimatter", "mekanism:pellet_antimatter", "mekanism:pellet_antimatter", "ae2:singularity", 500, "mekanism:brine", "industrialforegoing:infinity_drill", 1, 20)
})