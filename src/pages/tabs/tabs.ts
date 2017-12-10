import { Component } from '@angular/core';


import { StarWarsIndex } from '../starwars-tab/starWarsIndex-page/starWarsIndex';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    tabStarWarsRoot = StarWarsIndex;
    constructor() {

    }
}
