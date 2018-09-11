export default {
	entities: [
	{
		name: 'Cronus',
		entity_type: 'Titan',
		roman: 'Saturn',
		consorts: ['Rhea'],
		children: ['Zeus', 'Hera', 'Poseidon', 'Hestia', 'Hades', 'Demeter'],
		generation: 1,
		olympian: false
	},
	{
		name: 'Rhea',
		entity_type: 'Titan',
		roman: 'Magna Mater',
		consorts: ['Cronus'],
		children: ['Zeus', 'Hera', 'Poseidon', 'Hestia', 'Hades', 'Demeter'],
		generation: 1,
		olympian: false
	},
	{
		name: 'Coeus',
		entity_type: 'Titan',
		roman: 'Polus',
		consorts: ['Pheobe'],
		children: ['Leto'],
		generation: 1,
		olympian: false
	},
	{
		name: 'Pheobe',
		entity_type: 'Titan',
		roman: null,
		consorts: ['Coeus'],
		children: ['Leto'],
		generation: 1,
		olympian: false
	},
	{
		name: 'Leto',
		entity_type: 'God',
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
		entity_type: 'God',
		god_of: 'Sky and Thunder',
		parents: ['Cronus', 'Rhea'],
		consorts: ['Hera', 'Leto', 'Semele'],
		children: ['Athena', 'Apollo',  'Ares', 'Artemis', 'Dionysus', 'Hephaestus'],
		roman: 'Jupiter',
		generation: 2,
		olympian: true
	},
	{
		name: 'Hera',
		entity_type: 'God',
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
		entity_type: 'God',
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
		entity_type: 'God',
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
		entity_type: 'God',
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
		entity_type: 'God',
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
		entity_type: 'God',
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
		entity_type: 'God',
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
		entity_type: 'God',
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
		entity_type: 'God',
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
		entity_type: 'God',
		god_of: 'Hunt, Archery, Moon and Forests',
		parents: ['Leto', 'Zeus'],
		consorts: null,
		children: null,
		roman: 'Diana',
		generation: 3,
		olympian: true
	},
	{
		name: 'Dionysus',
		entity_type: 'God',
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
		entity_type: 'Human',
		consorts: ['Zeus'],
		children: ['Dionysus'],
		generation: 2,
		olympian: false
	}
]}