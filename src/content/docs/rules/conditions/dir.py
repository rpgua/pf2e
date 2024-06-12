
dirs = [
['Blinded','Player Core pg. 440','1111'],
['Broken','Player Core pg. 440','1111'],
['Clumsy','Player Core pg. 440','1111'],
['Concealed','Player Core pg. 440','1111'],
['Confused','Player Core pg. 440','1111'],
['Controlled','Player Core pg. 440','1111'],
['Dazzled','Player Core pg. 440','1111'],
['Deafened','Player Core pg. 440','1111'],
['Doomed','Player Core pg. 440','1111'],
['Drained','Player Core pg. 440','1111'],
['Dying','Player Core pg. 440','1111'],
['Encumbered','Player Core pg. 440','1111'],
['Enfeebled','Player Core pg. 440','1111'],
['Fascinated','Player Core pg. 440','1111'],
['Fatigued','Player Core pg. 440','1111'],
['Fleeing','Player Core pg. 440','1111'],
['Friendly','Player Core pg. 440','1111'],
['Frightened','Player Core pg. 440','1111'],
['Grabbed','Player Core pg. 440','1111'],
['Helpful','Player Core pg. 440','1111'],
['Hidden','Player Core pg. 440','1111'],
['Hostile','Player Core pg. 440','1111'],
['Immobilized','Player Core pg. 440','1111'],
['Indifferent','Player Core pg. 440','1111'],
['Invisible','Player Core pg. 440','1111'],
['Observed','Player Core pg. 440','1111'],
['Off-Guard','Player Core pg. 440','1111'],
['Paralyzed','Player Core pg. 440','1111'],
['Persistent Damage','Player Core pg. 440','1111'],
['Petrified','Player Core pg. 440','1111'],
['Prone','Player Core pg. 440','1111'],
['Quickened','Player Core pg. 440','1111'],
['Restrained','Player Core pg. 440','1111'],
['Sickened','Player Core pg. 440','1111'],
['Slowed','Player Core pg. 440','1111'],
['Stunned','Player Core pg. 440','1111'],
['Stupefied','Player Core pg. 440','1111'],
['Unconscious','Player Core pg. 440','1111'],
['Undetected','Player Core pg. 440','1111'],
['Unfriendly','Player Core pg. 440','1111'],
['Unnoticed','Player Core pg. 440','1111'],
['Wounded','Player Core pg. 440','1111']


]
index = 1
for i in dirs:
    index = index + 1
    with open(str(i[0]+'.mdx'),'w') as f:
        f.write(f'''---
title: Переклад {i[0]}
description: Condition - {i[0]} Умова - {i[0]}
sidebar:
    order: {index}
    badge:
        text: R
        variant: success
---
import Condition from '../../../../components/rules/conditions/Condition.astro'\n\n
''')
        f.write(
'<Condition title={"'+str(i[0])+'"} url={"https://2e.aonprd.com/Conditions.aspx?ID='+str(i[2])+'"}>\n\n**Source:** '+str(i[1])+'\n\nTEXT\n\n</Condition>'
    )

