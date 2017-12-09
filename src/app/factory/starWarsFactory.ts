import { Starwars } from '../models/starwars';
import { Film } from '../models/film';

export function jsonArrayToObjectArray(input: Array<any>, sw: any) {
  let objs: Starwars[] = [];
  for (let entry of input)
  {
    objs.push(jsonToObject(entry, sw))
  }
  return objs;
}

export function jsonToObject(input, sw: any){
    return sw.jsonToObject(input);
}
