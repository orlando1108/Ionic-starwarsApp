import { Starwars } from '../models/starwars';
import { AlertController } from 'ionic-angular';

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
<<<<<<< HEAD
=======


export function presentAlert(alertCtrl: AlertController) {
 let alert = alertCtrl.create({
    title: 'Starwars Alert',
    subTitle: '\n The Dark Side has blocked your request. Please wait Rebel Alliance to continue or try again later !',
    buttons: ['Dismiss']
  });
  alert.present();
}

export var version:string = "Version 1.0.0";
>>>>>>> f63cc0c60eafe262410c3c7af7919ad246bdff80
