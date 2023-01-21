var svg, circ;
var svgw, svgh;
var scaleSlider;
var mid_w, mid_h;
var q_w, q_h;

var paused = false;
var scale, speed;

var planets;
var orbits;
var qwerties;

window.onload = function(){
  svg = document.getElementById("space");
  pause = document.getElementById("pause");
  scaleSlider = document.getElementById("scale");  
  
  svgw = svg.clientWidth;
  svgh = svg.clientHeight;

  mid_w = svgw / 2;
  mid_h = svgh / 2;

  q_w = svgw / 4;
  q_h = svgh / 4;

  createPlanets();

  // Pause
  pause.addEventListener("click", function(){
    pauseAnim(pause);
  });

  // Controls
  scaleSlider.oninput = function() {
    scale = this.value / 10;
    svg.style.transform = `scale(${scale})`;
  }
};

window.onresize = function() {
  svgw = svg.clientWidth;
  svgh = svg.clientHeight;

  mid_w = svgw / 2;
  mid_h = svgh / 2;

  q_w = svgw / 4;
  q_h = svgh / 4;

  createPlanets();
};

function createPlanets(){
  planets = [];
  orbits = [];
  qwerties = [];

  svg.innerHTML = "";

  // Create sun
  var sun = document.createElementNS('http://www.w3.org/2000/svg', 'image');

  sun.id = "sun";
  sun.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '../media/Sun_Orbit.svg');
  sun.setAttribute('width', 80);
  sun.setAttribute('height', 80);
  sun.setAttribute('x', mid_w - 40);
  sun.setAttribute('y', mid_h - 40);

//  sun.setAttribute('r', 40);
//  sun.setAttribute('cx', mid_w);
//  sun.setAttribute('cy', mid_h);

  sun.addEventListener('click', function(){
    window.open('Sun.html', "_self");
  });

  svg.appendChild(sun);

  // Planets
  planets[0] = new Planet("Mercury", 55, "../media/Mercury_Orbit (1).svg", 5, 0.880);
  planets[1] = new Planet("Venus", 70, "../media/Venus_Orbit (1).svg", 14, 2.240);
  planets[2] = new Planet("Earth", 85, "../media/Earth_Orbit (1).svg", 14, 3.650);
  planets[3] = new Planet("Mars", 100, "../media/Mars_Orbit (1).svg", 7, 6.870);
  planets[4] = new Planet("Jupiter", 230, "../media/Jupiter_Orbit (3).svg", 89, 10 * 4.3320);
  planets[5] = new Planet("Saturn", 320, "../media/Saturn_Orbit (3).svg", 75, 8 * 10.5920);
  planets[6] = new Planet("Uranus", 410, "../media/Uranus_Orbit (3).svg", 32, 6 * 30.6810);
  planets[7] = new Planet("Neptune", 500, "../media/Neptune_Orbit (3).svg", 31, 4 * 60.1930);

  for (i = 0; i < planets.length; i++) {
    planets[i].makeOrbit(mid_w, mid_h);
    planets[i].makePlanet({imageSrc: "Venus_Orbit.svg"});

    orbits.push(planets[i].orbit);
    qwerties.push(planets[i].planet);

    svg.appendChild(planets[i].orbit);
    svg.appendChild(planets[i].planet);

    addListeners(planets[i]);
  }
}

function addListeners(elem){
  elem.orbit.addEventListener('click', function(){
    window.open(`${elem.name}.html`, "_self");
  });

  elem.planet.addEventListener('click', function(){
    window.open(`${elem.name}.html`, "_self");
  });

  let label = undefined;
}

function pauseAnim(elem) {
  if (paused) {
    svg.unpauseAnimations();
    paused = false;
	elem.value = "PAUSE";
  } else {
    svg.pauseAnimations();
    paused = true;
	elem.value = "UNPAUSE";
  }
}