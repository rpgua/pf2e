topics = [
    "Making Choices",
    "The Pathfinder Baseline",
    "Rules Overview",
    "Checks",
    "Damage Rolls",
    "Immunity, Weakness, and Resistance",
    "Hit Points, Healing, and Dying",
    "Hero Points",
    "Actions",
    "Movement",
    "Effects",
    "Area",
    "Afflictions",
    "Perception and Detection",
    "Encounter Mode",
    "Exploration Mode",
    "Downtime Mode",
    "Conditions Appendix",
]

template = """---
title: {title}
description: {description}
sidebar:
    order: {order}
---

Welcome to the {title} page!
"""

for order, topic in enumerate(topics, start=1):
    filename = topic + ".md"
    with open(filename, "w") as file:
        file.write(template.format(title=topic, description=topic, order=order))
