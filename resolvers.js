export default {
	Query: {
		gods: async (parent, args, { greeks }) => {
			let gods = await setTimeout(greeks.entities.filter(e => e.type === 'God'), 200)
			return gods
		},
		titans: async (parent, args, { greeks }) => {
			let titans = await setTimeout(greeks.entities.filter(e => e.type === 'Titan'), 200)
			return titans
		},
		human: async (parent, args, { greeks }) => {
			let human = await setTimeout(greeks.entities.find(e => e.type === 'Human'), 200)
			return human
		},

	}
}