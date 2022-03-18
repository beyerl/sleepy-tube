"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_player_player_module_ts"],{

/***/ 8110:
/*!**********************************!*\
  !*** ./src/app/helpers/utils.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNil": () => (/* binding */ isNil)
/* harmony export */ });
const isNil = (value) => {
    return value === null || typeof value == 'undefined';
};


/***/ }),

/***/ 2478:
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageComponent": () => (/* binding */ MessageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _message_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.component.html?ngResource */ 2679);
/* harmony import */ var _message_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.component.scss?ngResource */ 8228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let MessageComponent = class MessageComponent {
    constructor() { }
    ngOnInit() { }
    isIos() {
        const win = window;
        return win && win.Ionic && win.Ionic.mode === 'ios';
    }
};
MessageComponent.ctorParameters = () => [];
MessageComponent.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
MessageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-message',
        template: _message_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_message_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MessageComponent);



/***/ }),

/***/ 2770:
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageComponentModule": () => (/* binding */ MessageComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.component */ 2478);







let MessageComponentModule = class MessageComponentModule {
};
MessageComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
        declarations: [_message_component__WEBPACK_IMPORTED_MODULE_0__.MessageComponent],
        exports: [_message_component__WEBPACK_IMPORTED_MODULE_0__.MessageComponent]
    })
], MessageComponentModule);



/***/ }),

/***/ 1490:
/*!**********************************************!*\
  !*** ./src/app/pipes/minute-seconds.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinuteSecondsPipe": () => (/* binding */ MinuteSecondsPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utils */ 8110);



let MinuteSecondsPipe = class MinuteSecondsPipe {
    transform(value) {
        if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isNil)(value))
            return "";
        const minutes = Math.floor(value / 60);
        const seconds = value - minutes * 60;
        const secondsString = seconds >= 10 ? seconds.toString() : "0" + seconds.toString();
        return minutes + ':' + secondsString;
    }
};
MinuteSecondsPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'minuteSeconds'
    })
], MinuteSecondsPipe);



/***/ }),

/***/ 9849:
/*!*************************************************!*\
  !*** ./src/app/player/player-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerPageRoutingModule": () => (/* binding */ PlayerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _player_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.page */ 636);




const routes = [
    {
        path: '',
        component: _player_page__WEBPACK_IMPORTED_MODULE_0__.PlayerPage
    }
];
let PlayerPageRoutingModule = class PlayerPageRoutingModule {
};
PlayerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlayerPageRoutingModule);



/***/ }),

/***/ 8133:
/*!*****************************************!*\
  !*** ./src/app/player/player.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerPageModule": () => (/* binding */ PlayerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _player_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.page */ 636);
/* harmony import */ var _player_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-routing.module */ 9849);
/* harmony import */ var _message_message_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message/message.module */ 2770);
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/youtube-player */ 7492);
/* harmony import */ var _pipes_minute_seconds_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/minute-seconds.pipe */ 1490);










let PlayerPageModule = class PlayerPageModule {
};
PlayerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _message_message_module__WEBPACK_IMPORTED_MODULE_2__.MessageComponentModule,
            _player_routing_module__WEBPACK_IMPORTED_MODULE_1__.PlayerPageRoutingModule,
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__.YouTubePlayerModule
        ],
        declarations: [_player_page__WEBPACK_IMPORTED_MODULE_0__.PlayerPage, _pipes_minute_seconds_pipe__WEBPACK_IMPORTED_MODULE_3__.MinuteSecondsPipe]
    })
], PlayerPageModule);



/***/ }),

/***/ 636:
/*!***************************************!*\
  !*** ./src/app/player/player.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerPage": () => (/* binding */ PlayerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _player_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.page.html?ngResource */ 9023);
/* harmony import */ var _player_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.page.scss?ngResource */ 9211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/utils */ 8110);
/* harmony import */ var _services_key_value_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/key-value-store.service */ 9168);






