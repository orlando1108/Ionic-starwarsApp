export class Event {

  public title: string = "";
  public date: string = "";
  public desc: string = "";
  public id: number;
  public visible: boolean = false;

  constructor() {
  }

  public jsonToObject(input): Event {
    let event = new Event();
    event.id = input.id;
    event.title = input.title;
    event.desc = input.desc;
    event.visible = false;
    event.date = input.date;
    return event;
  }
}
