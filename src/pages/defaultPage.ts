import { GoogleAnalytics } from '@ionic-native/google-analytics';




export class DefaultPage {
    public title: string = "";
    constructor(title: string, public ga: GoogleAnalytics) {
        this.title = title;
        this.ga.startTrackerWithId("UA-111264930-1")
            .then(() => {
                this.ga.trackView(title);
            })
            .catch(e => console.log("erreur analytics"));
    }
}