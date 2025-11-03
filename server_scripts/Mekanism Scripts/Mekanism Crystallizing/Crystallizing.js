ServerEvents.recipes(Recipe => {
    function Crystallizing(chemical_amount, chemical, output_count, output) {
        Recipe.custom
            ({
                "type": "mekanism:crystallizing",
                "input": {
                    "amount": chemical_amount,
                    "chemical": chemical
                },
                "output": {
                    "count": output_count,
                    "id": output
                }
            })
    }

    Crystallizing(100, "mekanism:water_vapor", 1, "minecraft:ice")

})