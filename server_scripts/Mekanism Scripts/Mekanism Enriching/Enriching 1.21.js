ServerEvents.recipes(Recipe => 
{
  function Enriching(item_input, amount_input,count_output, item_output) 
  {
    Recipe.custom
    ({
    "type": "mekanism:enriching",
    "input":
    {
     "count": amount_input,
     "tag": item_input
    },
    "output": 
    {
     "count": count_output,
     "id": item_output
    }
    })
  }

Enriching("c:raw_materials/copper", 1 , 3, "mekanism:dust_copper")

//Receita de Raw Gold para Gold Dust na Enrichment Chamber
Enriching("c:raw_materials/gold",1, 3, "mekanism:dust_gold")

//Receita de Raw Iron para Iron Dust na Enrichment Chamber 
Enriching("c:raw_materials/iron",1, 3, "mekanism:dust_iron")

//Receita de Raw Silver do Occultism para Silver Dust do Occultism na Enrichment Chamber
Enriching("c:raw_materials/silver",1, 3, "occultism:silver_dust")

//Receita Raw Nickel para Nickel Dust na Enrichment Chamber
Enriching("c:raw_materials/nickel",1, 3, "alltheores:nickel_dust")

//Receita Raw Platinum para Platinum Dust na Enrichment Chamber
Enriching("c:raw_materials/platinum",1, 3, "alltheores:platinum_dust")

//Receita Raw Aluminum para Aluminum Dust na Enrichment Chamber
Enriching("c:raw_materials/aluminum",1, 3, "alltheores:aluminum_dust")

//Receita Raw Osmium para Osmium Dust do Mekanism na Enrichment Chamber
Enriching("c:raw_materials/osmium",1, 3, "mekanism:dust_osmium")

//Receita Raw Zinc para Zinc Dust na Enrichment Chamber
Enriching("c:raw_materials/zinc",1, 3, "alltheores:zinc_dust")

//Receita Tin Raw para Tin Dust na Enrichment Chamber
Enriching("c:raw_materials/tin",1, 3, "mekanism:dust_tin")

//Receita Raw Allthemodium para Allthemodium Dust na Enrichment Chamber
Enriching("c:raw_materials/allthemodium",1, 3, "allthemodium:allthemodium_dust")

//Receita Raw Vibranium para Vibranium Dust na Enrichment Chamber
Enriching("c:raw_materials/vibranium",1, 3, "allthemodium:vibranium_dust")

//Receita Raw Unobtanium para Unobtanium Dust na Enrichment Chamber
Enriching("c:raw_materials/unobtainium",1, 3, "allthemodium:unobtainium_dust")

//Receita Raw Uranium para Uranium Dust na Enrichment Chamber
Enriching("c:raw_materials/uranium",1, 3, "mekanism:dust_uranium")

//Receita Raw Lead para Lead Dust na Enrichment Chamber
Enriching("c:raw_materials/lead",1, 3, "mekanism:dust_lead")

Enriching("c:raw_materials/crimson_iron",1, 3, "silentgear:crimson_iron_dust")

Enriching("c:raw_materials/azure_silver", 1, 3, "silentgear:azure_silver_dust")

Enriching("c:raw_materials/ferricore", 1, 3, "justdirethings:ferricore_ingot")

Enriching("c:raw_materials/blazegold", 1 , 3, "justdirethings:blazegold_ingot")

Enriching("c:raw_materials/eclipsealloy", 1, 3, "justdirethings:eclipsealloy_ingot")

Enriching("c:ores/inferium", 1, 6, "mysticalagriculture:inferium_essence")

Enriching("c:raw_materials/uraninite", 1, 2, "powah:uraninite")
})