let apiLoaded = false;
let PlayerPage = class PlayerPage {
    constructor(keyValueStoreService) {
        this.keyValueStoreService = keyValueStoreService;
        // constants
        this.playerWidth = window.innerWidth;
        this.playerheight = 200;
        this.SKIP_TIME_IN_SECONDS = 30;
        this.SECONDS_PER_MINUTE = 60;
    }
    ngOnInit() {
        if (!apiLoaded) {
            // This code loads the IFrame Player API code asynchronously, according to the instructions at
            // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
            apiLoaded = true;
        }
    }
    ngAfterViewInit() {
        const ro = new ResizeObserver(entries => {
            for (let entry of entries) {
                this.playerWidth = entry.contentRect.width;
            }
        });
        // Observe one or multiple elements
        ro.observe(document.getElementById("player-row"));
    }
    onOpen(videoId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const currentTimeFromStore = this.keyValueStoreService.get(videoId);
            if (currentTimeFromStore) {
                this.startSeconds = currentTimeFromStore;
            }
            this.videoId = videoId;
        });
    }
    onPlay() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (!(0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isNil)(this.videoPlayerIntervalId)) {
                clearInterval(this.videoPlayerIntervalId);
            }
            this.youtubePlayer.playVideo();
            this.videoPlayerIntervalId = setInterval(() => this.keyValueStoreService.set(this.videoId, Math.round(this.youtubePlayer.getCurrentTime())), 5000);
        });
    }
    onPause() {
        this.youtubePlayer.pauseVideo();
        this.keyValueStoreService.set(this.videoId, Math.round(this.youtubePlayer.getCurrentTime()));
        if (!(0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isNil)(this.videoPlayerIntervalId)) {
            clearInterval(this.videoPlayerIntervalId);
        }
    }
    onSkipForward() {
        this.youtubePlayer.seekTo(Math.round(this.youtubePlayer.getCurrentTime()) + this.SKIP_TIME_IN_SECONDS, true);
    }
    onSkipBackward() {
        this.youtubePlayer.seekTo(Math.round(this.youtubePlayer.getCurrentTime()) - this.SKIP_TIME_IN_SECONDS, true);
    }
    onTimerStart(timeout) {
        if (!(0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isNil)(this.timeoutIntervalId)) {
            clearInterval(this.timeoutIntervalId);
        }
        this.youtubePlayer.playVideo();
        this.timeout = timeout; // * this.SECONDS_PER_MINUTE
        this.timeoutIntervalId = setInterval(() => {
            if (this.timeout > 0) {
                this.timeout--;
            }
            else {
                clearInterval(this.timeoutIntervalId);
                this.youtubePlayer.pauseVideo();
            }
        }, 1000);
    }
};
PlayerPage.ctorParameters = () => [
    { type: _services_key_value_store_service__WEBPACK_IMPORTED_MODULE_3__.KeyValueStoreService }
];
PlayerPage.propDecorators = {
    youtubePlayer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['youtubePlayer',] }]
};
PlayerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-player',
        template: _player_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_player_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlayerPage);



/***/ }),

/***/ 9168:
/*!*****************************************************!*\
  !*** ./src/app/services/key-value-store.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyValueStoreService": () => (/* binding */ KeyValueStoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utils */ 8110);



let KeyValueStoreService = class KeyValueStoreService {
    constructor() { }
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    get(key) {
        const value = localStorage.getItem(key);
        if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.isNil)(value))
            return null;
        return JSON.parse(value);
    }
    clear() {
        localStorage.clear();
    }
    delete(key) {
        localStorage.removeItem(key);
    }
};
KeyValueStoreService.ctorParameters = () => [];
KeyValueStoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], KeyValueStoreService);



/***/ }),

/***/ 7270:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/fromEventPattern.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEventPattern": () => (/* binding */ fromEventPattern)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ 4327);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isFunction */ 1900);
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operators/map */ 6942);




function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe((0,_operators_map__WEBPACK_IMPORTED_MODULE_0__.map)(args => (0,_util_isArray__WEBPACK_IMPORTED_MODULE_1__.isArray)(args) ? resultSelector(...args) : resultSelector(args)));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
        const handler = (...e) => subscriber.next(e.length === 1 ? e[0] : e);
        let retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(removeHandler)) {
            return undefined;
        }
        return () => removeHandler(handler, retValue);
    });
}


/***/ }),

/***/ 7067:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/combineLatest.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "combineLatest": () => (/* binding */ combineLatest)
/* harmony export */ });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isArray */ 4327);
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/combineLatest */ 9193);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/from */ 4383);



const none = {};
function combineLatest(...observables) {
    let project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    if (observables.length === 1 && (0,_util_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(observables[0])) {
        observables = observables[0].slice();
    }
    return (source) => source.lift.call((0,_observable_from__WEBPACK_IMPORTED_MODULE_1__.from)([source, ...observables]), new _observable_combineLatest__WEBPACK_IMPORTED_MODULE_2__.CombineLatestOperator(project));
}


/***/ }),

