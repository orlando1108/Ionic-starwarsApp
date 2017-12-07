import { Vaisseau } from '../models/vaisseau';

export function jsonToVaisseau(input) {
  let vaisseau = new Vaisseau();
  let arrayUrl = input.url.split("/");
  vaisseau.id = arrayUrl[arrayUrl.length - 2]
  vaisseau.name = input.name;
  vaisseau.model = input.model;
  vaisseau.manufacturer = input.manufacturer;
  vaisseau.cost_in_credits = input.cost_in_credits;
  vaisseau.url = input.url;
  vaisseau.films = input.films;
  vaisseau.pilots = input.pilots;
  return vaisseau;
}


export function jsonArrayToVaisseauArray(input: Array<any>) {
  let vaisseaus: Vaisseau[] = [];
  for (let entry of input)
  {
    vaisseaus.push(jsonToVaisseau(entry))
  }
  return vaisseaus;
}
