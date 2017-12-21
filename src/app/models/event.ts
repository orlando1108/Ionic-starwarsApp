export class Event {

  public title: string = "";
  public date: string = "";
  public desc: string = "";
  public id: number;
  public visible: boolean = false;

  constructor() {
  }

  public static jsonToObject(input): Event {
    let event = new Event();
    event.id = input.ID;
    event.title = input.Title;
    event.desc = input.Desc;
    event.visible = false;
    event.date = input.Date;
    return event;
  }

  public static jsonEventToEventArray(input: Array<any>) {
    let objs: Event[] = [];
    for (let entry of input) {
      objs.push(Event.jsonToObject(entry))
    }
    return objs;
  }
}
