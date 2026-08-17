ServerEvents.recipes(Recipe => {
    function Smelting(input, output_count, output, XP, cooking_Time) {
        Recipe.custom({
            "type": "minecraft:smelting",
            "ingredient": { "item": input },
            "result":
            {
                "count": output_count,
                "id": output,
            },
            "cookingtime": cooking_Time,
            "experience": XP
        })
    }

})

/*         Recipe.smelting
        (
            input, output
        ).xp(XP).cookingTime(cooking_Time) */