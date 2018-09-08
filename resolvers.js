import greeks from './database'

export default {
	Query: {
		allGods: async () => {
			let gods = greeks.entities.filter(e => e.entity_type === 'God')
			await setTimeout(() => {}, 200)
			return gods
		},
		allTitans: async () => {
			let titans = () => greeks.entities.filter(e => e.entity_type === 'Titan')
			await setTimeout(() => {}, 200)
			return titans
		},
		human: async () => {
			let human = () => greeks.entities.find(e => e.entity_type === 'Human')
			await setTimeout(() => {}, 200)
			return human
		},

	}
}
