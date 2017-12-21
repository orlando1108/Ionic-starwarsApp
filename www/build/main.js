webpackJsonp([0],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vehicle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_starwars__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_people__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_film__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__factory_starWarsFactory__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Vehicle = (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        var _this = _super.call(this) || this;
        _this.name = "";
        _this.cargo_capacity = "";
        _this.cost_in_credits = "";
        _this.crew = "";
        _this.length = "";
        _this.vehicle_class = "";
        _this.passengers = "";
        _this.manufacturer = "";
        _this.model = "";
        _this.urlFilms = [];
        _this.urlPilots = [];
        _this.associatedPeople = [];
        _this.associatedFilms = [];
        return _this;
    }
    Vehicle.prototype.jsonToObject = function (input) {
        var vehicle = new Vehicle();
        var arrayUrl = input.url.split("/");
        vehicle.id = arrayUrl[arrayUrl.length - 2];
        vehicle.name = input.name;
        vehicle.model = input.model;
        vehicle.manufacturer = input.manufacturer;
        vehicle.cost_in_credits = input.cost_in_credits;
        vehicle.url = input.url;
        vehicle.urlFilms = input.films;
        vehicle.urlPilots = input.pilots;
        vehicle.cargo_capacity = input.cargo_capacity;
        vehicle.crew = input.crew;
        vehicle.length = input.length;
        vehicle.vehicle_class = input.vehicle_class;
        vehicle.passengers = input.passengers;
        vehicle.pathImage = "assets/imgs/starwars/vehicles/" + vehicle.id + ".jpg";
        return vehicle;
    };
    Vehicle.prototype.getAssociatedObjects = function (dataService, alertCtrl) {
        this.getAssociatedFilms(dataService, alertCtrl);
        this.getAssociatedPilots(dataService, alertCtrl);
    };
    Vehicle.prototype.getAssociatedFilms = function (dataService, alertCtrl) {
        var _this = this;
        this.urlFilms.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_2__models_film__["a" /* Film */](), elem)
                .subscribe(function (result) {
                _this.associatedFilms.push(result);
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_3__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    Vehicle.prototype.getAssociatedPilots = function (dataService, alertCtrl) {
        var _this = this;
        this.urlPilots.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_1__models_people__["a" /* People */](), elem)
                .subscribe(function (result) {
                _this.associatedPeople.push(result);
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_3__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    return Vehicle;
}(__WEBPACK_IMPORTED_MODULE_0__models_starwars__["a" /* Starwars */]));

//# sourceMappingURL=vehicle.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Specie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_starwars__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_people__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_film__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__factory_starWarsFactory__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Specie = (function (_super) {
    __extends(Specie, _super);
    function Specie() {
        var _this = _super.call(this) || this;
        _this.eye_colors = "";
        _this.classification = "";
        _this.average_lifespan = "";
        _this.hair_colors = "";
        _this.homeworld = "";
        _this.language = "";
        _this.urlFilms = [];
        _this.name = "";
        _this.urlPeople = [];
        _this.skin_colors = "";
        _this.associatedPeople = [];
        _this.associatedFilms = [];
        return _this;
    }
    Specie.prototype.jsonToObject = function (input) {
        var specie = new Specie();
        var arrayUrl = input.url.split("/");
        specie.id = arrayUrl[arrayUrl.length - 2];
        specie.url = input.url;
        specie.eye_colors = input.eye_colors;
        specie.classification = input.classification;
        specie.average_lifespan = input.average_lifespan;
        specie.hair_colors = input.hair_colors;
        specie.homeworld = input.homeworld;
        specie.language = input.language;
        specie.urlFilms = input.films;
        specie.name = input.name;
        specie.urlPeople = input.people;
        specie.skin_colors = input.skin_colors;
        specie.pathImage = "assets/imgs/starwars/species/" + specie.id + ".jpg";
        return specie;
    };
    Specie.prototype.getAssociatedObjects = function (dataService, alertCtrl) {
        this.getAssociatedFilms(dataService, alertCtrl);
        this.getAssociatedPeople(dataService, alertCtrl);
    };
    Specie.prototype.getAssociatedFilms = function (dataService, alertCtrl) {
        var _this = this;
        this.urlFilms.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_2__models_film__["a" /* Film */](), elem)
                .subscribe(function (result) {
                _this.associatedFilms.push(result);
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_3__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    Specie.prototype.getAssociatedPeople = function (dataService, alertCtrl) {
        var _this = this;
        this.urlPeople.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_1__models_people__["a" /* People */](), elem)
                .subscribe(function (result) {
                _this.associatedPeople.push(result);
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_3__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    return Specie;
}(__WEBPACK_IMPORTED_MODULE_0__models_starwars__["a" /* Starwars */]));

//# sourceMappingURL=specie.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLogChat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_defaultPage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_community_tab_chat_page_chat__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_chat_service__ = __webpack_require__(365);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Observable } from 'rxjs/Observable';




var UserLogChat = (function (_super) {
    __extends(UserLogChat, _super);
    function UserLogChat(navCtrl, navParams, ga, chatService) {
        var _this = _super.call(this, "Sign in to chat", ga) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ga = ga;
        _this.chatService = chatService;
        _this.error = "";
        _this.mail = "";
        _this.enterBtnDisabled = true;
        _this.error = "";
        if (_this.navParams.get('error')) {
            _this.error = _this.navParams.get('error');
        }
        return _this;
    }
    UserLogChat.prototype.updateInput = function (newValue, input) {
        if (input === "mail") {
            this.mail = newValue;
            this.enterBtnDisabled = !this.validateEmail(this.mail);
        }
        else {
            this.username = newValue;
        }
    };
    UserLogChat.prototype.enter = function () {
        var _this = this;
        this.chatService.connect(this.mail, this.username).subscribe(function (result) {
            if (result.statut == 200) {
                if (!result.content.insertId) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_community_tab_chat_page_chat__["a" /* ChatPage */], { id: result.content.Id, mail: result.content.Mail, username: result.content.Username });
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_community_tab_chat_page_chat__["a" /* ChatPage */], { id: result.content.insertId, mail: _this.mail, username: _this.username });
                }
            }
            else {
                _this.error = result.exception;
            }
        }, function (error) {
            console.log(error);
            _this.error = error;
        });
        //
    };
    UserLogChat.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };
    UserLogChat = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'userLogChat',template:/*ion-inline-start:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\community-tab\userLogChat-page\userLogChat.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{title}}\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding="true" class="has-header background">\n\n    <div>\n\n        <p class="sino">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur asperiores, illum quo nostrum vero ducimus ipsam\n\n            explicabo nam accusantium totam in ex nobis ut non quasi quisquam reiciendis iusto aspernatur?</p>\n\n        <form class="list">\n\n\n\n            <div style="text-align:center;" class="show-list-numbers-and-dots">\n\n                <p style="color:#000000;">Condtiotns</p>\n\n            </div>\n\n            <ion-input type="text" [(ngModel)]="username" (ngModelChange)="updateInput($event,\'username\')" name="username" placeholder="Your username"></ion-input>\n\n\n\n            <ion-input type="mail" [(ngModel)]="mail" (ngModelChange)="updateInput($event,\'mail\')" name="mail" placeholder="Your mail"></ion-input>\n\n            <p>{{error}}</p>\n\n            <button ion-button (click)="enter()" color="secondary" class="button-inner" [disabled]="enterBtnDisabled">Enter</button>\n\n\n\n        </form>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\community-tab\userLogChat-page\userLogChat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_5__app_services_chat_service__["a" /* ChatService */]])
    ], UserLogChat);
    return UserLogChat;
}(__WEBPACK_IMPORTED_MODULE_2__pages_defaultPage__["a" /* DefaultPage */]));

