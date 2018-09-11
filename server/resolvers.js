import greeks from './database'

const expand_relatives = immutable => {
	let mutable = Object.assign({}, immutable)

	if (mutable.children){
		mutable.children = mutable.children.map(child => greeks.entities.find(e => e.name === child))
	}
	
	if (mutable.consorts){
		mutable.consorts = mutable.consorts.map(consort => greeks.entities.find(e => e.name === consort))
	}
	
	if (mutable.parents){
		mutable.parents = mutable.parents.map(parent => greeks.entities.find(e => e.name === parent))
	}

	return mutable
}

export default {
	Query: {
		allGods: async () => {
			let gods = greeks.entities
				.filter(e => e.entity_type === 'God')
				.map(god => expand_relatives(god))

			await setTimeout(() => {}, 200)

			return gods
		},
		allTitans: async () => {
			let titans = greeks.entities
				.filter(e => e.entity_type === 'Titan')
				.map(titan => expand_relatives(titan))

			await setTimeout(() => {}, 200)

			return titans
		},
		human: async () => {
			let human = greeks.entities.find(e => e.entity_type === 'Human')

			await setTimeout(() => {}, 200)

			return expand_relatives(human)
		},
		allEntities: async () => {
			let entities = greeks.entities.map(entity => expand_relatives(entity))

			await setTimeout(() => {}, 200)

			return entities
		},
		getGod: async (_, { name }) => {
			let god = greeks.entities.find(e => e.name === name)

			await setTimeout(() => {}, 200)

			return expand_relatives(god)
		},
		getTitan: async (_, { name }) => {
			let titan = greeks.entities.find(e => e.name === name)

			await setTimeout(() => {}, 200)

			return expand_relatives(titan)
		},
		getOlympians: async () => {
			let olympians = greeks.entities
				.filter(e => e.olympian)
				.map(olympian => expand_relatives(olympian))

			await setTimeout(() => {}, 200)

			return olympians
		}
		

	}
}
