#data merge entity @s {Gossips:[]}
#data modify entity @s Gossips prepend value {Type:"major_positive",Value:20,Target:[I;1,1,1,1]}
#data modify entity @s Gossips[0].Target set from entity @p UUID
tag @s add cure1
data merge entity @s {CustomName:'{"text":"1","color":"green"}'}