//# sourceMappingURL=userLogChat.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 224;

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Starship; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_starwars__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_people__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_film__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__factory_starWarsFactory__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Starship = (function (_super) {
    __extends(Starship, _super);
    function Starship() {
        var _this = _super.call(this) || this;
        _this.name = "";
        _this.model = "";
        _this.manufacturer = "";
        _this.cost_in_credits = "";
        _this.urlFilms = [];
        _this.urlPilots = [];
        _this.associatedPeople = [];
        _this.associatedFilms = [];
        return _this;
    }
    Starship.prototype.jsonToObject = function (input) {
        var starship = new Starship();
        var arrayUrl = input.url.split("/");
        starship.id = arrayUrl[arrayUrl.length - 2];
        starship.name = input.name;
        starship.model = input.model;
        starship.manufacturer = input.manufacturer;
        starship.cost_in_credits = input.cost_in_credits;
        starship.url = input.url;
        starship.urlFilms = input.films;
        starship.urlPilots = input.pilots;
        starship.pathImage = "assets/imgs/starwars/starships/" + starship.id + ".jpg";
        return starship;
    };
    Starship.prototype.getAssociatedObjects = function (dataService, alertCtrl) {
        this.getAssociatedFilms(dataService, alertCtrl);
        this.getAssociatedPilots(dataService, alertCtrl);
    };
    Starship.prototype.getAssociatedFilms = function (dataService, alertCtrl) {
        var _this = this;
        this.urlFilms.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_2__models_film__["a" /* Film */](), elem)
                .subscribe(function (result) {
                _this.associatedFilms.push(result);
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_3__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    Starship.prototype.getAssociatedPilots = function (dataService, alertCtrl) {
        var _this = this;
        console.log('url pilots length  ' + this.urlPilots.length);
        this.urlPilots.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_1__models_people__["a" /* People */](), elem)
                .subscribe(function (result) {
                _this.associatedPeople.push(result);
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_3__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    return Starship;
}(__WEBPACK_IMPORTED_MODULE_0__models_starwars__["a" /* Starwars */]));

//# sourceMappingURL=starship.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Planet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_starwars__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_people__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_film__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__factory_starWarsFactory__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Planet = (function (_super) {
    __extends(Planet, _super);
    function Planet() {
        var _this = _super.call(this) || this;
        _this.name = "";
        _this.climate = "";
        _this.created = "";
        _this.diameter = "";
        _this.gravity = "";
        _this.population = "";
        _this.terrain = "";
        _this.orbital_period = "";
        _this.urlFilms = [];
        _this.urlResidents = [];
        _this.associatedPeople = [];
        _this.associatedFilms = [];
        return _this;
    }
    Planet.prototype.jsonToObject = function (input) {
        var planet = new Planet();
        var arrayUrl = input.url.split("/");
        planet.id = arrayUrl[arrayUrl.length - 2];
        planet.name = input.name;
        planet.climate = input.climate;
        planet.created = input.created;
        planet.diameter = input.diameter;
        planet.gravity = input.gravity;
        planet.url = input.url;
        planet.population = input.population;
        planet.urlFilms = input.films;
        planet.urlResidents = input.residents;
        planet.terrain = input.terrain;
        planet.orbital_period = input.orbital_period;
        planet.pathImage = "assets/imgs/starwars/planets/" + planet.id + ".jpg";
        return planet;
    };
    Planet.prototype.getAssociatedObjects = function (dataService, alertCtrl) {
        this.getAssociatedResidents(dataService, alertCtrl);
        this.getAssociatedFilms(dataService, alertCtrl);
    };
    Planet.prototype.getAssociatedFilms = function (dataService, alertCtrl) {
        var _this = this;
        this.urlFilms.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_2__models_film__["a" /* Film */](), elem)
                .subscribe(function (result) {
                _this.associatedFilms.push(result);
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_3__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    Planet.prototype.getAssociatedResidents = function (dataService, alertCtrl) {
        var _this = this;
        this.urlResidents.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_1__models_people__["a" /* People */](), elem)
                .subscribe(function (result) {
                _this.associatedPeople.push(result);
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_3__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    return Planet;
}(__WEBPACK_IMPORTED_MODULE_0__models_starwars__["a" /* Starwars */]));

//# sourceMappingURL=planet.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = (function () {
    function Event() {
        this.title = "";
        this.date = "";
        this.desc = "";
        this.visible = false;
    }
    Event.jsonToObject = function (input) {
        var event = new Event();
        event.id = input.ID;
        event.title = input.Title;
        event.desc = input.Desc;
        event.visible = false;
        event.date = input.Date;
        return event;
    };
    Event.jsonEventToEventArray = function (input) {
        var objs = [];
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var entry = input_1[_i];
            objs.push(Event.jsonToObject(entry));
        }
        return objs;
    };
    return Event;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultPage; });
var DefaultPage = (function () {
    function DefaultPage(title, ga) {
        var _this = this;
        this.ga = ga;
        this.title = "";
        this.title = title;
        this.ga.startTrackerWithId("UA-111264930-1")
            .then(function () {
            _this.ga.trackView(title);
        })
            .catch(function (e) { return console.log("erreur analytics"); });
    }
    return DefaultPage;
}());

//# sourceMappingURL=defaultPage.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_request__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_error__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
    }
    //
    //Méthode appelé en cas d'erreur
    //
    ChatService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ChatService.prototype.connect = function (mail, username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var self = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].AssosApiUrl + "/chat/connect", { mail: mail, username: username }, options)
            .map(function (res) { return self.statutToRequest(res); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    ChatService.prototype.statutToRequest = function (res) {
        var result = res.json();
        console.log(result);
        if (result.statut == 200) {
            return new __WEBPACK_IMPORTED_MODULE_4__models_request__["b" /* SuccesRequest */](result.content);
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_4__models_request__["a" /* ErrorRequest */](new __WEBPACK_IMPORTED_MODULE_5__models_error__["a" /* ErrorType */](result.statut, result.exception));
            ;
        }
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
//config des apis
var Config = (function () {
    function Config() {
    }
    Config.ApiUrl = "";
    // static AssosApiUrl = "http://127.0.0.1:3000"
    Config.AssosApiUrl = "http://62.210.7.82:443";
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__starwars_tab_starWarsIndex_page_starWarsIndex__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__community_tab_communityIndex_page_communityIndex__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tabStarWarsRoot = __WEBPACK_IMPORTED_MODULE_1__starwars_tab_starWarsIndex_page_starWarsIndex__["a" /* StarWarsIndex */];
        this.tabCommunityRoot = __WEBPACK_IMPORTED_MODULE_2__community_tab_communityIndex_page_communityIndex__["a" /* CommunityIndex */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n\n    <ion-tab [root]="tabStarWarsRoot" tabTitle="StarWars" tabIcon="planet"></ion-tab>\n\n    <ion-tab [root]="tabCommunityRoot" tabTitle="Our community" tabIcon="people"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarWarsIndex; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_starwars_tab_starWarsObject_page_starWarsObject__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_defaultPage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_models_vehicle__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_models_people__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_models_starship__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_models_planet__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_models_film__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_models_specie__ = __webpack_require__(148);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var StarWarsIndex = (function (_super) {
    __extends(StarWarsIndex, _super);
    function StarWarsIndex(navCtrl, ga) {
        var _this = _super.call(this, "Star Wars Univers", ga) || this;
        _this.navCtrl = navCtrl;
        _this.ga = ga;
        return _this;
    }
    StarWarsIndex.prototype.pushVehicles = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_starwars_tab_starWarsObject_page_starWarsObject__["a" /* StarWarsObject */], {
            starWarsObject: new __WEBPACK_IMPORTED_MODULE_5__app_models_vehicle__["a" /* Vehicle */](),
            title: "Vehicles"
        });
    };
    StarWarsIndex.prototype.pushStarShips = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_starwars_tab_starWarsObject_page_starWarsObject__["a" /* StarWarsObject */], {
            starWarsObject: new __WEBPACK_IMPORTED_MODULE_7__app_models_starship__["a" /* Starship */](),
            title: "Starships"
        });
    };
    StarWarsIndex.prototype.pushPlanets = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_starwars_tab_starWarsObject_page_starWarsObject__["a" /* StarWarsObject */], {
            starWarsObject: new __WEBPACK_IMPORTED_MODULE_8__app_models_planet__["a" /* Planet */](),
            title: "Planets"
        });
    };
    StarWarsIndex.prototype.pushFilms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_starwars_tab_starWarsObject_page_starWarsObject__["a" /* StarWarsObject */], {
            starWarsObject: new __WEBPACK_IMPORTED_MODULE_9__app_models_film__["a" /* Film */](),
            title: "Films"
        });
    };
    StarWarsIndex.prototype.pushSpecies = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_starwars_tab_starWarsObject_page_starWarsObject__["a" /* StarWarsObject */], {
            starWarsObject: new __WEBPACK_IMPORTED_MODULE_10__app_models_specie__["a" /* Specie */](),
            title: "Species"
        });
    };
    StarWarsIndex.prototype.pushPeoples = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_starwars_tab_starWarsObject_page_starWarsObject__["a" /* StarWarsObject */], {
            starWarsObject: new __WEBPACK_IMPORTED_MODULE_6__app_models_people__["a" /* People */](),
            title: "Peoples"
        });
    };
    StarWarsIndex.prototype.ngOnInit = function () {
    };
    StarWarsIndex = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-starWarsIndex',template:/*ion-inline-start:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\starwars-tab\starWarsIndex-page\starWarsIndex.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{title}}\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="background">\n\n    <img class="startImg" src=\'assets/imgs/start.png\'/>\n\n    <button ion-button button-royal class="buttonStarwars big margintop"  outline round (click)="pushPlanets()">\n\n      <img class="imgStarwars" src=\'assets/imgs/planet.png\'/>\n\n        <img class="imgStarwars" src=\'assets/imgs/planet2.png\'/>\n\n          <img class="imgStarwars" src=\'assets/imgs/planet3.png\'/>\n\n      <span class="swHomeTitle">Planets</span>\n\n    </button>\n\n    <ion-row>\n\n    <button ion-button button-royal class="buttonStarwars little" outline round  (click)="pushSpecies()">\n\n      <img class="imgStarwars" src=\'assets/imgs/species.png\'/>\n\n      <span class="swHomeTitle">Species</span>\n\n    </button>\n\n    <button ion-button button-royal class="buttonStarwars little" outline round (click)="pushPeoples()">\n\n      <img class="imgStarwars" src=\'assets/imgs/people.png\'/>\n\n      <span class="swHomeTitle">People</span>\n\n    </button>\n\n  </ion-row>\n\n    <button ion-button button-royal class="buttonStarwars big" outline round (click)="pushStarShips()">\n\n      <img class="imgStarwars" src=\'assets/imgs/starship.png\'/>\n\n      <img class="imgStarwars" src=\'assets/imgs/starship3.png\'/>\n\n      <img class="imgStarwars" src=\'assets/imgs/starship4.png\'/>\n\n\n\n      <span class="swHomeTitle">Starships</span>\n\n    </button>\n\n    <button ion-button button-royal class="buttonStarwars little" outline round (click)="pushFilms()">\n\n      <img class="imgStarwars" src=\'assets/imgs/films.png\'/>\n\n      <span class="swHomeTitle">Films</span>\n\n    </button>\n\n    <button ion-button button-royal class="buttonStarwars little" outline round (click)="pushVehicles()">\n\n      <img class="imgStarwars" src=\'assets/imgs/vehicle.png\'/>\n\n      <span class="swHomeTitle">Vehicles</span>\n\n\n\n    </button>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\starwars-tab\starWarsIndex-page\starWarsIndex.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], StarWarsIndex);
    return StarWarsIndex;
}(__WEBPACK_IMPORTED_MODULE_3__pages_defaultPage__["a" /* DefaultPage */]));

