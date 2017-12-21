import { Starwars } from '../models/starwars';

export function jsonArrayToObjectArray(input: Array<any>, sw: any) {
  let objs: Starwars[] = [];
  for (let entry of input) {
    objs.push(jsonToObject(entry, sw))
  }
  return objs;
}

export function jsonToObject(input, sw: any) {
  return sw.jsonToObject(input);
}

export var version:string = "Version 1.0.0";
