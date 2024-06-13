import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({

	site: 'https://rpgua.github.io',
	base: 'pf2e',
	integrations: [
		starlight({
			title: 'PF2e Українською',
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 6
			},
			social: {
				github: 'https://github.com/rpgua/pf2e',
				// discord: 'https://github.com/',
				telegram: 'https://t.me/+K0nrbUH7IowwZGEy',
				// youtube: 'https://github.com/'
			},
			sidebar: [{
				label: 'Правила',
				items: [{
					label: 'Player Core',
					badge: {
						text: 'WIP',
						variant: 'caution'
					},
					items: [{
						label: "🚀 Введення",
						badge: {
							text: 'WIP',
							variant: 'caution'
						},
						autogenerate: {
							directory: 'rules/player core/introduction'
						},
						collapsed: true
					}, {
						label: "👶 Походження та передісторії",
						badge: {
							text: 'WIP',
							variant: 'caution'
						},
						autogenerate: {
							directory: 'rules/player core/ancestries and backgrounds'
						},
						collapsed: true
					}, {
						label: "🧙 Класи",
						badge: {
							text: 'WIP',
							variant: 'caution'
						},
						items: [
							{
								label: 'Chapter intro',
								link: 'rules/player-core/classes/intro/',
								badge: { text: '1/2', variant: 'caution' },
							},
							{
								label: 'Reading Class Entries',
								link: 'rules/player-core/classes/Reading Class Entries/',
								badge: { text: '1/2', variant: 'caution' },
							},
							{
								label: 'Companion',
								link: 'rules/player-core/classes/Companions/',
								badge: { text: '1/2', variant: 'caution' },
							},
							{
								label: 'Список класів',
								autogenerate: {
									directory: 'rules/player core/classes/list'
								}
							}
						],
						autogenerate: {
							directory: 'rules/player core/classes'
						},
						collapsed: true
					}, {
						label: "‍🎓 Навички",
						badge: {
							text: 'WIP',
							variant: 'caution'
						},
						autogenerate: {
							directory: 'rules/player core/skills'
						},
						collapsed: true
					}, {
						label: "💪 Уміння",
						badge: {
							text: 'WIP',
							variant: 'caution'
						},
						autogenerate: {
							directory: 'rules/player core/feats'
						},
						collapsed: true
					}, {
						label: "🎒 Обладнання",
						badge: {
							text: 'WIP',
							variant: 'caution'
						},
						autogenerate: {
							directory: 'rules/player core/equipment'
						},
						collapsed: true
					}, {
						label: "✨ Чарування",
						badge: {
							text: 'WIP',
							variant: 'caution'
						},
						autogenerate: {
							directory: 'rules/player core/spells'
						},
						collapsed: true
					}, {
						label: "🎮 Граючи в гру",
						badge: {
							text: 'WIP',
							variant: 'caution'
						},
						autogenerate: {
							directory: 'rules/player core/playing the game'
						},
						collapsed: true
					}],
					collapsed: true
				}, {
					label: 'GM Core',
					badge: {
						text: 'SOON',
						variant: 'danger'
					},
					items: [{
						label: "📜 Введення",
						badge: {
							text: 'SOON',
							variant: 'danger'
						},
						autogenerate: {
							directory: 'rules/gm core/introduction'
						},
						collapsed: true
					}, {
						label: "🎲 Ведення гри",
						badge: {
							text: 'SOON',
							variant: 'danger'
						},
						autogenerate: {
							directory: 'rules/gm core/running the game'
						},
						collapsed: true
					}, {
						label: "🏗️ Конструювання ігор",
						badge: {
							text: 'SOON',
							variant: 'danger'
						},
						autogenerate: {
							directory: 'rules/gm core/building games'
						},
						collapsed: true
					}, {
						label: "🌌 Епоха Втрачених Пророцтв",
						badge: {
							text: 'SOON',
							variant: 'danger'
						},
						autogenerate: {
							directory: 'rules/gm core/age of lost omens'
						},
						collapsed: true
					}, {
						label: "‍🧩 Підсистеми",
						badge: {
							text: 'SOON',
							variant: 'danger'
						},
						autogenerate: {
							directory: 'rules/gm core/subsystems'
						},
						collapsed: true
					}, {
						label: "💰 Скарбниця",
						badge: {
							text: 'SOON',
							variant: 'danger'
						},
						autogenerate: {
							directory: 'rules/gm core/treasure trove'
						},
						collapsed: true
					}],
					collapsed: true
				},
				{
					label: 'Дії/Активності',
					badge: {
						text: 'SOON',
						variant: 'danger'
					},
					autogenerate: {
						directory: 'rules/actions'
					},
					collapsed: true
				},
				{
					label: 'Риси',
					badge: {
						text: 'SOON',
						variant: 'danger'
					},
					autogenerate: {
						directory: 'rules/traits'
					},
					collapsed: true
				},
				{
					label: 'Умови',
					badge: {
						text: 'SOON',
						variant: 'danger'
					},
					autogenerate: {
						directory: 'rules/conditions'
					},
					collapsed: true
				}
				]
				// autogenerate: { directory: 'rules' }
			},
			{
				label: 'CC',badge: {
						text: 'WIP',
						variant: 'caution'
					},
					autogenerate: {
						directory: 'character-creation/'
					},
					collapsed: true
			},
			{
				label: 'Spells',badge: {
						text: 'WIP',
						variant: 'caution'
					},
					autogenerate: {
						directory: 'spells/'
					},
					collapsed: true
			},
			{
				label: 'Feats',badge: {
						text: 'WIP',
						variant: 'caution'
					},
					autogenerate: {
						directory: 'feats/'
					},
					collapsed: true
			},
			{
				label: 'Equipment',badge: {
						text: 'WIP',
						variant: 'caution'
					},
					autogenerate: {
						directory: 'equipment/'
					},
					collapsed: true
			},
			{
				label: 'Glossary',
				badge: {
						text: 'WIP',
						variant: 'caution'
					},
				collapsed: true,
				link: 'glossary'
			}],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