//# sourceMappingURL=starWarsIndex.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarWarsObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_starWars_services__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_defaultPage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_starwars_tab_starWarsObjectDetail_page_starWarsObjectDetail__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_factory_starWarsFactory__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var StarWarsObject = (function (_super) {
    __extends(StarWarsObject, _super);
    function StarWarsObject(navCtrl, alertCtrl, navParams, dataService, ga) {
        var _this = _super.call(this, navParams.get('title'), ga) || this;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.navParams = navParams;
        _this.dataService = dataService;
        _this.ga = ga;
        _this.starWarsObjectsList = [];
        _this.starWarsObjectsSearchList = [];
        _this.objectsList = [];
        _this.initialization = true;
        _this.starWarsObject = navParams.get('starWarsObject');
        _this.shouldShowCancel = true;
        _this.lazyEnabled = true;
        _this.searching = false;
        return _this;
    }
    StarWarsObject.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getListObject(this.starWarsObject)
            .subscribe(function (result) {
            _this.starWarsObjectsList = result;
            _this.objectsList = _this.starWarsObjectsList;
            _this.initialization = false;
            _this.lazyEnabled = _this.dataService.isThereMoreDataToLoad();
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_6__app_factory_starWarsFactory__["c" /* presentAlert */])(_this.alertCtrl);
        });
    };
    // go to object detail page
    StarWarsObject.prototype.pushObjectDetail = function (obj, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_starwars_tab_starWarsObjectDetail_page_starWarsObjectDetail__["a" /* StarWarsObjectDetail */], {
            starWarsItem: obj,
            title: name
        });
    };
    // lazy loading
    StarWarsObject.prototype.retrieveMoreFromAPI = function (infiniteScroll) {
        var _this = this;
        this.lazyEnabled = this.dataService.isThereMoreDataToLoad();
        if (this.lazyEnabled) {
            setTimeout(function () {
                _this.dataService.getNextPage(_this.starWarsObject)
                    .subscribe(function (result) {
                    console.log('RESULT', result);
                    result.map(function (e) {
                        console.log(' data x map !!! ');
                        _this.searching ? _this.starWarsObjectsSearchList.push(e) : _this.starWarsObjectsList.push(e);
                    });
                }, function (error) {
                    Object(__WEBPACK_IMPORTED_MODULE_6__app_factory_starWarsFactory__["c" /* presentAlert */])(_this.alertCtrl);
                }, function () {
                    infiniteScroll.complete();
                    _this.objectsList = _this.searching ? _this.starWarsObjectsSearchList : _this.starWarsObjectsList;
                });
            }, 500);
        }
    };
    //search starwars item
    StarWarsObject.prototype.searchItems = function (searchEvent) {
        var _this = this;
        this.searching = true;
        this.starWarsObjectsSearchList = [];
        this.dataService.getSearchResult(this.starWarsObject, this.searchInput)
            .subscribe(function (result) {
            result.map(function (e) {
                _this.starWarsObjectsSearchList.push(e);
            });
        }, function (error) {
            Object(__WEBPACK_IMPORTED_MODULE_6__app_factory_starWarsFactory__["c" /* presentAlert */])(_this.alertCtrl);
        }, function () {
            _this.objectsList = _this.starWarsObjectsSearchList;
            _this.lazyEnabled = _this.dataService.isThereMoreDataToLoad();
        });
    };
    StarWarsObject.prototype.onSearchCanceled_Cleared = function (searchEvent) {
        this.searching = false;
        this.dataService.resetPageInformations();
    };
    StarWarsObject = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-starWarsObject',template:/*ion-inline-start:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\starwars-tab\starWarsObject-page\starWarsObject.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{title}}\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-searchbar *ngIf="!initialization"\n\n        [(ngModel)]="searchInput"\n\n        [showCancelButton]="shouldShowCancel"\n\n        (ionInput)="searchItems($event)"\n\n        (ionCancel)="onSearchCanceled_Cleared($event)"\n\n        (ionClear)="onSearchCanceled_Cleared($event)">\n\n      </ion-searchbar>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding  class="background">\n\n  <div *ngIf="initialization" class="spinner-container">\n\n       <ion-spinner name="bubbles" class="spinner"></ion-spinner>\n\n   </div>\n\n\n\n\n\n\n\n<!--  <ion-list>\n\n  <ion-item *ngFor="let item of starWarsObjectsList | FilterPipe: searchInput">\n\n    <ion-thumbnail item-start>\n\n      <img src="http://www.stickpng.com/assets/thumbs/580b585b2edbce24c47b2d2d.png">\n\n    </ion-thumbnail>\n\n    <p>{{item.url}}{{item.id}}</p>\n\n    <button ion-button clear item-end>View</button>\n\n  </ion-item>\n\n</ion-list>-->\n\n\n\n\n\n     <ion-list class="swList"  style="swObjectsList">\n\n       <ion-item no-lines *ngFor="let item of objectsList " class="itemList" (click)="pushObjectDetail(item, item.name || item.title)" >\n\n     <img item-start class="imgList" src= {{item.pathImage}}>\n\n     <p> {{item.name || item.title}}</p>\n\n   </ion-item>\n\n</ion-list>\n\n\n\n<ion-infinite-scroll (ionInfinite)="retrieveMoreFromAPI($event)" [enabled]="lazyEnabled" >\n\n   <ion-infinite-scroll-content>\n\n   </ion-infinite-scroll-content>\n\n </ion-infinite-scroll>\n\n<!-- <div *ngFor="let item of starWarsObjectsList | FilterPipe: searchInput ">\n\n        <ion-card>\n\n          <img src="http://www.slate.fr/sites/default/files/styles/1090x500/public/starwars.png"/>\n\n          <ion-card-header>\n\n            {{item.name || item.title}}\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <span>{{item.url}}{{item.id}}</span>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      <!--  <div *ngFor="let film of item.films">\n\n            <span>{{film}}</span>\n\n        </div>\n\n    </div>-->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\starwars-tab\starWarsObject-page\starWarsObject.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_starWars_services__["a" /* StarWarsService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], StarWarsObject);
    return StarWarsObject;
}(__WEBPACK_IMPORTED_MODULE_3__pages_defaultPage__["a" /* DefaultPage */]));

