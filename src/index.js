import gql from 'graphql-tag'
import ApolloClient from 'apollo-boost'

const apollo = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
})

const get_human_info = name => {
	const query = gql`query {
		human {
			name
			children {
				name
				god_of
			}
			consorts {
				name
				entity_type
			}
		}
	}
	`
	const variables = { name };
	
	const response = apollo
		.query({ query, variables })
		.then(res => res.data)
		.catch(err => console.log(err));
	
	return response
}

const get_god_info = name => {
	const query = gql`query GetGod($name: String!) {
		getGod(name: $name) {
			name
			god_of
			parents {
				name
				entity_type
			}
			children {
				name
				god_of
			}
			consorts {
				name
				entity_type
			}
		}
	}
	`
	const variables = { name };
	
	const response = apollo
		.query({ query, variables })
		.then(res => res.data)
		.catch(err => console.log(err));
	
	return response
}

const get_titan_info = name => {
	const query = gql`query GetTitan($name: String!) {
		getTitan(name: $name) {
			name
			children {
				name
				god_of
			}
			consorts {
				name
				entity_type
			}
		}
	}
	`
	const variables = { name };
	
	const response = apollo
		.query({ query, variables })
		.then(res => res.data)
		.catch(err => console.log(err));

	return response
}

const get_info = event => {
	let values = event.target.innerHTML.split(' ')
	let name = values[0]
	let entity = values[2]

	let profile = document.getElementById('profile-container')

	while(profile.hasChildNodes()){
		profile.removeChild(profile.firstChild)
	}

	let title = document.createElement("H1")
	let parents_title = document.createElement("H2")
	parents_title.innerHTML = 'Parents'
	let consorts_title = document.createElement("H2")
	consorts_title.innerHTML = 'Consorts'
	let children_title = document.createElement("H2")
	children_title.innerHTML = 'Children'
	let parents = document.createElement("UL")
	let consorts = document.createElement("UL")
	let children = document.createElement("UL")

	if (entity === 'God'){
		get_god_info(name).then(res => {
			let data = res.getGod
			title.innerHTML = `${data.name} god of ${data.god_of}`
			if (!data.children){
				let node = document.createElement("LI")
				let textnode = document.createTextNode(`None`)
				node.appendChild(textnode)
				children.appendChild(node)
			} else {
				data.children.forEach(e => {
					let node = document.createElement("LI")
					let textnode = document.createTextNode(`${e.name} god of ${e.god_of}`)
					node.appendChild(textnode)
					children.appendChild(node)
				})
			}
			if (!data.consorts){
				let node = document.createElement("LI")
				let textnode = document.createTextNode(`None`)
				node.appendChild(textnode)
				consorts.appendChild(node)
			} else {
				data.consorts.forEach(e => {
					let node = document.createElement("LI")
					let textnode = document.createTextNode(`${e.name} the ${e.entity_type}`)
					node.appendChild(textnode)
					consorts.appendChild(node)
				})
			}
			if (!data.parents){
				let node = document.createElement("LI")
				let textnode = document.createTextNode(`None`)
				node.appendChild(textnode)
				consorts.appendChild(node)
			} else {
				data.parents.forEach(e => {
					let node = document.createElement("LI")
					let textnode = document.createTextNode(`${e.name} the ${e.entity_type}`)
					node.appendChild(textnode)
					parents.appendChild(node)
				})
			}
		})
	} else if (entity === 'Titan'){
		get_titan_info(name).then(res => {
			let data = res.getTitan
			title.innerHTML = `${data.name} the Titan`
			if (!data.children){
				let node = document.createElement("LI")
				let textnode = document.createTextNode(`None`)
				node.appendChild(textnode)
				children.appendChild(node)
			} else {
				data.children.forEach(e => {
					let node = document.createElement("LI")
					let textnode = document.createTextNode(`${e.name} god of ${e.god_of}`)
					node.appendChild(textnode)
					children.appendChild(node)
				})
			}
			if (!data.consorts){
				let node = document.createElement("LI")
				let textnode = document.createTextNode(`None`)
				node.appendChild(textnode)
				consorts.appendChild(node)
			} else {
				data.consorts.forEach(e => {
					let node = document.createElement("LI")
					let textnode = document.createTextNode(`${e.name} the ${e.entity_type}`)
					node.appendChild(textnode)
					consorts.appendChild(node)
				})
			}
			let node = document.createElement("LI")
			let textnode = document.createTextNode(`None`)
			node.appendChild(textnode)
			parents.appendChild(node)
		})
	} else {
		get_human_info(name).then(res => {
			let data = res.human
			title.innerHTML = `${data.name} the Human`
			if (!data.children){
				let node = document.createElement("LI")
				let textnode = document.createTextNode(`None`)
				node.appendChild(textnode)
				children.appendChild(node)
			} else {
				data.children.forEach(e => {
					let node = document.createElement("LI")
					let textnode = document.createTextNode(`${e.name} god of ${e.god_of}`)
					node.appendChild(textnode)
					children.appendChild(node)
				})
			}
			if (!data.consorts){
				let node = document.createElement("LI")
				let textnode = document.createTextNode(`None`)
				node.appendChild(textnode)
				consorts.appendChild(node)
			} else {
				data.consorts.forEach(e => {
					let node = document.createElement("LI")
					let textnode = document.createTextNode(`${e.name} the ${e.entity_type}`)
					node.appendChild(textnode)
					consorts.appendChild(node)
				})
			}
			let node = document.createElement("LI")
			let textnode = document.createTextNode(`None`)
			node.appendChild(textnode)
			parents.appendChild(node)
		})
	}
	
	profile.appendChild(title)
	profile.appendChild(parents_title)
	profile.appendChild(parents)
	profile.appendChild(consorts_title)
	profile.appendChild(consorts)
	profile.appendChild(children_title)
	profile.appendChild(children)
}

const establish_entities = () => {
	const query = gql`query {
		allEntities {
			name
			entity_type
		}
	}
	`
	
	const variables = {};
	
	const response = apollo
		.query({ query, variables })
		.then(res => {
			res.data.allEntities.forEach(e => {
				let node = document.createElement("LI")
				let textnode = document.createTextNode(`${e.name} the ${e.entity_type}`)
				
				node.appendChild(textnode)
				node.className = 'entity-item'
				node.addEventListener('click', get_info)

				document.getElementById('hook').appendChild(node)
			})		
		})
		.catch(err => console.log(err));
}

establish_entities()



