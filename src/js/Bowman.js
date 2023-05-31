import Character from "./character";

export default function Bowman(name, type) {
  Character.call(this, name, type);
  this.attack = 40;
  this.deffence = 10;
}

Bowman.prototype = Object.create(Character.prototype);
Bowman.prototype.constructor = Bowman;