//# sourceMappingURL=starWarsObject.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarWarsObjectDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_defaultPage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_starWars_services__ = __webpack_require__(85);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StarWarsObjectDetail = (function (_super) {
    __extends(StarWarsObjectDetail, _super);
    function StarWarsObjectDetail(navCtrl, alertCtrl, navParams, dataService, ga) {
        var _this = _super.call(this, navParams.get('title'), ga) || this;
        _this.navCtrl = navCtrl;
        _this.alertCtrl = alertCtrl;
        _this.navParams = navParams;
        _this.dataService = dataService;
        _this.ga = ga;
        _this.selectedItem_PlanetsList = [];
        _this.selectedItem_StarshipsList = [];
        _this.selectedItem_VehiclesList = [];
        _this.selectedItem_SpeciesList = [];
        _this.selectedItem = navParams.get('starWarsItem');
        _this.objectType = _this.selectedItem.constructor.name.toLowerCase();
        return _this;
        /*this.selectedItem_FilmsList=[];
        this.selectedItem_PeopleList=[];*/
    }
    StarWarsObjectDetail_1 = StarWarsObjectDetail;
    StarWarsObjectDetail.prototype.ngOnInit = function () {
        this.selectedItem.associatedFilms = [];
        this.selectedItem.associatedPeople = [];
        this.selectedItem.associatedSpecies = [];
        this.selectedItem.associatedVehicles = [];
        this.selectedItem.associatedStarships = [];
        this.selectedItem.associatedPlanets = [];
        this.selectedItem.getAssociatedObjects(this.dataService, this.alertCtrl);
        this.selectedItem_FilmsList = this.selectedItem.associatedFilms;
        this.selectedItem_PeopleList = this.selectedItem.associatedPeople;
        this.selectedItem_SpeciesList = this.selectedItem.associatedSpecies;
        this.selectedItem_VehiclesList = this.selectedItem.associatedVehicles;
        this.selectedItem_StarshipsList = this.selectedItem.associatedStarships;
        this.selectedItem_PlanetsList = this.selectedItem.associatedPlanets;
    };
    StarWarsObjectDetail.prototype.goToAssociatedObjectDetail = function (obj, name) {
        this.navCtrl.push(StarWarsObjectDetail_1, {
            starWarsItem: obj,
            title: name
        });
    };
    StarWarsObjectDetail = StarWarsObjectDetail_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-starWarsObjectDetail',template:/*ion-inline-start:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\starwars-tab\starWarsObjectDetail-page\starWarsObjectDetail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="background" >\n\n\n\n  <!--  <ng-template [ngIf]= "isVehicle" >\n\n  <h2> {{selectedItem.name || selectedItem.title }} </h2>\n\n  <strong>Name:</strong><p>{{selectedItem.name}}</p>\n\n  <strong>Cargo Capacity:</strong><p>{{selectedItem.cargo_capacity}}</p>\n\n  <strong>Length:</strong><p>{{selectedItem.length}}</p>\n\n  <strong>Vehicle Class:</strong><p>{{selectedItem.vehicle_class}}</p>\n\n  <strong>Passengers:</strong><p>{{selectedItem.passengers}}</p>\n\n  <strong>Model:</strong><p>{{selectedItem.model}}</p>\n\n  <strong>Manufacturer:</strong><p>{{selectedItem.manufacturer}}</p>\n\n  <strong>Crew:</strong><p>{{selectedItem.crew}}</p>\n\n</ng-template>\n\n-->\n\n<div class="blockInfo">\n\n    <img class="imgDetail" src="assets/imgs/detail.png">\n\n\n\n  <ng-template [ngIf]= "objectType == \'vehicle\'"  >\n\n    <div class="block">\n\n      <strong class="inline">Cargo Capacity: </strong> <p class="inline">{{selectedItem.cargo_capacity}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Length: </strong> <p class="inline">{{selectedItem.length}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Vehicle Class: </strong> <p class="inline">{{selectedItem.vehicle_class}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Passengers: </strong> <p class="inline">{{selectedItem.passengers}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Model: </strong> <p class="inline">{{selectedItem.model}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Crew: </strong> <p class="inline">{{selectedItem.crew}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Manufacturer: </strong> <p class="inline">{{selectedItem.manufacturer}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Cost In Credits: </strong> <p class="inline">{{selectedItem.cost_in_credits}}</p>\n\n    </div>\n\n\n\n  </ng-template>\n\n\n\n  <ng-template [ngIf]= "objectType == \'starship\'" >\n\n    <div class="block">\n\n      <strong class="inline">Model: </strong> <p class="inline">{{selectedItem.model}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Manufacturer: </strong> <p class="inline">{{selectedItem.manufacturer}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Cost In Credits: </strong> <p class="inline">{{selectedItem.cost_in_credits}}</p>\n\n    </div>\n\n  </ng-template>\n\n\n\n  <ng-template [ngIf]= "objectType == \'planet\'" >\n\n    <div class="block">\n\n      <strong class="inline">Climate: </strong> <p class="inline">{{selectedItem.climate}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Created: </strong> <p class="inline">{{selectedItem.created}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Diameter: </strong> <p class="inline">{{selectedItem.diameter}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Gravity: </strong> <p class="inline">{{selectedItem.gravity}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Population: </strong> <p class="inline">{{selectedItem.population}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Terrain: </strong> <p class="inline">{{selectedItem.terrain}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Orbital Period: </strong> <p class="inline">{{selectedItem.orbital_period}}</p>\n\n    </div>\n\n\n\n  </ng-template>\n\n\n\n  <ng-template [ngIf]= "objectType == \'specie\'" >\n\n    <div class="block">\n\n      <strong class="inline">Eye Colors: </strong> <p class="inline">{{selectedItem.eye_colors}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Classification: </strong> <p class="inline">{{selectedItem.classification}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Average Lifespan: </strong> <p class="inline">{{selectedItem.average_lifespan}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Hair Colors: </strong> <p class="inline">{{selectedItem.hair_colors}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Homeworld: </strong> <p class="inline">{{selectedItem.homeworld}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Language: </strong> <p class="inline">{{selectedItem.terrain}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Skin Colors: </strong> <p class="inline">{{selectedItem.skin_colors}}</p>\n\n    </div>\n\n  </ng-template>\n\n\n\n  <ng-template [ngIf]= "objectType == \'people\'" >\n\n    <div class="block">\n\n      <strong class="inline">Gender: </strong> <p class="inline">{{selectedItem.gender}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Birth Year: </strong> <p class="inline">{{selectedItem.birth_year}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Eye Color: </strong> <p class="inline">{{selectedItem.eye_color}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Hair Colors: </strong> <p class="inline">{{selectedItem.hair_color}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Skin Colors: </strong> <p class="inline">{{selectedItem.skin_color}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Homeworld: </strong> <p class="inline">{{selectedItem.homeworld}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Height: </strong> <p class="inline">{{selectedItem.height}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Mass: </strong> <p class="inline">{{selectedItem.mass}}</p>\n\n    </div>\n\n  </ng-template>\n\n\n\n  <ng-template [ngIf]= "objectType == \'film\'" >\n\n    <div class="block">\n\n      <strong class="inline">Director: </strong> <p class="inline">{{selectedItem.director}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Producer: </strong> <p class="inline">{{selectedItem.producer}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Release Date: </strong> <p class="inline">{{selectedItem.release_date}}</p>\n\n    </div>\n\n    <div class="block">\n\n      <strong class="inline">Opening Crawl: </strong> <p>{{selectedItem.opening_crawl}}</p>\n\n    </div>\n\n\n\n  </ng-template>\n\n</div>\n\n\n\n<ng-template [ngIf]= "selectedItem_FilmsList.length > 0" >\n\n  <h1 class="titleList">Films</h1>\n\n<ion-scroll scrollX="true" class="scroll">\n\n  <ion-row nowrap >\n\n  <div class="itemDetailList" *ngFor="let item of selectedItem_FilmsList" class="detailCard" (click)="goToAssociatedObjectDetail(item, item.name || item.title)">\n\n       <p>{{item.title}}</p>\n\n    </div>\n\n    </ion-row>\n\n</ion-scroll>\n\n</ng-template>\n\n\n\n<ng-template [ngIf]= "selectedItem_PeopleList.length > 0" >\n\n<h1 class="title-center">People</h1>\n\n<ion-scroll scrollX="true" class="scroll" >\n\n<ion-row nowrap >\n\n  <div *ngFor="let item of selectedItem_PeopleList" class="detailCard" (click)="goToAssociatedObjectDetail(item, item.name || item.title)">\n\n      <p>{{item.name}}</p>\n\n  </div>\n\n</ion-row>\n\n</ion-scroll>\n\n</ng-template>\n\n\n\n<ng-template [ngIf]= "selectedItem_StarshipsList.length > 0" >\n\n<h1 class="title-center">Starships</h1>\n\n<ion-scroll scrollX="true" class="scroll" >\n\n<ion-row nowrap >\n\n  <div *ngFor="let item of selectedItem_StarshipsList" class="detailCard" (click)="goToAssociatedObjectDetail(item, item.name || item.title)">\n\n      <p>{{item.name}}</p>\n\n  </div>\n\n</ion-row>\n\n</ion-scroll>\n\n</ng-template>\n\n\n\n<ng-template [ngIf]= "selectedItem_SpeciesList.length > 0" >\n\n<h1 class="title-center">Species</h1>\n\n<ion-scroll scrollX="true" class="scroll" >\n\n<ion-row nowrap >\n\n  <div *ngFor="let item of selectedItem_SpeciesList" class="detailCard" (click)="goToAssociatedObjectDetail(item, item.name || item.title)">\n\n      <p>{{item.name}}</p>\n\n  </div>\n\n</ion-row>\n\n</ion-scroll>\n\n</ng-template>\n\n\n\n<ng-template [ngIf]= "selectedItem_PlanetsList.length > 0" >\n\n<h1 class="title-center">Planets</h1>\n\n<ion-scroll scrollX="true" class="scroll" >\n\n<ion-row nowrap >\n\n  <div *ngFor="let item of selectedItem_PlanetsList" class="detailCard" (click)="goToAssociatedObjectDetail(item, item.name || item.title)">\n\n      <p>{{item.name}}</p>\n\n  </div>\n\n</ion-row>\n\n</ion-scroll>\n\n</ng-template>\n\n\n\n<ng-template [ngIf]= "selectedItem_VehiclesList.length > 0" >\n\n<h1 class="title-center">Vehicles</h1>\n\n<ion-scroll scrollX="true" class="scroll" >\n\n<ion-row nowrap >\n\n  <div *ngFor="let item of selectedItem_VehiclesList" class="detailCard" (click)="goToAssociatedObjectDetail(item, item.name || item.title)">\n\n      <p>{{item.name}}</p>\n\n  </div>\n\n</ion-row>\n\n</ion-scroll>\n\n</ng-template>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\starwars-tab\starWarsObjectDetail-page\starWarsObjectDetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__app_services_starWars_services__["a" /* StarWarsService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], StarWarsObjectDetail);
    return StarWarsObjectDetail;
    var StarWarsObjectDetail_1;
}(__WEBPACK_IMPORTED_MODULE_1__pages_defaultPage__["a" /* DefaultPage */]));