/***/ 9708:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/publish.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "publish": () => (/* binding */ publish)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subject */ 2218);
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multicast */ 2787);


function publish(selector) {
    return selector ?
        (0,_multicast__WEBPACK_IMPORTED_MODULE_0__.multicast)(() => new _Subject__WEBPACK_IMPORTED_MODULE_1__.Subject(), selector) :
        (0,_multicast__WEBPACK_IMPORTED_MODULE_0__.multicast)(new _Subject__WEBPACK_IMPORTED_MODULE_1__.Subject());
}


/***/ }),

/***/ 4671:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/skipWhile.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skipWhile": () => (/* binding */ skipWhile)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 14);

function skipWhile(predicate) {
    return (source) => source.lift(new SkipWhileOperator(predicate));
}
class SkipWhileOperator {
    constructor(predicate) {
        this.predicate = predicate;
    }
    call(subscriber, source) {
        return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
    }
}
class SkipWhileSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination, predicate) {
        super(destination);
        this.predicate = predicate;
        this.skipping = true;
        this.index = 0;
    }
    _next(value) {
        const destination = this.destination;
        if (this.skipping) {
            this.tryCallPredicate(value);
        }
        if (!this.skipping) {
            destination.next(value);
        }
    }
    tryCallPredicate(value) {
        try {
            const result = this.predicate(value, this.index++);
            this.skipping = Boolean(result);
        }
        catch (err) {
            this.destination.error(err);
        }
    }
}


/***/ }),

/***/ 5921:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 2831);

function takeUntil(notifier) {
    return (source) => source.lift(new TakeUntilOperator(notifier));
}
class TakeUntilOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        const notifierSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    }
}
class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
    constructor(destination) {
        super(destination);
        this.seenValue = false;
    }
    notifyNext() {
        this.seenValue = true;
        this.complete();
    }
    notifyComplete() {
    }
}


/***/ }),

/***/ 1745:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/withLatestFrom.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withLatestFrom": () => (/* binding */ withLatestFrom)
/* harmony export */ });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ 5266);
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ 640);


function withLatestFrom(...args) {
    return (source) => {
        let project;
        if (typeof args[args.length - 1] === 'function') {
            project = args.pop();
        }
        const observables = args;
        return source.lift(new WithLatestFromOperator(observables, project));
    };
}
class WithLatestFromOperator {
    constructor(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    call(subscriber, source) {
        return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    }
}
class WithLatestFromSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__.OuterSubscriber {
    constructor(destination, observables, project) {
        super(destination);
        this.observables = observables;
        this.project = project;
        this.toRespond = [];
        const len = observables.length;
        this.values = new Array(len);
        for (let i = 0; i < len; i++) {
            this.toRespond.push(i);
        }
        for (let i = 0; i < len; i++) {
            let observable = observables[i];
            this.add((0,_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__.subscribeToResult)(this, observable, undefined, i));
        }
    }
    notifyNext(_outerValue, innerValue, outerIndex) {
        this.values[outerIndex] = innerValue;
        const toRespond = this.toRespond;
        if (toRespond.length > 0) {
            const found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
                toRespond.splice(found, 1);
            }
        }
    }
    notifyComplete() {
    }
    _next(value) {
        if (this.toRespond.length === 0) {
            const args = [value, ...this.values];
            if (this.project) {
                this._tryProject(args);
            }
            else {
                this.destination.next(args);
            }
        }
    }
    _tryProject(args) {
        let result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    }
}


/***/ }),

/***/ 8228:
/*!***********************************************************!*\
  !*** ./src/app/message/message.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\nion-label {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\nion-item h2 {\n  font-weight: 600;\n  margin: 0;\n}\n\nion-item p {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 95%;\n}\n\nion-item .date {\n  float: right;\n  align-items: center;\n  display: flex;\n}\n\nion-item ion-icon {\n  color: #c9c9ca;\n}\n\nion-item ion-note {\n  font-size: 15px;\n  margin-right: 8px;\n  font-weight: normal;\n}\n\nion-item ion-note.md {\n  margin-right: 14px;\n}\n\n.dot {\n  display: block;\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  align-self: start;\n  margin: 16px 10px 16px 16px;\n}\n\n.dot-unread {\n  background: var(--ion-color-primary);\n}\n\nion-footer ion-title {\n  font-size: 11px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5pb24taXRlbSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWl0ZW0gcCB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogOTUlO1xufVxuXG5pb24taXRlbSAuZGF0ZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogI2M5YzljYTtcbn1cblxuaW9uLWl0ZW0gaW9uLW5vdGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5pb24taXRlbSBpb24tbm90ZS5tZCB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbn1cblxuLmRvdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBtYXJnaW46IDE2cHggMTBweCAxNnB4IDE2cHg7XG59XG5cbi5kb3QtdW5yZWFkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tZm9vdGVyIGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0iXX0= */";

