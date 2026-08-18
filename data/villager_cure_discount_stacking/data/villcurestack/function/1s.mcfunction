schedule function villcurestack:1s 1s
#execute as @e[type=zombie_villager] run execute store result score @s ConversionTimer run data get entity @s ConversionTime

execute as @e[type=villager,tag=!cure1] if predicate villcurestack:cures run function villcurestack:decidediscount
