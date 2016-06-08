var planet = [
	{
		name:"earth",
		details:"The only planet known to support life, Earth is a complex system of air, water, and land. Its blue expanse of ocean, its thin yet dynamic veil of atmosphere, and its brown and green jigsaw of continents all give Earth a vitality unknown anywhere else in the universe.",
		image:"img/earth.png"
	},
	{
		name:"jupiter",
		details:"Jupiter is the solar system's largest planet. Its mainly hydrogen and helium atmosphere resembles that of our sun. Some scientists even refer to the planet as a failed star, although it would need to be many times larger to have become a sun.",
		image:"img/jupiter.png"
	},
	{
		name:"mars",
		details:"This rocky planet's surface has seen volcanoes, meteor impacts, shifting tectonic plates, and huge dust storms. Its seasonal temperature fluctuations are visible in its ever growing and receding polar ice caps.",
		image:"img/mars.png"
	},
	{
		name:"mercury",
		details:"Because Mercury orbits so close to the sun, its heavily cratered surface can reach 801F. But without much of an atmosphere to trap the heat, nighttime temperatures on Mercury can plummet to -279F.",
		image:"img/mercury.png"
	},
	{
		name:"neptune",
		details:"Like Uranus, Neptune gets its bright blue coloring from methane gas in its atmosphere. Hurricane-like storms, similar to Jupiter's Great Red spot, regularly move across Neptune's turbulent surface.",
		image:"img/neptune.png"
	},
	{
		name:"saturn",
		details:"Like the other gas giants, Saturn is made of mostly hydrogen and helium. Fast winds in the upper atmosphere combined with rising heat cause the planet's yellow and gold banding.",
		image:"img/saturn.png"
	},
	{
		name:"uranus",
		details:"Uranus spins on an axis that often points directly at the sun. This odd alignment is thought to be the result of a collision with some other body, possibly a planet-size object, early in its history. Its brightblue-green color comes from methane gas in its atmosphere.",
		image:"img/uranus.png"
	},
	{
		name:"venus",
		details:"Venus's reflective cloud cover makes it one of the brightest objects in the night sky. There clouds kept astronomers from seeing the planet's surface until 1991-92, when the Magellan orbiter used radar to create a highly detailed map.",
		image:"img/venus.png"
	}

]

function getInfo(){
	var choice=document.getElementById('planet').value
	for(i=0; i<=planet.length; i++){
		if(choice===planet[i].name){
			document.getElementById('chosen-planet').innerHTML=planet[i].name
			document.getElementById('pic').src=planet[i].image
			document.getElementById('details').innerHTML=planet[i].details
			return
		}else{
			document.getElementById('chosen-planet').innerHTML="invalid input!"
			document.getElementById('pic').src=" "
			document.getElementById('details').innerHTML=" "
		}

	}
}



