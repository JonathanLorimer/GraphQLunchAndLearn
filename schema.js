type Query {
	allGods: [God!]!
	allTitans: [Titan!]!
	human: Human
}
type God {
	name: String
	entity_type: String
	god_of: String
	parents: [String]
	consorts: [String]
	children: [String]
	roman: String
	generation: Int
	olympian: Boolean
}
type Human {
	name: String
	entity_type: String
	consorts: [String]
	children: [String]
	generation: Int,
	olympian: Boolean
}
type Titan {
	name: String
	entity_type: String
	roman: String
	consorts: [String]
	children: [String]
	generation: Int
	olympian: Boolean
}