/***/ }),

/***/ 9211:
/*!****************************************************!*\
  !*** ./src/app/player/player.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5ZXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2679:
/*!***********************************************************!*\
  !*** ./src/app/message/message.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-item *ngIf=\"message\" [routerLink]=\"'/message/' + message.id\" [detail]=\"false\">\n  <div slot=\"start\" [class]=\"!message.read ? 'dot dot-unread' : 'dot'\"></div>\n  <ion-label class=\"ion-text-wrap\">\n    <h2>\n      {{ message.fromName }}\n      <span class=\"date\">\n        <ion-note>{{ message.date }}</ion-note>\n        <ion-icon name=\"chevron-forward\" size=\"small\" *ngIf=\"isIos()\"></ion-icon>\n      </span>\n    </h2>\n    <h3>{{ message.subject }}</h3>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </p>\n  </ion-label>\n  </ion-item>";

/***/ }),

/***/ 9023:
/*!****************************************************!*\
  !*** ./src/app/player/player.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      SleepyTube\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-input type=\"text\" placeholder=\"Enter Youtube Id\" value=\"0Ddvxf9wM3o\" #videoIdInput></ion-input>\n      <ion-button color=\"primary\" (click)=\"onOpen(videoIdInput.value)\">Open</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\" id=\"player-row\">\n      <youtube-player #youtubePlayer [videoId]=\"videoId\" [width]=\"playerWidth\" [height]=\"playerHeight\"\n        suggestedQuality=\"highres\" [startSeconds]=\"startSeconds\">\n      </youtube-player>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-between\" id=\"player-row\">\n      <ion-col>\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"onPlay()\">Play</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"onPause()\">Pause</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-between\" id=\"player-row\">\n      <ion-col>\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"onSkipForward()\">&lt;</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          {{SKIP_TIME_IN_SECONDS}} sec\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"onSkipForward()\">&gt;</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-between\" id=\"player-row\">\n      <ion-col>\n        <ion-item>\n          Timer\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-input type=\"number\" value=\"10\" min=\"1\" max=\"60\" #timeoutInput>\n        </ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-item>min</ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"onTimerStart(timeoutInput.value)\">Start</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        Countdown:\n      </ion-col>\n      <ion-col>\n        {{timeout | minuteSeconds}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ }),

/***/ 7492:
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/youtube-player/fesm2015/youtube-player.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YouTubePlayer": () => (/* binding */ YouTubePlayer),
/* harmony export */   "YouTubePlayerModule": () => (/* binding */ YouTubePlayerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 7270);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 6800);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 1745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 2647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 7067);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 4671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 9151);




 /// <reference types="youtube" />

const _c0 = ["youtubeContainer"];
const DEFAULT_PLAYER_WIDTH = 640;
const DEFAULT_PLAYER_HEIGHT = 390;
/**
 * Angular component that renders a YouTube player via the YouTube player
 * iframe API.
 * @see https://developers.google.com/youtube/iframe_api_reference
 */

class YouTubePlayer {
  constructor(_ngZone, platformId) {
    this._ngZone = _ngZone;
    this._youtubeContainer = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this._playerChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._videoId = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._height = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(DEFAULT_PLAYER_HEIGHT);
    this._width = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(DEFAULT_PLAYER_WIDTH);
    this._startSeconds = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._endSeconds = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._suggestedQuality = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._playerVars = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    /** Outputs are direct proxies from the player itself. */

    this.ready = this._getLazyEmitter('onReady');
    this.stateChange = this._getLazyEmitter('onStateChange');
    this.error = this._getLazyEmitter('onError');
    this.apiChange = this._getLazyEmitter('onApiChange');
    this.playbackQualityChange = this._getLazyEmitter('onPlaybackQualityChange');
    this.playbackRateChange = this._getLazyEmitter('onPlaybackRateChange');
    this._isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(platformId);
  }
  /** YouTube Video ID to view */


