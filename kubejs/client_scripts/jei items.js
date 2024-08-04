JEIEvents.hideItems(event =>{
   const colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink'];
   colors.forEach(color => {
    //Removing Colored blocks From JEI
    event.hide(`minecraft:${color}_wool`);
});
    //Removing Flying Effect From JEI
   const flyingeffect = [
   Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:flying"}'), 
   Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:long_flying"}'),
   Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:extra_long_flying"}'), 
   Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:extra_long_flying"}'), 
   Item.of('minecraft:potion', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:potion', '{Potion:"apotheosis:extra_long_flying"}'),
   Item.of('minecraft:potion', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:splash_potion', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:splash_potion', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:splash_potion', '{Potion:"apotheosis:extra_long_flying"}'), 
   Item.of('minecraft:lingering_potion', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:lingering_potion', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:lingering_potion', '{Potion:"apotheosis:extra_long_flying"}'),
];
   flyingeffect.forEach(flyeffect =>{
   event.hide(flyeffect);
});
   //Removing Easy NPCS Itens From JEI 
   event.hide('@easy_npc');
   //Removing Operator Itens From JEI
  const OperatorsI = [
   'minecraft:command_block',
   'minecraft:chain_command_block',
   'minecraft:repeating_command_block', 
   'minecraft:jigsaw',
   'minecraft:structure_block',
   'minecraft:structure_void',
   'minecraft:barrier',
   'minecraft:debug_stick',
   'minecraft:light',
   'minecraft:command_block_minecart'
];
OperatorsI.forEach(OpI =>{
   event.hide(OpI);
});
//Hidding Rage Glove
event.hide('relics:rage_glove')
})