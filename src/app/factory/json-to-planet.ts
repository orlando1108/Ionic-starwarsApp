import { Planet } from '../models/planet';

export function jsonToPlanet(input) {
  let planet = new Planet();
  let arrayUrl = input.url.split("/");
  planet.id = arrayUrl[arrayUrl.length - 2]
  planet.name = input.name;
  planet.climate = input.climate;
  planet.created = input.created;
  planet.diameter = input.diameter;
  planet.gravity = input.gravity;
  planet.url = input.url;
  planet.population = input.population;
  planet.films = input.films;
  planet.residents = input.residents;
  planet.terrain = input.terrain;
  planet.orbital_period = input.orbital_period;
  return planet;
}

export function jsonArrayToPlanetArray(input: Array<any>) {
  let planets: Planet[] = [];
  for (let entry of input)
  {
    planets.push(jsonToPlanet(entry))
  }
  return planets;
}