  get videoId() {
    return this._videoId.value;
  }

  set videoId(videoId) {
    this._videoId.next(videoId);
  }
  /** Height of video player */


  get height() {
    return this._height.value;
  }

  set height(height) {
    this._height.next(height || DEFAULT_PLAYER_HEIGHT);
  }
  /** Width of video player */


  get width() {
    return this._width.value;
  }

  set width(width) {
    this._width.next(width || DEFAULT_PLAYER_WIDTH);
  }
  /** The moment when the player is supposed to start playing */


  set startSeconds(startSeconds) {
    this._startSeconds.next(startSeconds);
  }
  /** The moment when the player is supposed to stop playing */


  set endSeconds(endSeconds) {
    this._endSeconds.next(endSeconds);
  }
  /** The suggested quality of the player */


  set suggestedQuality(suggestedQuality) {
    this._suggestedQuality.next(suggestedQuality);
  }
  /**
   * Extra parameters used to configure the player. See:
   * https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5#Parameters
   */


  get playerVars() {
    return this._playerVars.value;
  }

  set playerVars(playerVars) {
    this._playerVars.next(playerVars);
  }

  ngOnInit() {
    // Don't do anything if we're not in a browser environment.
    if (!this._isBrowser) {
      return;
    }

    let iframeApiAvailableObs = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(true);

    if (!window.YT || !window.YT.Player) {
      if (this.showBeforeIframeApiLoads && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error('Namespace YT not found, cannot construct embedded youtube player. ' + 'Please install the YouTube Player API Reference for iframe Embeds: ' + 'https://developers.google.com/youtube/iframe_api_reference');
      }

      const iframeApiAvailableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
      this._existingApiReadyCallback = window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = () => {
        if (this._existingApiReadyCallback) {
          this._existingApiReadyCallback();
        }

        this._ngZone.run(() => iframeApiAvailableSubject.next(true));
      };

      iframeApiAvailableObs = iframeApiAvailableSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(false));
    } // An observable of the currently loaded player.


    const playerObs = createPlayerObservable(this._youtubeContainer, this._videoId, iframeApiAvailableObs, this._width, this._height, this._playerVars, this._ngZone).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(player => {
      // Emit this before the `waitUntilReady` call so that we can bind to
      // events that happen as the player is being initialized (e.g. `onReady`).
      this._playerChanges.next(player);
    }), waitUntilReady(player => {
      // Destroy the player if loading was aborted so that we don't end up leaking memory.
      if (!playerIsReady(player)) {
        player.destroy();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.publish)()); // Set up side effects to bind inputs to the player.

    playerObs.subscribe(player => {
      this._player = player;

      if (player && this._pendingPlayerState) {
        this._initializePlayer(player, this._pendingPlayerState);
      }

      this._pendingPlayerState = undefined;
    });
    bindSizeToPlayer(playerObs, this._width, this._height);
    bindSuggestedQualityToPlayer(playerObs, this._suggestedQuality);
    bindCueVideoCall(playerObs, this._videoId, this._startSeconds, this._endSeconds, this._suggestedQuality, this._destroyed); // After all of the subscriptions are set up, connect the observable.

    playerObs.connect();
  }

  ngAfterViewInit() {
    this._youtubeContainer.next(this.youtubeContainer.nativeElement);
  }