//# sourceMappingURL=starWarsObjectDetail.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityIndex; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_community_tab_userLogChat_page_userLogChat__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_community_tab_event_page_event__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_community_tab_aboutUs_page_aboutUs__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_defaultPage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_analytics__ = __webpack_require__(31);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CommunityIndex = (function (_super) {
    __extends(CommunityIndex, _super);
    function CommunityIndex(navCtrl, ga) {
        var _this = _super.call(this, "assos", ga) || this;
        _this.navCtrl = navCtrl;
        _this.ga = ga;
        return _this;
    }
    CommunityIndex.prototype.pushChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_community_tab_userLogChat_page_userLogChat__["a" /* UserLogChat */]);
    };
    CommunityIndex.prototype.pushEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_community_tab_event_page_event__["a" /* EventPage */]);
    };
    CommunityIndex.prototype.pushAboutUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_community_tab_aboutUs_page_aboutUs__["a" /* AboutUs */]);
    };
    CommunityIndex.prototype.ngOnInit = function () {
    };
    CommunityIndex = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-communityIndex',template:/*ion-inline-start:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\community-tab\communityIndex-page\communityIndex.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n\n        <ion-title>\n\n            Community\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="background">\n\n\n\n    <button ion-button color="secondary" class=" littleButton"  outline round (click)="pushEvent()">\n\n        <img class="imgComm" src="assets/imgs/agenda.png"/>\n\n        <span>Events</span>\n\n    </button>\n\n    <button ion-button color="danger" class=" littleButton"  outline round (click)="pushChat()">\n\n        <img class="imgComm" src="assets/imgs/chat.png"/>\n\n        <span>Chat</span>\n\n    </button>\n\n    <button ion-button class=" bigButton" outline round (click)="pushAboutUs()">\n\n        <img class="imgComm" src="assets/imgs/about-us.png"/>\n\n        <span>About Us !</span>\n\n    </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\community-tab\communityIndex-page\communityIndex.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], CommunityIndex);
    return CommunityIndex;
}(__WEBPACK_IMPORTED_MODULE_5__pages_defaultPage__["a" /* DefaultPage */]));

