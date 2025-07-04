ServerEvents.recipes(Recipe => {
  function Alloying(amount1, fluid1, amount2, fluid2, amount3, fluid3, amount4, fluid4, amount5, output, speed, ID) {
    Recipe.custom({
      "type": "productivemetalworks:fluid_alloying",
      "fluids":
        [
          {
            "amount": amount1,
            "tag": fluid1
          },
          {
            "amount": amount2,
            "tag": fluid2
          },
          {
            "amount": amount3,
            "tag": fluid3
          },
          {
            "amount": amount4,
            "tag": fluid4
          }
        ],
      "result": {
        "amount": amount5,
        "id": output
      },
      "speed": speed

    }).id(ID)

  }

  function Alloying2(amount1, fluid1, amount2, fluid2, amount3, fluid3, amount5, output, speed, ID) {
    Recipe.custom({
      "type": "productivemetalworks:fluid_alloying",
      "fluids":
        [
          {
            "amount": amount1,
            "tag": fluid1
          },
          {
            "amount": amount2,
            "tag": fluid2
          },
          {
            "amount": amount3,
            "tag": fluid3
          }
        ],
      "result":
      {
        "amount": amount5,
        "id": output
      },
      "speed": speed
    }).id(ID)

  }

  Alloying(90, "c:molten_crimson_steel", 90, "c:molten_azure_electrum", 100, "c:molten_shulker_shell", 100, "c:molten_ancient_debris", 630, "sgearmetalworks:molten_tyrian_steel", 1, "productivemetalworks:alloying/molten_tyrian_steel") //"productivemetalworks:alloying/molten_tyrian_steel"

  Alloying2(810, "c:molten_crimson_iron", 200, "c:molten_blaze", 100, "c:molten_magma_cream", 450, "sgearmetalworks:molten_crimson_steel", 1, "productivemetalworks:alloying/molten_crimson_steel")

  Alloying2(360, "c:molten_azure_silver", 180, "c:molten_gold", 100, "c:molten_ender", 270, "sgearmetalworks:molten_azure_electrum", 1, "productivemetalworks:alloying/molten_azure_electrum")

})