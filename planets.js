class Planet {
  constructor(name, orbitRadius, imageSrc, size, speed = 10000){
    this.name = name;
    this.r = orbitRadius;
    this.src = imageSrc;
    this.w = size || "50";
    this.h = size || "50";
    this._speed = speed;
    this.speed = `${this._speed}s`;

    this.orbit = undefined;
    this.planet = undefined;
    this.anim = undefined;
  }

  makeOrbit(x, y, obj = {}){
    let stroke = obj.stroke || "white";
    let strokeWidth = obj.strokeWidth || "1";
    let fill = obj.fill || "none";

    let foo = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    foo.setAttribute('d', `M ${x + this.r} ${y} A ${this.r} ${this.r} 0 0 0 ${x - this.r} ${y} A ${this.r} ${this.r} 0 0 0 ${x + this.r} ${y}`);
    foo.id = `${this.name.toLowerCase()}Orbit`;
    foo.classList.add("orbit");

    foo.style.stroke = stroke;
    foo.style.strokeWidth = strokeWidth;
    foo.style.fill = fill;

    this.orbit = foo;
  }

  makePlanet(obj = {}){
    let foo;
    foo = document.createElementNS('http://www.w3.org/2000/svg', 'image');

    foo.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.src);
    foo.setAttribute('width', this.w);
    foo.setAttribute('height', this.h);
    foo.setAttribute('transform', `translate(-${this.w/2}, -${this.h/2})`);

    foo.id = `${this.name.toLowerCase()}Planet`;
    foo.classList.add("planet");

    let bar = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
    bar.setAttribute('dur', this.speed);
    bar.setAttribute('repeatCount', 'indefinite');
    foo.appendChild(bar);

    let zed = document.createElementNS('http://www.w3.org/2000/svg', 'mpath');
    zed.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#${this.orbit.id}`);
    bar.appendChild(zed);

    this.planet = foo;
    this.anim = bar;
  }
}