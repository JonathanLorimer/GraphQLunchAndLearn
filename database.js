export default {
	entities: [
	{
		name: 'Cronus',
		type: 'Titan',
		roman: 'Saturn',
		consorts: ['Rhea'],
		children: ['Zeus', 'Hera', 'Poseidon', 'Hestia', 'Hades', 'Demeter'],
		generation: 1,
		olympian: false
	},
	{
		name: 'Rhea',
		type: 'Titan',
		roman: 'Magna Mater',
		consorts: ['Cronus'],
		children: ['Zeus', 'Hera', 'Poseidon', 'Hestia', 'Hades', 'Demeter'],
		generation: 1,
		olympian: false
	},
	{
		name: 'Coeus',
		type: 'Titan',
		roman: 'Polus',
		consorts: ['Pheobe'],
		children: ['Leto'],
		generation: 1,
		olympian: false
	},
	{
		name: 'Pheobe',
		type: 'Titan',
		roman: null,
		consorts: ['Coeus'],
		children: ['Leto'],
		generation: 1,
		olympian: false
	},
	{
		name: 'Leto',
		type: 'God',
		god_of: 'Womanly Demure and Motherhood',
		parents: ['Coeus', 'Pheobe'],
		consorts: ['Zeus'],
		children: ['Apollo', 'Artemis'],
		roman: 'Latona',
		generation: 2,
		olympian: false
	},
	{
		name: 'Zeus',
		type: 'God',
		god_of: 'Sky and Thunder',
		parents: ['Cronus', 'Rhea'],
		consorts: ['Hera', 'Leto', 'Maia', 'Semele'],
		children: ['Athena', 'Apollo',  'Ares', 'Artemis', 'Dionysus', 'Hephaestus', 'Hermes'],
		roman: 'Jupiter',
		generation: 2,
		olympian: true
	},
	{
		name: 'Hera',
		type: 'God',
		god_of: 'Women and Family',
		parents: ['Cronus', 'Rhea'],
		consorts: ['Zeus'],
		children: ['Ares', 'Hephaestus'],
		roman: 'Juno',
		generation: 2,
		olympian: true
	},
	{
		name: 'Poseidon',
		type: 'God',
		god_of: 'Sea, Earthquakes, and Horses',
		parents: ['Cronus', 'Rhea'],
		consorts: null,
		children: null,
		roman: 'Neptune',
		generation: 2,
		olympian: true
	},
	{
		name: 'Hestia',
		type: 'God',
		god_of: 'Hearth, Architecture, Domesticity',
		parents: ['Cronus', 'Rhea'],
		consorts: null,
		children: null,
		roman: 'Vesta',
		generation: 2,
		olympian: true
	},
	{
		name: 'Hades',
		type: 'God',
		god_of: 'Underworld',
		parents: ['Cronus', 'Rhea'],
		consorts: null,
		children: null,
		roman: 'Dis Pater',
		generation: 2,
		olympian: true
	},
	{
		name: 'Demeter',
		type: 'God',
		god_of: 'Agriculture and Harvest',
		parents: ['Cronus', 'Rhea'],
		consorts: null,
		children: null,
		roman: 'Ceres',
		generation: 2,
		olympian: true
	},
	{
		name: 'Hephaestus',
		type: 'God',
		god_of: 'Fire, Forge, Sculpture',
		parents: ['Zeus', 'Hera'],
		consorts: null,
		children: null,
		roman: 'Vulcan',
		generation: 3,
		olympian: true
	},
	{
		name: 'Ares',
		type: 'God',
		god_of: 'War',
		parents: ['Zeus', 'Hera'],
		consorts: null,
		children: null,
		roman: 'Mars',
		generation: 3,
		olympian: true
	},
	{
		name: 'Athena',
		type: 'God',
		god_of: 'Wisdom, Craft, and Warfare',
		parents: ['Zeus'],
		consorts: null,
		children: null,
		roman: 'Minerva',
		generation: 3,
		olympian: true
	},
	{
		name: 'Apollo',
		type: 'God',
		god_of: 'Arts, Archery, and Sun',
		parents: ['Leto', 'Zeus'],
		consorts: null,
		children: null,
		roman: 'Apollo',
		generation: 3,
		olympian: true
	},
	{
		name: 'Artemis',
		type: 'God',
		god_of: 'Hunt, Archery, Moon and Forests',
		parents: ['Leto', 'Zeus'],
		consorts: null,
		children: null,
		roman: 'Diana',
		generation: 3,
		olympian: true
	},
	{
		name: 'Artemis',
		type: 'God',
		god_of: 'Wine, Fertility, and Hedonism',
		parents: ['Semele', 'Zeus'],
		consorts: null,
		children: null,
		roman: 'Bacchus',
		generation: 3,
		olympian: true
	},
	{
		name: 'Semele',
		type: 'Human',
		consorts: ['Zeus'],
		children: ['Dionysus'],
		generation: 2,
		olympian: false
	},
]}