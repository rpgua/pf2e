import { config } from "./config";
import fs from "node:fs";
import path from "path";
import PocketBase from 'pocketbase/cjs';
const pb = new PocketBase('http://127.0.0.1:8090');

const aonUrl = "https://2e.aonprd.com"

export async function uploadTargets() {
  for (const target of config.targets.sort()) {
    console.log({ target });
    const raw = JSON.parse(
      fs.readFileSync(path.join(__dirname, "raw", `${target}.json`), 'utf8')
    );

    // action

    if (target === 'action') {
      for (const entry of raw) {
        const action = entry._source
        if (!action.exclude_from_search) {
          try {
            console.log(action.name);
            await pb.collection('actions').create({
              actions: action.actions,
              actions_number: action.actions_number,
              category: action.category,
              frequency: action?.frequency || '',
              name: action.name,
              rarity: action.rarity,
              rarity_id: action.rarity_id,
              release_date: action.release_date,
              resistance: action.resistance,
              skill_mod: action.skill_mod,
              source: action.source.toString(),
              source_raw: action.source_raw.toString(),
              source_category: action.source_category,
              speed: action.speed,
              text: action.text,
              trait: action?.trait?.toString() || '',
              trait_group: action?.trait_group?.toString() || '',
              type: action.type,
              url: aonUrl + action.url,
              weakness: action.weakness
            },);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }

    // ancestry

    if (target === 'ancestry') {
      for (const entry of raw) {
        const ancestry = entry._source
        if (!ancestry.exclude_from_search) {
          try {
            console.log(ancestry.name);
            await pb.collection('ancestries').create({
              attribute: ancestry.attribute,
              attribute_flaw: ancestry.attribute_flaw,
              category: ancestry.category,
              hp: ancestry.hp,
              hp_raw: ancestry.hp_raw,
              // id: "ancestry-59",
              image: ancestry?.image?.toString(),
              language: ancestry?.language?.toString(),
              // language_markdown: ancestry.language_markdown,
              // legacy_id: "ancestry-1",
              markdown: ancestry.markdown,
              name: ancestry.name,
              navigation: JSON.stringify(ancestry?.navigation),
              rarity: ancestry.rarity,
              rarity_id: ancestry.rarity_id,
              release_date: ancestry.release_date,
              resistance: ancestry.resistance,
              // search_markdown: "",
              size: ancestry?.size?.toString(),
              size_id: ancestry?.size_id?.toString(),
              skill_mod: ancestry.skill_mod,
              source: ancestry?.source?.toString(),
              source_raw: ancestry?.source_raw?.toString(),
              source_category: ancestry.source_category,
              // source_markdown: "",
              speed: ancestry.speed,
              // speed_markdown: ancestry.speed_markdown,
              speed_raw: ancestry.speed_raw,
              // summary: "",
              // summary_markdown: "",
              text: ancestry.text,
              trait: ancestry?.trait?.toString(),
              trait_group: ancestry?.trait_group?.toString(),
              // trait_markdown: "",
              // trait_raw: [],
              type: ancestry.type,
              url: aonUrl+ancestry.url,
              vision: ancestry.vision,
              weakness: ancestry.weakness
            },);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }

    // archetype

    if (target === 'archetype') {
      for (const entry of raw) {
        const archetype = entry._source
        if (!archetype.exclude_from_search) {
          try {
            console.log(archetype.name);
            await pb.collection('archetypes').create({
              archetype: archetype.archetype,
              archetype_category: JSON.stringify(archetype.archetype_category),
              category: JSON.stringify(archetype.category),
              level: archetype.level,
              markdown: archetype.markdown,
              name: archetype.name,
              pfs: archetype.pfs,
              prerequisite: archetype.prerequisite,
              // prerequisite_markdown: archetype.prerequisite_markdown,
              rarity: archetype.rarity,
              rarity_id: archetype.rarity_id,
              release_date: archetype.release_date,
              resistance: archetype.resistance,
              // search_markdown: "",
              skill_mod: archetype.skill_mod,
              source: archetype?.source?.toString(),
              source_raw: archetype?.source?.toString(),
              source_category: archetype.source_category,
              // source_markdown: "",
              speed: archetype.speed,
              // summary: "",
              // summary_markdown: "",
              text: archetype.text,
              // trait_markdown: "",
              type: archetype.type,
              url: aonUrl+archetype.url,
              weakness: archetype.weakness
            },);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }

    // armor

    if (target === 'armor') {
      for (const entry of raw) {
        const armor = entry._source
        if (!armor.exclude_from_search) {
          try {
            console.log(armor.name);
            await pb.collection('armors').create({
              ac: armor.ac,
              armor_category: armor.armor_category,
              armor_group: armor.armor_group,
              // armor_group_markdown: armor.armor_group_markdown,
              bulk: armor.bulk,
              bulk_raw: armor.bulk_raw,
              category: armor.category,
              check_penalty: armor.check_penalty,
              dex_cap: armor.dex_cap,
              // id: armor.id,
              item_category: armor.item_category,
              item_subcategory: armor.item_subcategory,
              level: armor.level,
              markdown: armor.markdown,
              name: armor.name,
              pfs: armor.pfs,
              price: armor.price,
              price_raw: armor.price_raw,
              rarity: armor.rarity,
              rarity_id: armor.rarity_id,
              release_date: armor.release_date,
              resistance: armor.resistance,
              skill_mod: armor.skill_mod,
              source: armor.source?.toString(),
              source_raw: armor.source_raw?.toString(),
              source_category: armor.source_category,
              speed: armor.speed,
              speed_penalty: armor.speed_penalty,
              strength: armor.strength,
              // Removed commented out summary and summary_markdown properties
              text: armor.text,
              trait: armor.trait,
              trait_group: armor.trait_group,
              type: armor.type,
              url: aonUrl + armor.url,
              weakness: armor.weakness,
            },);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }

    // article

    if (target === 'article') {
      for (const entry of raw) {
        const article = entry._source
        if (!article.exclude_from_search) {
          try {
            console.log(article.name);
            await pb.collection('articles').create({
              category: article.category,
              markdown: article.markdown,
              name: article.name,
              rarity: article.rarity,
              rarity_id: article.rarity_id,
              release_date: article.release_date,
              resistance: article.resistance,
              skill_mod: article.skill_mod,
              source: article.source?.toString(),
              source_raw: article.source_raw?.toString(),
              source_category: article.source_category,
              source_group: article.source_group,
              speed: article.speed,
              text: article.text,
              type: article.type,
              url: aonUrl + article.url,
              weakness: article.weakness,
            },);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }

    // background

    if (target === 'background') {
      for (const entry of raw) {
        const background = entry._source
        if (!background.exclude_from_search) {
          try {
            console.log(background.name);
            await pb.collection('backgrounds').create({
              attribute: JSON.stringify(background.attribute),
              category: background.category,
              // exclude_from_search: background.exclude_from_search,
              feat: JSON.stringify(background.feat),
              is_general_background: background.is_general_background,
              markdown: background.markdown,
              name: background.name,
              pfs: background.pfs,
              rarity: background.rarity,
              rarity_id: background.rarity_id,
              release_date: background.release_date,
              resistance: background.resistance,
              // Removed commented out search_markdown property
              skill: background.skill,
              skill_mod: background.skill_mod,
              source: background.source?.toString(),
              source_raw: background.source_raw?.toString(),
              source_category: background.source_category,
              speed: background.speed,
              text: background.text,
              trait: JSON.stringify(background.trait),
              trait_group: JSON.stringify(background.trait_group),
              // trait_markdown: background.trait_markdown,
              type: background.type,
              url: aonUrl + background.url,
              weakness: background.weakness,
            },);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }

    // class

    if (target === 'class') {
      for (const entry of raw) {
        const chClass = entry._source
        if (!chClass.exclude_from_search) {
          try {
            console.log(chClass.name);
            await pb.collection('classes').create({
              attribute: JSON.stringify(chClass.attribute),
              attack_proficiency: JSON.stringify(chClass.attack_proficiency),
              category: chClass.category,
              // exclude_from_search: chClass.exclude_from_search,
              defense_proficiency: JSON.stringify(chClass.defense_proficiency),
              fortitude_proficiency: chClass.fortitude_proficiency,
              hp: parseInt(chClass.hp),
              icon_image: chClass.icon_image,
              image: JSON.stringify(chClass.image),
              markdown: chClass.markdown,
              name: chClass.name,
              navigation: JSON.stringify(chClass.navigation),
              perception_proficiency: chClass.perception_proficiency,
              pfs: chClass.pfs,
              rarity: chClass.rarity,
              rarity_id: chClass.rarity_id,
              reflex_proficiency: chClass.reflex_proficiency,
              release_date: chClass.release_date,
              resistance: chClass.resistance,
              skill_mod: chClass.skill_mod,
              skill_proficiency: chClass.skill_proficiency,
              source: chClass.source?.toString(),
              source_raw: chClass.source_raw?.toString(),
              source_category: chClass.source_category,
              speed: chClass.speed,
              text: chClass.text,
              type: chClass.type,
              url: aonUrl + chClass.url,
              weakness: chClass.weakness,
              will_proficiency: chClass.will_proficiency,
            },);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }

    // creature

    if (target === 'creature') {
      for (const entry of raw) {
        const creature = entry._source
        if (!creature.exclude_from_search) {
          try {
            console.log(creature.name);
            await pb.collection('creatures').create({
              ac: creature.ac,
              alignment: creature.alignment,
              category: creature.category,
              charisma: creature.charisma,
              constitution: creature.constitution,
              creature_ability: JSON.stringify(creature.creature_ability),
              creature_family: creature.creature_family,
              // creatureFamilyMarkdown: "",
              dexterity: creature.dexterity,
              fortitude_save: creature.fortitude_save,
              hp: creature.hp,
              hpRaw: creature.hpRaw,
              // id: "creature-925",
              image: JSON.stringify(creature.image),
              intelligence: creature.intelligence,
              immunity: JSON.stringify(creature.immunity),
              language: JSON.stringify(creature.language),
              // languageMarkdown: "",
              level: creature.level,
              markdown: creature.markdown,
              name: creature.name,
              npc: creature.npc,
              perception: creature.perception,
              pfs: creature.pfs,
              rarity: creature.rarity,
              rarity_id: creature.rarity_id,
              reflex_save: creature.reflex_save,
              release_date: creature.release_date,
              resistance: creature.resistance,
              // searchMarkdown: "",
              sense: creature.sense,
              size: JSON.stringify(creature.size),
              sizeId: JSON.stringify(creature.sizeId),
              skill: JSON.stringify(creature.skill),
              // skillMarkdown: "",
              skillMod: creature.skill_mod,
              source: creature.source.toString(),
              source_raw: creature.source_raw.toString(),
              source_category: creature.source_category,
              // sourceMarkdown: "",
              speed: creature.speed,
              // speedMarkdown: "",
              speed_raw: creature.speed_raw,
              spell: JSON.stringify(creature.spell),
              // spellMarkdown: "",
              stealth:creature.stealth,
              strength: creature.strength,
              strongest_save: JSON.stringify(creature.strongest_save),
              // summary: "",
              // summaryMarkdown: "",
              text: creature.text,
              trait: JSON.stringify(creature.trait),
              trait_group: JSON.stringify(creature.trait_group),
              // traitMarkdown: "",
              // traitRaw: [],
              type: creature.type,
              url: aonUrl + creature.url,
              weakest_save: JSON.stringify(creature.weakest_save),
              weakness: creature.weakness,
              will_save: creature.will_save,
              wisdom: creature.wisdom,
            },);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }

    // creature-family

    if (target === 'creature-family') {
      for (const entry of raw) {
        const creatureFamily = entry._source
        if (!creatureFamily.exclude_from_search) {
          try {
            console.log(creatureFamily.name);
            await pb.collection('creature_families').create({
              category: creatureFamily.category,
              creature_family: creatureFamily.creature_family,
              // creature_family_markdown: ""
              image: JSON.stringify(creatureFamily.image),
              markdown: creatureFamily.markdown,
              name: creatureFamily.name,
              rarity: creatureFamily.rarity,
              rarity_id: creatureFamily.rarity_id,
              release_date: creatureFamily.release_date,
              resistance: creatureFamily.resistance,
              // search_markdown: "",
              skill_mod: creatureFamily.skill_mod,
              source: creatureFamily.source.toString(),
              source_raw: creatureFamily.source.toString(),
              source_category: creatureFamily.source_category,
              // source_group: creatureFamily.source_group,
              // source_markdown: "",
              speed: creatureFamily.speed,
              // summary: "",
              // summary_markdown: "",
              text: creatureFamily.text,
              type: creatureFamily.type,
              url: aonUrl+creatureFamily.url,
              weakness: creatureFamily.weakness
            },);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }

    // deity

    if (target === 'deity') {
      for (const entry of raw) {
        const deity = entry._source
        if (!deity.exclude_from_search) {
          try {
            console.log(deity.name);
            await pb.collection('deities').create({
              attribute: JSON.stringify(deity.attribute),
              anathema: deity.anathema,
              category: deity.category,
              cleric_spell: JSON.stringify(deity.cleric_spell),
              deity: JSON.stringify(deity.deity),
              // deity_markdown: "",
              deity_category: deity.deity_category,
              // deity_category_markdown: "",
              // deity_category_order: "",
              divine_font: JSON.stringify(deity.divine_font),
              // divine_font_markdown: "",
              domain: JSON.stringify(deity.domain),
              // domain_markdown: "",
              domain_alternate: JSON.stringify(deity.domain_alternate),
              // domain_alternate_markdown: "",
              domain_primary: JSON.stringify(deity.domain_primary),
              // domain_primary_markdown: "",
              edict: deity.edict,
              // exclude_from_search: false,
              favored_weapon: JSON.stringify(deity.favored_weapon),
              // favored_weapon_markdown: "",
              icon_image: deity.icon_image,
              // id: "deity-277",
              image: JSON.stringify(deity.image),
              // legacy_id: "",
              markdown: deity.markdown,
              name: deity.name,
              pantheon: JSON.stringify(deity.pantheon),
              // pantheon_markdown: "",
              pfs: deity.pfs,
              rarity: deity.rarity,
              rarity_id: deity.rarity_id,
              release_date: deity.release_date,
              resistance: deity.resistance,
              sanctification: JSON.stringify(deity.sanctification),
              sanctification_raw: deity.sanctification_raw,
              // search_markdown: "",
              skill: JSON.stringify(deity.skill),
              // skill_markdown: "",
              skill_mod: deity.skill_mod,
              source: deity.source,
              source_raw: deity.source_raw,
              source_category: deity.source_category,
              // source_markdown: "",
              speed: deity.speed,
              // summary: "",
              // summary_markdown: "",
              text: deity.text,
              type: deity.type,
              url: aonUrl + deity.url,
              weakness: {}
            },);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }

    // // equipment

    // if (target === 'equipment') {
    //   for (const entry of raw) {
    //     const equipment = entry._source
    //     if (!equipment.exclude_from_search) {
    //       try {
    //         console.log(equipment.name);
    //         await pb.collection('equipments').create({
    //           attribute: equipment.attribute,
    //         },);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
    // }

    // // feat

    // if (target === 'feat') {
    //   for (const entry of raw) {
    //     const feat = entry._source
    //     if (!feat.exclude_from_search) {
    //       try {
    //         console.log(feat.name);
    //         await pb.collection('feats').create({
    //           attribute: feat.attribute,
    //         },);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
    // }

    // // hazard

    // if (target === 'hazard') {
    //   for (const entry of raw) {
    //     const hazard = entry._source
    //     if (!hazard.exclude_from_search) {
    //       try {
    //         console.log(hazard.name);
    //         await pb.collection('hazards').create({
    //           attribute: hazard.attribute,
    //         },);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
    // }

    // // rules

    // if (target === 'rules') {
    //   for (const entry of raw) {
    //     const rules = entry._source
    //     if (!rules.exclude_from_search) {
    //       try {
    //         console.log(rules.name);
    //         await pb.collection('rules').create({
    //           attribute: rules.attribute,
    //         },);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
    // }

    // // shield

    // if (target === 'shield') {
    //   for (const entry of raw) {
    //     const shield = entry._source
    //     if (!shield.exclude_from_search) {
    //       try {
    //         console.log(shield.name);
    //         await pb.collection('shields').create({
    //           attribute: shield.attribute,
    //         },);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
    // }

    // // skill

    // if (target === 'skill') {
    //   for (const entry of raw) {
    //     const skill = entry._source
    //     if (!skill.exclude_from_search) {
    //       try {
    //         console.log(skill.name);
    //         await pb.collection('skills').create({
    //           attribute: skill.attribute,
    //         },);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
    // }

    // // source

    // if (target === 'source') {
    //   for (const entry of raw) {
    //     const source = entry._source
    //     if (!source.exclude_from_search) {
    //       try {
    //         console.log(source.name);
    //         await pb.collection('sources').create({
    //           attribute: source.attribute,
    //         },);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
    // }

    // // spell

    // if (target === 'spell') {
    //   for (const entry of raw) {
    //     const spell = entry._source
    //     if (!spell.exclude_from_search) {
    //       try {
    //         console.log(spell.name);
    //         await pb.collection('spells').create({
    //           attribute: spell.attribute,
    //         },);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
    // }

    // // trait

    // if (target === 'trait') {
    //   for (const entry of raw) {
    //     const trait = entry._source
    //     if (!trait.exclude_from_search) {
    //       try {
    //         console.log(trait.name);
    //         await pb.collection('traits').create({
    //           attribute: trait.attribute,
    //         },);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
    // }

    // // weapon

    // if (target === 'weapon') {
    //   for (const entry of raw) {
    //     const weapon = entry._source
    //     if (!weapon.exclude_from_search) {
    //       try {
    //         console.log(weapon.name);
    //         await pb.collection('weapons').create({
    //           attribute: weapon.attribute,
    //         },);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     }
    //   }
    // }

    // weapon-group

    if (target === 'weapon-group') {
      for (const entry of raw) {
        const wg = entry._source
        if (!wg.exclude_from_search) {
          try {
            console.log(wg.name);
            await pb.collection('weapon_groups').create({
              name: wg.name,
              rarity: wg.rarity,
              rarity_id: wg.rarity_id,
              release_date: wg.release_date,
              resistance: wg.resistance,
              skill_mod: wg.skill_mod,
              source: wg.source.toString(),
              source_raw: wg.source_raw.toString(),
              speed: wg.speed,
              text: `<div>${wg.text}</div>`,
              type: wg.type,
              url: aonUrl + wg.url,
              weakness: wg.weakness,
            },);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }
  }
}

async function run() {

  await deleteAllRows('actions')
  await deleteAllRows('weapon_groups')
  await deleteAllRows('ancestries')
  await deleteAllRows('archetypes')
  await deleteAllRows('armors')
  await deleteAllRows('articles')
  await deleteAllRows('classes')
  await deleteAllRows('creatures')
  await deleteAllRows('creature_families')
  await deleteAllRows('deities')
  await uploadTargets();

}

run().catch(console.log);

async function deleteAllRows(collection: any) {
  const records = await pb.collection(collection).getFullList();

  for (const record of records) {
    await pb.collection(collection).delete(record.id);
  }

  console.log("All rows deleted from", collection);
}

