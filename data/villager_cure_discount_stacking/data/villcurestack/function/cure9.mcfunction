execute at @s run summon villager ~ ~ ~ {Tags:["REPLACEMENT"]}
data modify entity @e[type=villager,limit=1,sort=nearest,tag=REPLACEMENT] VillagerData merge from entity @s VillagerData
data modify entity @e[type=villager,limit=1,sort=nearest,tag=REPLACEMENT] Offers merge from entity @s Offers
data modify entity @e[type=villager,limit=1,sort=nearest,tag=REPLACEMENT] Brain merge from entity @s Brain
data modify entity @e[type=villager,limit=1,sort=nearest,tag=REPLACEMENT] Gossips prepend value {Type:"major_positive",Value:180,Target:[I;8,8,1,1]}
execute at @e[type=villager,limit=1,sort=nearest,tag=REPLACEMENT] run data modify entity @e[type=villager,limit=1,sort=nearest,tag=REPLACEMENT] Gossips[0].Target set from entity @p UUID
data merge entity @e[type=villager,limit=1,sort=nearest,tag=REPLACEMENT] {CustomName:'{"text":"9","color":"green"}'}
tag @e[type=villager,limit=1,sort=nearest,tag=REPLACEMENT] add cure1
execute as @e[type=villager,limit=1,sort=nearest,tag=REPLACEMENT] at @s run ride @s mount @e[type=minecart,sort=nearest,limit=1,distance=..1]
tag @e[type=villager,limit=1,sort=nearest,tag=REPLACEMENT] remove REPLACEMENT
kill @s

