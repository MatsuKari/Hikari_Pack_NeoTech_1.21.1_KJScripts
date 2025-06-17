ServerEvents.recipes(Recipe => {
function Centrifuge(bee_type, output, output_min, output_max, output2, chance, ID) {
Recipe.custom
({
"type": "productivebees:centrifuge",
"ingredient": 
{
  "type": "productivebees:component",
  "components": 
  {
    "productivebees:bee_type": bee_type
  },
  "items": "productivebees:configurable_honeycomb"
},
"outputs": 
[
  {
    "item": 
    {
    "item": output
    },
    "min": output_min,
    "max": output_max,
    "chance": chance //0 até 1
  },
  {
    "item": 
    {
      "item": output2
    }
  }
]
}).id(ID)
}

Centrifuge("productivebees:draconic","productivebees:draconic_dust",9,9,"productivebees:wax",1, "productivebees:centrifuge/honeycomb_draconic")

Centrifuge("productivebees:emerald", "emerald", 7, 7, "productivebees:wax",1, "productivebees:centrifuge/gems/honeycomb_emerald")

Centrifuge("productivebees:redstone", "redstone", 12, 12, "productivebees:wax",1, "productivebees:/centrifuge/dusts/honeycomb_redstone_block")

Centrifuge("productivebees:iron", "raw_iron", 5, 5 , "productivebees:wax", 1, "productivebees:centrifuge/raw_materials/honeycomb_iron")

Centrifuge("productivebees:gold", "raw_gold", 5, 5, "productivebees:wax", 1, "productivebees:centrifuge/raw_materials/honeycomb_gold")

Centrifuge("productivebees:lapis", "lapis_lazuli", 12, 12, "productivebees:wax", 1, "productivebees:centrifuge/gems/honeycomb_lapis")

Centrifuge("productivebees:ender", "ender_pearl", 4 , 4, "productivebees:wax", 1 , "productivebees:centrifuge/integrateddynamics/honeycomb_ender_liquid_chorus")

Centrifuge("productivebees:crystalline", "quartz", 4, 4, "productivebees:wax", 1, "productivebees:centrifuge/gems/honeycomb_quartz")

Centrifuge("productivebees:frosty", "ice", 16, 16, "snowball", 1, "productivebees:centrifuge/honeycomb_frosty")

Centrifuge("productivebees:uraninite", "powah:uraninite_raw", 4, 4, "productivebees:wax", 1, "productivebees:centrifuge/powah/honeycomb_uraninite")

Centrifuge("productivebees:glowing", "glowstone_dust", 5, 5, "productivebees:wax", 1, "productivebees:centrifuge/dusts/honeycomb_glowing")

Centrifuge("productivebees:entro", "extendedae:entro_crystal", 4, 4, "productivebees:wax", 1, "productivebees:centrifuge/ae2/honeycomb_entro")

Centrifuge("productivebees:osmium", "mekanism:raw_osmium", 3 , 3 , "productivebees:wax", 1, "productivebees:centrifuge/raw_materials/honeycomb_osmium" )

Centrifuge("productivebees:sulfur", "mekanism:dust_sulfur", 4, 4, "productivebees:wax" , 1, "productivebees:centrifuge/dusts/honeycomb_sulfur")

Centrifuge("productivebees:fluorite", "mekanism:fluorite_gem", 5, 5, "productivebees:wax", 1, "productivebees:centrifuge/gems/honeycomb_fluorite")
})

//ferro, ouro, lapis, ender