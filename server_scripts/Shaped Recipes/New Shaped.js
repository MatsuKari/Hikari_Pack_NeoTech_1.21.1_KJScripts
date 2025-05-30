ServerEvents.recipes(event => {
event.shaped("allthemodium:allthemodium_pickaxe", ['PRP', ' R ', ' R '], 
{
 R: "allthemodium:allthemodium_rod",
 P: "allthemodium:allthemodium_plate"
})

event.shaped("quarryplus:repeat_tick_module", ['APA', 'PTP', 'APM'],
{
 A: "minecraft:amethyst_shard",
 P: "minecraft:prismarine_shard",
 T: 'minecraft:potion[potion_contents={potion:"minecraft:water"}]',
 M: "quarryplus:marker"
})

event.shaped("allthemodium:allthemodium_axe", ['AA ', 'AR ', ' R '],
{
    A: "allthemodium:allthemodium_plate",
    R: "allthemodium:allthemodium_rod"
})

event.shaped("allthemodium:allthemodium_hoe", ['AA ', ' R ', ' R '],
{
    A: "allthemodium:allthemodium_plate",
    R: "allthemodium:allthemodium_rod"
})

event.shaped("3x reliquary:fertile_lily_pad", ['EEE', 'L  ', '   '],
{
    E: "reliquary:fertile_essence",
    L: "minecraft:lily_pad"
})

event.shaped("3x reliquary:fertile_essence", ['RGD', 'P  ', '   '], 
{
    R: "reliquary:rib_bone",
    G: "reliquary:catalyzing_gland",
    D: "minecraft:green_dye",
    P: "reliquary:slime_pearl"
})

event.shaped("trident", ['III', ' P ', ' P '],
{
    I: "iron_ingot",
    P: "prismarine_shard"
})

event.shaped("kubejs:lava_cell", [' B ', 'LCL', '   '],
{
    B: "powah:blazing_crystal_block",
    L: 'minecraft:lava_bucket',
    C: "ae2:cell_component_256k"
})

event.shaped("megacells:radioactive_chemical_cell", ['GSG', 'SCS', 'HUH'],
{
    G:"mekanismgenerators:reactor_glass",
    S:"ae2:sky_dust",
    C:"megacells:radioactive_cell_component",
    H:"mekanism:hdpe_sheet",
    U:"mekanism:alloy_atomic"
})
event.shaped("allthemodium:alloy_axe", ['UAV', 'UAV', ' A '], 
{
    U:"allthemodium:unobtainium_plate",
    A:"allthemodium:allthemodium_rod",
    V:"allthemodium:vibranium_plate"
})

event.shaped("4x mekanism:ingot_bronze", ['CCC', 'T  ', '   '],
{
    C: "minecraft:copper_ingot",
    T: 'alltheores:zinc_ingot'
})

event.shaped("4x mekanism:ingot_bronze", ['CCC', 'T  ', '   '],
    {
        C: "minecraft:copper_ingot",
        T: 'alltheores:aluminum_ingot'
    })
})