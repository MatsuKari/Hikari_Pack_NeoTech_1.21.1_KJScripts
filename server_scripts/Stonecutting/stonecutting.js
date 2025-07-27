ServerEvents.recipes(Recipe => {
    function Stonecutting(input, output_count, output) {
        Recipe.custom({
            "type": "minecraft:stonecutting",
            "ingredient": { "item": input },
            "result":
            {
                "count": output_count,
                "id": output
            },
        })
    }

    Stonecutting("minecraft:calcite", 1, "create:cut_calcite_bricks")
})