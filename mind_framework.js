// I want to... be able to define a 'me'
// simulate 'me' through situations
// display it nicely


function Person(){
	this.status = {
		alias: ['me'],
		feelings:{
			
		}
	}
	
	this.people = { // people 'me' has any knowledge of.
		"Adilson Soriani":{
			type: 'Person',
			alias: ['father', 'dad', 'old man'],
			feelings:{
				overal_respect: 0.7
			}
			eval: { // absolutely subjective from the pov of 'me'
				strength: 0.5,
				agility: 0.3,
				knowledge: 0.3,
			},
			reference: {
				'civil engineer': 0.7,
				'farming': 0.3,
				relationships: 0.1,
				marriage: 0.1,
			}
		}
	}
}

Person.prototype.getToKnow = function(id, status) {
	
};


var me = new Person({}, {}, {})