  ngOnDestroy() {
    if (this._player) {
      this._player.destroy();

      window.onYouTubeIframeAPIReady = this._existingApiReadyCallback;
    }

    this._playerChanges.complete();

    this._videoId.complete();

    this._height.complete();

    this._width.complete();

    this._startSeconds.complete();

    this._endSeconds.complete();

    this._suggestedQuality.complete();

    this._youtubeContainer.complete();

    this._playerVars.complete();

    this._destroyed.next();

    this._destroyed.complete();
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#playVideo */


  playVideo() {
    if (this._player) {
      this._player.playVideo();
    } else {
      this._getPendingState().playbackState = YT.PlayerState.PLAYING;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#pauseVideo */


  pauseVideo() {
    if (this._player) {
      this._player.pauseVideo();
    } else {
      this._getPendingState().playbackState = YT.PlayerState.PAUSED;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#stopVideo */


  stopVideo() {
    if (this._player) {
      this._player.stopVideo();
    } else {
      // It seems like YouTube sets the player to CUED when it's stopped.
      this._getPendingState().playbackState = YT.PlayerState.CUED;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#seekTo */


  seekTo(seconds, allowSeekAhead) {
    if (this._player) {
      this._player.seekTo(seconds, allowSeekAhead);
    } else {
      this._getPendingState().seek = {
        seconds,
        allowSeekAhead
      };
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#mute */


  mute() {
    if (this._player) {
      this._player.mute();
    } else {
      this._getPendingState().muted = true;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#unMute */


  unMute() {
    if (this._player) {
      this._player.unMute();
    } else {
      this._getPendingState().muted = false;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#isMuted */


  isMuted() {
    if (this._player) {
      return this._player.isMuted();
    }

    if (this._pendingPlayerState) {
      return !!this._pendingPlayerState.muted;
    }

    return false;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#setVolume */


  setVolume(volume) {
    if (this._player) {
      this._player.setVolume(volume);
    } else {
      this._getPendingState().volume = volume;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVolume */


  getVolume() {
    if (this._player) {
      return this._player.getVolume();
    }

    if (this._pendingPlayerState && this._pendingPlayerState.volume != null) {
      return this._pendingPlayerState.volume;
    }

    return 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate */


  setPlaybackRate(playbackRate) {
    if (this._player) {
      return this._player.setPlaybackRate(playbackRate);
    } else {
      this._getPendingState().playbackRate = playbackRate;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getPlaybackRate */


  getPlaybackRate() {
    if (this._player) {
      return this._player.getPlaybackRate();
    }

    if (this._pendingPlayerState && this._pendingPlayerState.playbackRate != null) {
      return this._pendingPlayerState.playbackRate;
    }

    return 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getAvailablePlaybackRates */


  getAvailablePlaybackRates() {
    return this._player ? this._player.getAvailablePlaybackRates() : [];
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVideoLoadedFraction */


  getVideoLoadedFraction() {
    return this._player ? this._player.getVideoLoadedFraction() : 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getPlayerState */


  getPlayerState() {
    if (!this._isBrowser || !window.YT) {
      return undefined;
    }

    if (this._player) {
      return this._player.getPlayerState();
    }

    if (this._pendingPlayerState && this._pendingPlayerState.playbackState != null) {
      return this._pendingPlayerState.playbackState;
    }

    return YT.PlayerState.UNSTARTED;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getCurrentTime */


  getCurrentTime() {
    if (this._player) {
      return this._player.getCurrentTime();
    }

    if (this._pendingPlayerState && this._pendingPlayerState.seek) {
      return this._pendingPlayerState.seek.seconds;
    }

    return 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getPlaybackQuality */


  getPlaybackQuality() {
    return this._player ? this._player.getPlaybackQuality() : 'default';
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getAvailableQualityLevels */


  getAvailableQualityLevels() {
    return this._player ? this._player.getAvailableQualityLevels() : [];
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getDuration */


  getDuration() {
    return this._player ? this._player.getDuration() : 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVideoUrl */


  getVideoUrl() {
    return this._player ? this._player.getVideoUrl() : '';
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVideoEmbedCode */


  getVideoEmbedCode() {
    return this._player ? this._player.getVideoEmbedCode() : '';
  }
  /** Gets an object that should be used to store the temporary API state. */


  _getPendingState() {
    if (!this._pendingPlayerState) {
      this._pendingPlayerState = {};
    }

    return this._pendingPlayerState;
  }
  /** Initializes a player from a temporary state. */


  _initializePlayer(player, state) {
    const {
      playbackState,
      playbackRate,
      volume,
      muted,
      seek
    } = state;

    switch (playbackState) {
      case YT.PlayerState.PLAYING:
        player.playVideo();
        break;

      case YT.PlayerState.PAUSED:
        player.pauseVideo();
        break;

      case YT.PlayerState.CUED:
        player.stopVideo();
        break;
    }

    if (playbackRate != null) {
      player.setPlaybackRate(playbackRate);
    }

    if (volume != null) {
      player.setVolume(volume);
    }

    if (muted != null) {
      muted ? player.mute() : player.unMute();
    }

    if (seek != null) {
      player.seekTo(seek.seconds, seek.allowSeekAhead);
    }
  }
  /** Gets an observable that adds an event listener to the player when a user subscribes to it. */


  _getLazyEmitter(name) {
    // Start with the stream of players. This way the events will be transferred
    // over to the new player if it gets swapped out under-the-hood.
    return this._playerChanges.pipe( // Switch to the bound event. `switchMap` ensures that the old event is removed when the
    // player is changed. If there's no player, return an observable that never emits.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(player => {
      return player ? (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEventPattern)(listener => {
        player.addEventListener(name, listener);
      }, listener => {
        // The API seems to throw when we try to unbind from a destroyed player and it doesn't
        // expose whether the player has been destroyed so we have to wrap it in a try/catch to
        // prevent the entire stream from erroring out.
        try {
          if (player.removeEventListener) {
            player.removeEventListener(name, listener);
          }
        } catch (_a) {}
      }) : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)();
    }), // By default we run all the API interactions outside the zone
    // so we have to bring the events back in manually when they emit.
    source => new rxjs__WEBPACK_IMPORTED_MODULE_11__.Observable(observer => source.subscribe({
      next: value => this._ngZone.run(() => observer.next(value)),
      error: error => observer.error(error),
      complete: () => observer.complete()
    })), // Ensures that everything is cleared out on destroy.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed));
  }

}

YouTubePlayer.ɵfac = function YouTubePlayer_Factory(t) {
  return new (t || YouTubePlayer)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.PLATFORM_ID));
};

YouTubePlayer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: YouTubePlayer,
  selectors: [["youtube-player"]],
  viewQuery: function YouTubePlayer_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.youtubeContainer = _t.first);
    }
  },
  inputs: {
    videoId: "videoId",
    height: "height",
    width: "width",
    startSeconds: "startSeconds",
    endSeconds: "endSeconds",
    suggestedQuality: "suggestedQuality",
    playerVars: "playerVars",
    showBeforeIframeApiLoads: "showBeforeIframeApiLoads"
  },
  outputs: {
    ready: "ready",
    stateChange: "stateChange",
    error: "error",
    apiChange: "apiChange",
    playbackQualityChange: "playbackQualityChange",
    playbackRateChange: "playbackRateChange"
  },
  decls: 2,
  vars: 0,
  consts: [["youtubeContainer", ""]],
  template: function YouTubePlayer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", null, 0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](YouTubePlayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component,
    args: [{
      selector: 'youtube-player',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewEncapsulation.None,
      // This div is *replaced* by the YouTube player embed.
      template: '<div #youtubeContainer></div>'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_12__.PLATFORM_ID]
      }]
    }];
  }, {
    videoId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    startSeconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    endSeconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    suggestedQuality: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    playerVars: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    showBeforeIframeApiLoads: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input
    }],
    ready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output
    }],
    stateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output
    }],
    error: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output
    }],
    apiChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output
    }],
    playbackQualityChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output
    }],
    playbackRateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Output
    }],
    youtubeContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: ['youtubeContainer']
    }]
  });
})();
/** Listens to changes to the given width and height and sets it on the player. */


