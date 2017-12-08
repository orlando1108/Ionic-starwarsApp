import { Vehicule } from '../models/vehicule';

export function jsonToVehicule(input) {
  let vehicule = new Vehicule();
  let arrayUrl = input.url.split("/");
  vehicule.id = arrayUrl[arrayUrl.length - 2]
  vehicule.name = input.name;
  vehicule.model = input.model;
  vehicule.manufacturer = input.manufacturer;
  vehicule.cost_in_credits = input.cost_in_credits;
  vehicule.url = input.url;
  vehicule.films = input.films;
  vehicule.pilots = input.pilots;
  vehicule.cargo_capacity = input.cargo_capacity;
  vehicule.crew = input.crew;
  vehicule.length = input.length;
  vehicule.vehicle_class = input.vehicle_class;
  vehicule.passengers = input.passengers;
  return vehicule;
}

export function jsonArrayToVehiculeArray(input: Array<any>) {
  let vehicules: Vehicule[] = [];
  for (let entry of input)
  {
    vehicules.push(jsonToVehicule(entry))
  }
  return vehicules;
}
