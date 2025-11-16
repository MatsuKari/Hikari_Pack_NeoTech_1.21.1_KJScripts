ServerEvents.recipes(Recipe => {
    function SoulExtraction(item_input, soul_type, soul_amount) {
        Recipe.custom
            ({
                "type": "mysticalagriculture:soul_extraction",
                "input": {
                    "item": item_input
                },
                "result": {
                    "type": soul_type,
                    "souls": soul_amount
                }
            })

    }

    SoulExtraction("forbidden_arcanus:tentacle", "mysticalagriculture:squid", 1.50)

    SoulExtraction("minecraft:tropical_fish", "mysticalagriculture:fish", 1.60)

    SoulExtraction("minecraft:chicken", "mysticalagriculture:chicken", 2)
})