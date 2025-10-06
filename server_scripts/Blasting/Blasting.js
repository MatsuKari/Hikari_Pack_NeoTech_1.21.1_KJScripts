ServerEvents.recipes(Recipe => {
    function Blasting(input, output_count, output, XP, cooking_Time) {
        Recipe.custom(
            {
                "type": "minecraft:blasting",
                "category": "misc",
                "cookingtime": cooking_Time,
                "experience": XP,
                "ingredient":
                {
                    "tag": input
                },
                "result":
                {
                    "count": output_count,
                    "id": output
                }
            })
    }

    Blasting("c:sands", 1, "minecraft:glass", 0.5, 60)

    Blasting("chipped:clay", 1, "minecraft:terracotta", 0.5, 40)

    Blasting("c:clay", 1, "brick", 0.5, 40)

    Blasting("c:cobblestones", 1, "minecraft:stone", 0.5, 30)

    Blasting("c:stones", 1, "minecraft:smooth_stone", 0.5, 30)
})