function bindSizeToPlayer(playerObs, widthObs, heightObs) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([playerObs, widthObs, heightObs]).subscribe(([player, width, height]) => player && player.setSize(width, height));
}
/** Listens to changes from the suggested quality and sets it on the given player. */


function bindSuggestedQualityToPlayer(playerObs, suggestedQualityObs) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([playerObs, suggestedQualityObs]).subscribe(([player, suggestedQuality]) => player && suggestedQuality && player.setPlaybackQuality(suggestedQuality));
}
/**
 * Returns an observable that emits the loaded player once it's ready. Certain properties/methods
 * won't be available until the iframe finishes loading.
 * @param onAbort Callback function that will be invoked if the player loading was aborted before
 * it was able to complete. Can be used to clean up any loose references.
 */


function waitUntilReady(onAbort) {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.mergeMap)(player => {
    if (!player) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined);
    }

    if (playerIsReady(player)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(player);
    } // Since removeEventListener is not on Player when it's initialized, we can't use fromEvent.
    // The player is not initialized fully until the ready is called.


    return new rxjs__WEBPACK_IMPORTED_MODULE_11__.Observable(emitter => {
      let aborted = false;
      let resolved = false;

      const onReady = event => {
        resolved = true;

        if (!aborted) {
          event.target.removeEventListener('onReady', onReady);
          emitter.next(event.target);
        }
      };

      player.addEventListener('onReady', onReady);
      return () => {
        aborted = true;

        if (!resolved) {
          onAbort(player);
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(undefined));
  });
}
/** Create an observable for the player based on the given options. */


