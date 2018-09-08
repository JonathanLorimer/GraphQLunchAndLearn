export default `
	Type Query {
		gods: [God!]!
		titans: [Titan!]!
		human: Human
	}
	God: {
		name: String
		type: String
		god_of: String
		parents: [String]
		consorts: [String]
		children: [String]
		roman: String
		generation: Int
		olympian: Boolean
	}
	Human: {
		name: String
		type: String
		consorts: [String]
		children: [String]
		generation: Int,
		olympian: Boolean
	}
	Titan: {
		name: String
		type: String
		roman: String
		consorts: [String]
		children: [String]
		generation: Int
		olympian: Boolean
	}
	Gods: [God]
	Titans: [Titan]

	Type Mutation {

	}

`