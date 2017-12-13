import { Component } from '@angular/core';


import { StarWarsIndex } from '../starwars-tab/starWarsIndex-page/starWarsIndex';
import { CommunityIndex } from '../community-tab/communityIndex-page/communityIndex';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    tabStarWarsRoot = StarWarsIndex;
    tabCommunityRoot = CommunityIndex;

    constructor() {

    }
}
