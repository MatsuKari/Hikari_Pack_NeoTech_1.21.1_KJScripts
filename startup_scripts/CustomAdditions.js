// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
StartupEvents.registry('item', allthemods => {
    allthemods.create('silent_allthemodium_plate').displayName('Silent Allthemodium Plate').glow(true);
    allthemods.create('silent_vibranium_plate').displayName('Silent Vibranium Plate').glow(true);
    allthemods.create('silent_unobtainium_plate').displayName('Silent Unobtainium Plate').glow(true);

    allthemods.create('lava_cell', 'custom_infinity_cell')
        .texture('kubejs:item/lava_cell')
        .fluidType('minecraft:lava')
        .cellModel('kubejs:block/drive/lava_cell');
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.