ServerEvents.recipes(Recipe => {
    function Smelting(input, output_count, output, XP, cooking_Time) {
        Recipe.custom({
            "type": "minecraft:smelting",
            "ingredient": { "item": input },
            "result":
            {
                "count": output_count,
                "id": output
            },
            "cookingtime": cooking_Time,
            "experience": XP
        })
    }
    /* 
        Smelting("potionsmaster:allthemodium_oresight_powder", 1, "potionsmaster:calcinated_allthemodium_oresight_powder", 0.5, 60)
    
        Smelting("potionsmaster:unobtainium_oresight_powder", 1, "potionsmaster:calcinated_unobtainium_oresight_powder", 0.5, 60) */
})

/*         Recipe.smelting
        (
            input, output
        ).xp(XP).cookingTime(cooking_Time) */