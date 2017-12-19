export class Message {
    mail: String
    message: String
    date: Date
    username: String
    constructor(mail, message, date, username) {
        this.mail = mail;
        this.message = message;
        this.date = date;
        this.username = username;
    }
}