//# sourceMappingURL=communityIndex.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_defaultPage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_community_tab_userLogChat_page_userLogChat__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_analytics__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_models_message__ = __webpack_require__(742);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChatPage = (function (_super) {
    __extends(ChatPage, _super);
    function ChatPage(navCtrl, navParams, socket, ga) {
        var _this = _super.call(this, "chat", ga) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.socket = socket;
        _this.ga = ga;
        _this.messages = [];
        _this.id = '';
        _this.mail = '';
        _this.message = '';
        _this.nickname = "";
        _this.mail = _this.navParams.get('mail');
        _this.id = _this.navParams.get('id');
        _this.nickname = _this.navParams.get('username');
        _this.socket.connect();
        console.log(_this.nickname);
        _this.socket.emit("login", _this.mail);
        _this.returnLogin().subscribe(function (result) {
            if (result == true) {
                console.log(result);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_community_tab_userLogChat_page_userLogChat__["a" /* UserLogChat */], { error: "You are not allowed to access chat" });
            }
        });
        _this.getMessages().subscribe(function (response) {
            console.log(response);
            _this.messages.push(new __WEBPACK_IMPORTED_MODULE_7__app_models_message__["a" /* Message */](response.mail, response.message, response.date, response.username));
        });
        _this.lastMessage().subscribe(function (response) {
            _this.messages = response;
        });
        return _this;
    }
    ChatPage.prototype.popView = function () {
        alert();
        this.navCtrl.pop();
    };
    ChatPage.prototype.connect = function () {
        this.socket.emit("connect", { mail: this.mail });
    };
    ChatPage.prototype.returnLogin = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('returnLogin', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatPage.prototype.lastMessage = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('lastMessage', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatPage.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatPage.prototype.sendMessage = function () {
        this.socket.emit('add-message', new __WEBPACK_IMPORTED_MODULE_7__app_models_message__["a" /* Message */](this.mail, this.message, new Date(), this.nickname));
        this.message = '';
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\community-tab\chat-page\chat.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Join Chat\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="background">\n\n    <ion-grid>\n\n        <ion-row *ngFor="let message of messages">\n\n\n\n            <ion-col col-9 *ngIf="message.username !== nickname" class="message" [ngClass]="{\'my_message\': message.username === nickname, \'other_message\': message.username !== nickname}">\n\n                <span class="user_name">{{ message.username }}:</span><br>\n\n                <span>{{ message.message }}</span>\n\n                <div class="time">{{message.date | date:\'hh:MM dd.MM\'}}</div>\n\n            </ion-col>\n\n\n\n            <ion-col offset-3 col-9 *ngIf="message.username === nickname" class="message" [ngClass]="{\'my_message\': message.username === nickname, \'other_message\': message.username !== nickname}">\n\n                <span class="user_name">{{ message.username }}:</span><br>\n\n                <span>{{ message.message }}</span>\n\n                <div class="time">{{message.date | date:\'hh:MM dd.MM\'}}</div>\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <ion-row class="message_row">\n\n            <ion-col col-9>\n\n                <ion-item no-lines>\n\n                    <ion-input type="text" placeholder="Message" [(ngModel)]="message"></ion-input>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n                <button ion-button clear color="primary" (click)="sendMessage()" [disabled]="message === \'\'">\n\n        Send\n\n      </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\community-tab\chat-page\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], ChatPage);
    return ChatPage;
}(__WEBPACK_IMPORTED_MODULE_4__pages_defaultPage__["a" /* DefaultPage */]));

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_starWars_services__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_defaultPage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_event__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(31);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventPage = (function (_super) {
    __extends(EventPage, _super);
    function EventPage(navCtrl, navParams, dataService, ga) {
        var _this = _super.call(this, "event", ga) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.dataService = dataService;
        _this.ga = ga;
        _this.starWarsObjectsList = [];
        _this.searching = true;
        _this.monevent = new __WEBPACK_IMPORTED_MODULE_4__app_models_event__["a" /* Event */]();
        _this.monevent2 = new __WEBPACK_IMPORTED_MODULE_4__app_models_event__["a" /* Event */]();
        _this.listEvent = [];
        //this.searching = true;
        console.log("searching  " + _this.searching);
        _this.monevent.id = 3;
        _this.monevent.title = "Diffusion the last jedi";
        _this.monevent.desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum.";
        _this.monevent.date = "11 decembre 2017";
        _this.listEvent.push(_this.monevent);
        _this.monevent2.id = 4;
        _this.monevent2.title = "test2 title";
        _this.monevent2.desc = "Lorem2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum.";
        _this.monevent2.date = "12 decembre 2017";
        _this.listEvent.push(_this.monevent2);
        return _this;
    }
    EventPage.prototype.viewMore = function (id) {
        var result = this.listEvent.filter(function (obj) {
            return obj.id == id;
        });
        result[0].visible = true;
        console.log(result);
    };
    EventPage.prototype.viewLess = function (id) {
        var result = this.listEvent.filter(function (obj) {
            return obj.id == id;
        });
        result[0].visible = false;
        console.log(result);
    };
    EventPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getEvents()
            .subscribe(function (result) {
            console.log('event result' + result);
            _this.listEvent = result;
        }),
            function (error) {
                console.log("toto");
                console.log(error);
            };
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-event',template:/*ion-inline-start:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\community-tab\event-page\event.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Community\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <!--<button ion-button (click)="pushChat()">Chat</button>-->\n\n    <div *ngFor="let item of listEvent">\n\n      <div class="entete">\n\n        <div class="title">{{item.title}}</div>\n\n        <div class="date">{{item.date | date: \'dd/MM/yyyy\'}}</div>\n\n      </div>\n\n      <div class="desc" [ngClass]="{ overflow: !item.visible}">\n\n        {{item.desc}}\n\n        <br/>\n\n        <button *ngIf="!item.visible" class="readmore" (click)="viewMore(item.id)">Read more</button>\n\n        <button *ngIf="item.visible" class="readmore" (click)="viewLess(item.id)">Hide</button>\n\n      </div>\n\n    </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\community-tab\event-page\event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_starWars_services__["a" /* StarWarsService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], EventPage);
    return EventPage;
}(__WEBPACK_IMPORTED_MODULE_3__pages_defaultPage__["a" /* DefaultPage */]));

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_community_tab_contactUs_page_contactUs__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_defaultPage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__ = __webpack_require__(391);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AboutUs = (function (_super) {
    __extends(AboutUs, _super);
    function AboutUs(navCtrl, ga, app) {
        var _this = _super.call(this, "About Us", ga) || this;
        _this.navCtrl = navCtrl;
        _this.ga = ga;
        _this.app = app;
        return _this;
    }
    AboutUs.prototype.pushContactUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_community_tab_contactUs_page_contactUs__["a" /* ContactUs */]);
    };
    AboutUs.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var appVersion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.app.getVersionNumber()];
                    case 1:
                        appVersion = _a.sent();
                        this.version = appVersion;
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutUs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aboutUs',template:/*ion-inline-start:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\community-tab\aboutUs-page\aboutUs.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title id="navAboutUs">\n\n            {{title}}\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="background">\n\n    <ion-thumbnail>\n\n        <img id="logo-asso" src="assets/imgs/logo-asso.png">\n\n    </ion-thumbnail>\n\n\n\n    <ion-label id="headerAbout">\n\n        <h1>Star Wars Association</h1>\n\n    </ion-label>\n\n  \n\n    <div class="cardAboutUs">  \n\n        \n\n        <ion-card-content>\n\n        <br>\n\n        Star Wars Association is a fan club about Lucasfilm\'s worldwide Star Wars.<br>\n\n        The Club required a regular subscription fee for membership. Membership gave subscribers special privileges.<br>\n\n        \n\n        Members can meet each other in special evenings to talk about this wonderful saga, play in roleplay games or trade collection items.<br>\n\n        \n\n        But members were also able to have exclusive price to go to big events : Comic Con, Star Wars Day, etc.<br>\n\n        \n\n        Any question about the association ? Don’t hesitate to contact us and it’ll be a pleasure to answer you.\n\n        </ion-card-content>\n\n    </div>\n\n    \n\n    <div id="buttonAboutUs">\n\n        <button ion-button outline round (click)="pushContactUs()">Contact Us !</button>\n\n        \n\n    </div>\n\n    <label id="label-version">V {{ version }}</label>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\community-tab\aboutUs-page\aboutUs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__["a" /* AppVersion */]])
    ], AboutUs);
    return AboutUs;
}(__WEBPACK_IMPORTED_MODULE_3__pages_defaultPage__["a" /* DefaultPage */]));

//# sourceMappingURL=aboutUs.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_defaultPage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(31);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactUs = (function (_super) {
    __extends(ContactUs, _super);
    function ContactUs(navCtrl, ga) {
        var _this = _super.call(this, "Contact Us", ga) || this;
        _this.navCtrl = navCtrl;
        _this.ga = ga;
        _this.spinnerLoading = true;
        return _this;
    }
    ContactUs.prototype.onLoad = function () {
        this.spinnerLoading = false;
    };
    ContactUs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contactUs',template:/*ion-inline-start:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\community-tab\contactUs-page\contactUs.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{title}}\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div *ngIf="spinnerLoading" class="spinner-container">\n\n        <ion-spinner name="bubbles"></ion-spinner>\n\n    </div>\n\n    <iframe (load)="onLoad()" class="gForm" src="https://docs.google.com/forms/d/1qlGpoUA4WzOY58_eoQ1JX-iRJGcgCM8VnPdrkqUIbuI/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Chargement en cours...</iframe>\n\n</ion-content>'/*ion-inline-end:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\pages\community-tab\contactUs-page\contactUs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], ContactUs);
    return ContactUs;
}(__WEBPACK_IMPORTED_MODULE_2__pages_defaultPage__["a" /* DefaultPage */]));