function createPlayerObservable(youtubeContainer, videoIdObs, iframeApiAvailableObs, widthObs, heightObs, playerVarsObs, ngZone) {
  const playerOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([videoIdObs, playerVarsObs]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.withLatestFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([widthObs, heightObs])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([constructorOptions, sizeOptions]) => {
    const [videoId, playerVars] = constructorOptions;
    const [width, height] = sizeOptions;
    return videoId ? {
      videoId,
      playerVars,
      width,
      height
    } : undefined;
  }));
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([youtubeContainer, playerOptions, (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(ngZone)]).pipe(skipUntilRememberLatest(iframeApiAvailableObs), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.scan)(syncPlayerState, undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)());
}
/** Skips the given observable until the other observable emits true, then emit the latest. */


function skipUntilRememberLatest(notifier) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.combineLatest)(notifier), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.skipWhile)(([_, doneSkipping]) => !doneSkipping), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([value]) => value));
}
/** Destroy the player if there are no options, or create the player if there are options. */


function syncPlayerState(player, [container, videoOptions, ngZone]) {
  if (player && videoOptions && player.playerVars !== videoOptions.playerVars) {
    // The player needs to be recreated if the playerVars are different.
    player.destroy();
  } else if (!videoOptions) {
    if (player) {
      // Destroy the player if the videoId was removed.
      player.destroy();
    }

    return;
  } else if (player) {
    return player;
  } // Important! We need to create the Player object outside of the `NgZone`, because it kicks
  // off a 250ms setInterval which will continually trigger change detection if we don't.


  const newPlayer = ngZone.runOutsideAngular(() => new YT.Player(container, videoOptions));
  newPlayer.videoId = videoOptions.videoId;
  newPlayer.playerVars = videoOptions.playerVars;
  return newPlayer;
}
/**
 * Call cueVideoById if the videoId changes, or when start or end seconds change. cueVideoById will
 * change the loaded video id to the given videoId, and set the start and end times to the given
 * start/end seconds.
 */


function bindCueVideoCall(playerObs, videoIdObs, startSecondsObs, endSecondsObs, suggestedQualityObs, destroyed) {
  const cueOptionsObs = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([startSecondsObs, endSecondsObs]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([startSeconds, endSeconds]) => ({
    startSeconds,
    endSeconds
  }))); // Only respond to changes in cue options if the player is not running.

  const filteredCueOptions = cueOptionsObs.pipe(filterOnOther(playerObs, player => !!player && !hasPlayerStarted(player))); // If the video id changed, there's no reason to run 'cue' unless the player
  // was initialized with a different video id.

  const changedVideoId = videoIdObs.pipe(filterOnOther(playerObs, (player, videoId) => !!player && player.videoId !== videoId)); // If the player changed, there's no reason to run 'cue' unless there are cue options.

  const changedPlayer = playerObs.pipe(filterOnOther((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([videoIdObs, cueOptionsObs]), ([videoId, cueOptions], player) => !!player && (videoId != player.videoId || !!cueOptions.startSeconds || !!cueOptions.endSeconds)));
  (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.merge)(changedPlayer, changedVideoId, filteredCueOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.withLatestFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([playerObs, videoIdObs, cueOptionsObs, suggestedQualityObs])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([_, values]) => values), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(destroyed)).subscribe(([player, videoId, cueOptions, suggestedQuality]) => {
    if (!videoId || !player) {
      return;
    }

    player.videoId = videoId;
    player.cueVideoById(Object.assign({
      videoId,
      suggestedQuality
    }, cueOptions));
  });
}

function hasPlayerStarted(player) {
  const state = player.getPlayerState();
  return state !== YT.PlayerState.UNSTARTED && state !== YT.PlayerState.CUED;
}

function playerIsReady(player) {
  return 'getPlayerStatus' in player;
}
/** Combines the two observables temporarily for the filter function. */


function filterOnOther(otherObs, filterFn) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.withLatestFrom)(otherObs), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.filter)(([value, other]) => filterFn(other, value)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([value]) => value));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const COMPONENTS = [YouTubePlayer];

class YouTubePlayerModule {}

YouTubePlayerModule.ɵfac = function YouTubePlayerModule_Factory(t) {
  return new (t || YouTubePlayerModule)();
};

YouTubePlayerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: YouTubePlayerModule,
  declarations: [YouTubePlayer],
  exports: [YouTubePlayer]
});
YouTubePlayerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](YouTubePlayerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule,
    args: [{
      declarations: COMPONENTS,
      exports: COMPONENTS
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_player_player_module_ts.js.map