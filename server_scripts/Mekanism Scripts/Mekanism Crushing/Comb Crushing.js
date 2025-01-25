/* ServerEvents.recipes(Receita => 
{
  function Crushing_Comb_Recipes(item_input, amount_input,count_output, item_output) 
  {
    Receita.custom
    ({
        "type": "mekanism:crushing",
        "input": 
        {
            "count": amount_input,
            "item": item_input
        },
        "output": 
        {
         "count": count_output,
         "id": item_output
        }
    })
  }

/* Crushing_Comb_Recipes({"type": "productivebees:component", "components": {"productivebees:bee_type": "productivebees:draconic"}, "items":"productivebees:configurable_honeycomb", "tag": "c:honeycombs"}, 1, 9, 
    "productivebees:draconic_dust") 

Crushing_Comb_Recipes(  "productivebees:configurable_honeycomb", {"productivebees:bee_type": "productivebees:draconic"}, 1, 9, 
  "productivebees:draconic_dust") 
  

}) */
 

/* ServerEvents.recipes(Receita => {
  function Crushing_Comb_Recipes(item_input, amount_input, count_output, item_output) {
  Receita.custom({
  "type": "mekanism:crushing",
  "input": 
  {
  "amount": amount_input,
  "ingredient": 
   {
    "item": item_input // Usa o item específico da Draconic Comb
   }
  },
    "output": 
    {
      "count": count_output,
      "item": item_output
    }
    });
  }

  // Chamada da função com a Draconic Comb como ingrediente
  Crushing_Comb_Recipes("productivebees:draconic_honeycomb", 1, 9, "productivebees:draconic_dust");
}); */

/* ServerEvents.recipes(Receita => {
  function Crushing_Comb_Recipes(item_input, count_output, item_output) {
      Receita.custom({
          "type": "mekanism:crushing",
          "input": {
              "ingredient": {
                  "item": item_input // Item específico para o Draconic Honeycomb
              }
          },
          "output": {
              "item_stack": {
                  "item": item_output,
                  "count": count_output // Quantidade de saída
              }
          }
      });
  }

  // Substitua o nome do item pelo correto, se necessário
  Crushing_Comb_Recipes("productivebees:draconic_honeycomb", 9, "productivebees:draconic_dust");
}) */

/* ServerEvents.recipes(Receita => {
  function Crushing_Comb_Recipes(item, component_input, count_output, item_output) {
      Receita.custom({
          "type": "mekanism:crushing",
          "input": {
              "ingredient": {
                  "id": item,
                  "components": component_input // Define o NBT para especificar a Draconic Honeycomb
              }
          },
          "output": 
          {
            "count": count_output,
            "id": item_output
          }
          })
        }

  // Chamada da função para a Draconic Comb com NBT
  Crushing_Comb_Recipes("productivebees:configurable_honeycomb", {"productivebees:bee_type": "productivebees:draconic"}, 9,
      "productivebees:draconic_dust"
  )
}) */