//# sourceMappingURL=contactUs.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(397);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_starWars_services__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_chat_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_starwars_tab_starWarsObject_page_starWarsObject__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_starwars_tab_starWarsObjectDetail_page_starWarsObjectDetail__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_starwars_tab_starWarsIndex_page_starWarsIndex__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_community_tab_communityIndex_page_communityIndex__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_community_tab_chat_page_chat__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_community_tab_userLogChat_page_userLogChat__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_community_tab_event_page_event__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_community_tab_aboutUs_page_aboutUs__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_community_tab_contactUs_page_contactUs__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_analytics__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng_socket_io__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__config__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_app_version__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var config = { url: __WEBPACK_IMPORTED_MODULE_21__config__["a" /* Config */].AssosApiUrl, options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_starwars_tab_starWarsIndex_page_starWarsIndex__["a" /* StarWarsIndex */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_starwars_tab_starWarsObject_page_starWarsObject__["a" /* StarWarsObject */],
                __WEBPACK_IMPORTED_MODULE_11__pages_community_tab_communityIndex_page_communityIndex__["a" /* CommunityIndex */],
                __WEBPACK_IMPORTED_MODULE_12__pages_community_tab_chat_page_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_community_tab_userLogChat_page_userLogChat__["a" /* UserLogChat */],
                __WEBPACK_IMPORTED_MODULE_14__pages_community_tab_event_page_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_community_tab_aboutUs_page_aboutUs__["a" /* AboutUs */],
                __WEBPACK_IMPORTED_MODULE_9__pages_starwars_tab_starWarsObjectDetail_page_starWarsObjectDetail__["a" /* StarWarsObjectDetail */],
                __WEBPACK_IMPORTED_MODULE_16__pages_community_tab_contactUs_page_contactUs__["a" /* ContactUs */],
            ],
            exports: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_starwars_tab_starWarsIndex_page_starWarsIndex__["a" /* StarWarsIndex */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_starwars_tab_starWarsObject_page_starWarsObject__["a" /* StarWarsObject */],
                __WEBPACK_IMPORTED_MODULE_11__pages_community_tab_communityIndex_page_communityIndex__["a" /* CommunityIndex */],
                __WEBPACK_IMPORTED_MODULE_12__pages_community_tab_chat_page_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_community_tab_userLogChat_page_userLogChat__["a" /* UserLogChat */],
                __WEBPACK_IMPORTED_MODULE_9__pages_starwars_tab_starWarsObjectDetail_page_starWarsObjectDetail__["a" /* StarWarsObjectDetail */],
                __WEBPACK_IMPORTED_MODULE_14__pages_community_tab_event_page_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_community_tab_aboutUs_page_aboutUs__["a" /* AboutUs */],
                __WEBPACK_IMPORTED_MODULE_16__pages_community_tab_contactUs_page_contactUs__["a" /* ContactUs */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_starWars_services__["a" /* StarWarsService */],
                __WEBPACK_IMPORTED_MODULE_6__services_chat_service__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_app_version__["a" /* AppVersion */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = jsonArrayToObjectArray;
/* harmony export (immutable) */ __webpack_exports__["b"] = jsonToObject;
/* harmony export (immutable) */ __webpack_exports__["c"] = presentAlert;
/* unused harmony export version */
function jsonArrayToObjectArray(input, sw) {
    var objs = [];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var entry = input_1[_i];
        objs.push(jsonToObject(entry, sw));
    }
    return objs;
}
function jsonToObject(input, sw) {
    return sw.jsonToObject(input);
}
function presentAlert(alertCtrl) {
    var alert = alertCtrl.create({
        title: 'Starwars Alert',
        subTitle: '\n The Dark Side has blocked your request. Please wait Rebel Alliance to continue or try again later !',
        buttons: ['Dismiss']
    });
    alert.present();
}
var version = "Version 1.0.0";
//# sourceMappingURL=starWarsFactory.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return People; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_starwars__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_vehicle__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_specie__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_film__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__factory_starWarsFactory__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var People = (function (_super) {
    __extends(People, _super);
    function People() {
        var _this = _super.call(this) || this;
        _this.name = "";
        _this.gender = "";
        _this.birth_year = "";
        _this.eye_color = "";
        _this.hair_color = "";
        _this.urlFilms = [];
        _this.urlSpecies = [];
        _this.urlVehicles = [];
        _this.homeworld = "";
        _this.height = "";
        _this.mass = "";
        _this.skin_color = "";
        _this.associatedFilms = [];
        _this.associatedVehicles = [];
        _this.associatedSpecies = [];
        return _this;
    }
    People.prototype.jsonToObject = function (input) {
        var people = new People();
        var arrayUrl = input.url.split("/");
        people.id = arrayUrl[arrayUrl.length - 2];
        people.name = input.name;
        people.birth_year = input.birth_year;
        people.eye_color = input.eye_color;
        people.gender = input.gender;
        people.hair_color = input.hair_color;
        people.url = input.url;
        people.urlFilms = input.films;
        people.urlSpecies = input.species;
        people.urlVehicles = input.vehicles;
        people.homeworld = input.homeworld;
        people.height = input.height;
        people.mass = input.mass;
        people.skin_color = input.skin_color;
        people.pathImage = "assets/imgs/starwars/people/" + people.id + ".jpg";
        return people;
    };
    People.prototype.getAssociatedObjects = function (dataService, alertCtrl) {
        this.getAssociatedFilms(dataService, alertCtrl);
        this.getAssociatedSpecies(dataService, alertCtrl);
        this.getAssociatedVehicles(dataService, alertCtrl);
    };
    People.prototype.getAssociatedFilms = function (dataService, alertCtrl) {
        var _this = this;
        this.urlFilms.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_3__models_film__["a" /* Film */](), elem)
                .subscribe(function (result) {
                _this.associatedFilms.push(result);
                //console.log('RESULT !!! ' + JSON.stringify(result));
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_4__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    People.prototype.getAssociatedSpecies = function (dataService, alertCtrl) {
        var _this = this;
        this.urlSpecies.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_2__models_specie__["a" /* Specie */](), elem)
                .subscribe(function (result) {
                _this.associatedSpecies.push(result);
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_4__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    People.prototype.getAssociatedVehicles = function (dataService, alertCtrl) {
        var _this = this;
        this.urlVehicles.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_1__models_vehicle__["a" /* Vehicle */](), elem)
                .subscribe(function (result) {
                _this.associatedVehicles.push(result);
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_4__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    return People;
}(__WEBPACK_IMPORTED_MODULE_0__models_starwars__["a" /* Starwars */]));

//# sourceMappingURL=people.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Starwars; });
var Starwars = (function () {
    function Starwars() {
        this.url = "";
        this.id = "";
        this.pathImage = "";
    }
    Starwars.prototype.jsonToObject = function (input) {
        throw "not implemented";
    };
    ;
    Starwars.prototype.getAssociatedObjects = function (dataService, alertCtrl) {
        throw "not implemented";
    };
    ;
    return Starwars;
}());

//# sourceMappingURL=starwars.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Film; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_starwars__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_people__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_starship__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_vehicle__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_specie__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_planet__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__factory_starWarsFactory__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var Film = (function (_super) {
    __extends(Film, _super);
    function Film() {
        var _this = _super.call(this) || this;
        _this.title = "";
        _this.director = "";
        _this.producer = "";
        _this.release_date = "";
        _this.opening_crawl = "";
        _this.urlCharacters = [];
        _this.urlPlanets = [];
        _this.urlStarships = [];
        _this.urlVehicles = [];
        _this.urlSpecies = [];
        _this.associatedPeople = [];
        _this.associatedPlanets = [];
        _this.associatedStarships = [];
        _this.associatedVehicles = [];
        _this.associatedSpecies = [];
        return _this;
    }
    Film.prototype.jsonToObject = function (input) {
        var film = new Film();
        var arrayUrl = input.url.split("/");
        film.id = arrayUrl[arrayUrl.length - 2];
        film.title = input.title;
        film.director = input.director;
        film.producer = input.producer;
        film.release_date = input.release_date;
        film.url = input.url;
        film.opening_crawl = input.opening_crawl;
        film.urlCharacters = input.characters;
        film.urlPlanets = input.planets;
        film.urlStarships = input.starships;
        film.urlVehicles = input.vehicles;
        film.urlSpecies = input.species;
        film.pathImage = "assets/imgs/starwars/films/" + film.id + ".jpg";
        return film;
    };
    Film.prototype.getAssociatedObjects = function (dataService, alertCtrl) {
        /*  console.log('URLS !!! ' + this.urlPilots);
              console.log('id  '+ this.id);*/
        this.getAssociatedPilots(dataService, alertCtrl);
        this.getAssociatedPlanets(dataService, alertCtrl);
        this.getAssociatedStarships(dataService, alertCtrl);
        this.getAssociatedSpecies(dataService, alertCtrl);
        this.getAssociatedVehicles(dataService, alertCtrl);
    };
    Film.prototype.getAssociatedPilots = function (dataService, alertCtrl) {
        var _this = this;
        this.urlCharacters.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_1__models_people__["a" /* People */](), elem)
                .subscribe(function (result) {
                _this.associatedPeople.push(result);
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_6__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    Film.prototype.getAssociatedPlanets = function (dataService, alertCtrl) {
        var _this = this;
        this.urlPlanets.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_5__models_planet__["a" /* Planet */](), elem)
                .subscribe(function (result) {
                _this.associatedPlanets.push(result);
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_6__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    Film.prototype.getAssociatedStarships = function (dataService, alertCtrl) {
        var _this = this;
        this.urlStarships.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_2__models_starship__["a" /* Starship */](), elem)
                .subscribe(function (result) {
                _this.associatedStarships.push(result);
            }),
                function (error) {
                    Object(__WEBPACK_IMPORTED_MODULE_6__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
                };
        });
    };
    Film.prototype.getAssociatedSpecies = function (dataService, alertCtrl) {
        var _this = this;
        this.urlSpecies.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_4__models_specie__["a" /* Specie */](), elem)
                .subscribe(function (result) {
                _this.associatedSpecies.push(result);
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_6__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    Film.prototype.getAssociatedVehicles = function (dataService, alertCtrl) {
        var _this = this;
        this.urlVehicles.map(function (elem) {
            dataService.getObjectByUrl(new __WEBPACK_IMPORTED_MODULE_3__models_vehicle__["a" /* Vehicle */](), elem)
                .subscribe(function (result) {
                _this.associatedVehicles.push(result);
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_6__factory_starWarsFactory__["c" /* presentAlert */])(alertCtrl);
            });
        });
    };
    return Film;
}(__WEBPACK_IMPORTED_MODULE_0__models_starwars__["a" /* Starwars */]));

//# sourceMappingURL=film.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Request */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SuccesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorRequest; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Request = (function () {
    function Request() {
        this.statut = null;
    }
    return Request;
}());

var SuccesRequest = (function (_super) {
    __extends(SuccesRequest, _super);
    function SuccesRequest(content) {
        var _this = _super.call(this) || this;
        _this.statut = 200;
        _this.content = content;
        return _this;
    }
    return SuccesRequest;
}(Request));

var ErrorRequest = (function (_super) {
    __extends(ErrorRequest, _super);
    function ErrorRequest(exception) {
        var _this = _super.call(this) || this;
        _this.statut = exception.id;
        _this.exception = exception.exception;
        return _this;
    }
    return ErrorRequest;
}(Request));

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorType; });
var ErrorType = (function () {
    function ErrorType(id, exception) {
        this.id = id;
        this.exception = exception;
    }
    return ErrorType;
}());

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\pc\Documents\ynov\js\alvin\starwars2\starwars\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(mail, message, date, username) {
        this.mail = mail;
        this.message = message;
        this.date = date;
        this.username = username;
    }
    return Message;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarWarsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_people__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_event__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__factory_starWarsFactory__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StarWarsService = (function () {
    function StarWarsService(http) {
        this.http = http;
        this.lastPage = 0;
        this.nextPageUrl = "";
        this.principalNextPageUrl = "";
        this.currentPage = 0;
    }
    //
    //Méthode appelé en cas d'erreur
    //
    /*private handleError(error: Response | any) {
        console.log(error);
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }*/
    /*
        this.alert = this.alertCtrl.create({
                title: "Starwars Alert",
                subTitle: 'The Dark Side has blocked your request, try again later in more safe conditions !!!',
                buttons: ["close"]
        });
        //console.log('ALEEEERRRT   ' + this.alert);
    
        return this.alert.present();*/
    //
    //Permet de récupèrer une liste d'objet
    //
    StarWarsService.prototype.getListObject = function (obj) {
        var _this = this;
        var urlRequest = obj.constructor.name.toLowerCase();
        if (urlRequest != "people") {
            urlRequest += "s";
        }
        urlRequest = "https://swapi.co/api/" + urlRequest;
        this.currentPage = 1;
        return this.http.get(urlRequest)
            .map(function (response) {
            _this.nextPageUrl = response.json()["next"];
            _this.principalNextPageUrl = _this.nextPageUrl;
            _this.lastPage = Math.ceil(response.json()["count"] / 10);
            return Object(__WEBPACK_IMPORTED_MODULE_4__factory_starWarsFactory__["a" /* jsonArrayToObjectArray */])(response.json()["results"], obj);
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw('an error has occured !'); });
    };
    //
    //Permet de récupèrer un object en fonction de son URL
    //
    StarWarsService.prototype.getObjectByUrl = function (obj, url) {
        return this.http.get(url + 'toto')
            .map(function (response) {
            console.log('OBJET PLANET ??? ' + response.json());
            return Object(__WEBPACK_IMPORTED_MODULE_4__factory_starWarsFactory__["b" /* jsonToObject */])(response.json(), obj);
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw('an error has occured !'); });
    };
    //
    //Permet de récupèrer un object en fonction de son URL
    //
    StarWarsService.prototype.getEvents = function () {
        return this.http.post('http://62.210.7.82:443/event/', {}, null)
            .map(function (response) {
            console.log(response.json()["content"]);
            //return response.json()["content"];
            return __WEBPACK_IMPORTED_MODULE_3__models_event__["a" /* Event */].jsonEventToEventArray(response.json()["content"]);
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw('an error has occured !'); });
    };
    StarWarsService.prototype.getPage = function (pageNumber) {
        this.currentPage = pageNumber;
        return this.http.get("https://swapi.co/api/people/?page=" + pageNumber)
            .map(function (response) {
            return Object(__WEBPACK_IMPORTED_MODULE_4__factory_starWarsFactory__["a" /* jsonArrayToObjectArray */])(response.json()["results"], new __WEBPACK_IMPORTED_MODULE_2__models_people__["a" /* People */]());
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw('an error has occured !'); });
    };
    StarWarsService.prototype.getCurrentPage = function () {
        return this.currentPage;
    };
    StarWarsService.prototype.getLastPage = function () {
        return this.lastPage;
    };
    //prevenir un crash de l'appli si il n'y a pas d'autres pages à lire
    StarWarsService.prototype.isThereMoreDataToLoad = function () {
        //return this.lastPage != this.currentPage;
        console.log('MORE DATA ???   ' + this.nextPageUrl);
        return this.nextPageUrl != null;
    };
    StarWarsService.prototype.getNextPage = function (obj) {
        //let urlRequest = obj.constructor.name.toLowerCase();
        var _this = this;
        this.lastPage < 2 ? this.currentPage = 1 : this.currentPage++;
        console.log('current/last page  ' + this.currentPage + '/' + this.lastPage);
        //console.log(' next page URL !  '+ this.nextPageUrl);
        return this.http.get(this.nextPageUrl)
            .map(function (response) {
            //console.log('JSON nb objects!!!  '+ response.json()["count"]);
            _this.nextPageUrl = response.json()["next"];
            return Object(__WEBPACK_IMPORTED_MODULE_4__factory_starWarsFactory__["a" /* jsonArrayToObjectArray */])(response.json()["results"], obj);
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw('an error has occured !'); });
    };
    // recherche un item starwars à partir d'un type
    StarWarsService.prototype.getSearchResult = function (obj, keyWord) {
        var _this = this;
        var searchObject = obj.constructor.name.toLowerCase();
        if (searchObject != "people") {
            searchObject += "s";
        }
        this.currentPage = 1;
        return this.http.get("https://swapi.co/api/" + searchObject + "/?search=" + keyWord)
            .map(function (response) {
            //console.log('JSON !!!  '+ jsonArrayToObjectArray(response.json()["results"],obj));
            _this.nextPageUrl = response.json()["next"];
            _this.lastPage = Math.ceil(response.json()["count"] / 10);
            return Object(__WEBPACK_IMPORTED_MODULE_4__factory_starWarsFactory__["a" /* jsonArrayToObjectArray */])(response.json()["results"], obj);
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw('an error has occured !'); });
    };
    StarWarsService.prototype.resetPageInformations = function () {
        this.currentPage = 1;
        this.nextPageUrl = this.principalNextPageUrl;
    };
    StarWarsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], StarWarsService);
    return StarWarsService;
}());

//# sourceMappingURL=starWars.services.js.map

/***/ })

},[392]);
//# sourceMappingURL=main.js.map