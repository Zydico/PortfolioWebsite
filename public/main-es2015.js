(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _portfolio_components_projects_home_projects_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/components/projects-home/projects-home.component */ "./src/app/portfolio/components/projects-home/projects-home.component.ts");
/* harmony import */ var _sort_algorithm_visualizer_sort_algorithm_visualizer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort-algorithm-visualizer/sort-algorithm-visualizer.component */ "./src/app/sort-algorithm-visualizer/sort-algorithm-visualizer.component.ts");







const routes = [
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
    {
        path: 'portfolio',
        component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"],
        children: [
            { path: '', component: _portfolio_components_projects_home_projects_home_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsHomeComponent"] },
        ]
    },
    { path: 'sort-algorithm-visualizer', component: _sort_algorithm_visualizer_sort_algorithm_visualizer_component__WEBPACK_IMPORTED_MODULE_4__["SortAlgorithmVisualizerComponent"] },
    { path: '**', redirectTo: '/portfolio', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");




class AppComponent {
    constructor() {
        this.title = 'PortfolioWebsite';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _portfolio_components_background_background_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/components/background/background.component */ "./src/app/portfolio/components/background/background.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _portfolio_components_title_page_title_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio/components/title-page/title-page.component */ "./src/app/portfolio/components/title-page/title-page.component.ts");
/* harmony import */ var _portfolio_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/components/header/header.component */ "./src/app/portfolio/components/header/header.component.ts");
/* harmony import */ var _portfolio_components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio/components/about-page/about-page.component */ "./src/app/portfolio/components/about-page/about-page.component.ts");
/* harmony import */ var _portfolio_components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio/components/contact-page/contact-page.component */ "./src/app/portfolio/components/contact-page/contact-page.component.ts");
/* harmony import */ var _portfolio_components_skills_page_skills_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portfolio/components/skills-page/skills-page.component */ "./src/app/portfolio/components/skills-page/skills-page.component.ts");
/* harmony import */ var _portfolio_components_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio/components/projects-page/projects-page.component */ "./src/app/portfolio/components/projects-page/projects-page.component.ts");
/* harmony import */ var _portfolio_components_projects_home_projects_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./portfolio/components/projects-home/projects-home.component */ "./src/app/portfolio/components/projects-home/projects-home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _sort_algorithm_visualizer_sort_algorithm_visualizer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sort-algorithm-visualizer/sort-algorithm-visualizer.component */ "./src/app/sort-algorithm-visualizer/sort-algorithm-visualizer.component.ts");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"],
        _portfolio_components_background_background_component__WEBPACK_IMPORTED_MODULE_4__["BackgroundComponent"],
        _portfolio_components_title_page_title_page_component__WEBPACK_IMPORTED_MODULE_7__["TitlePageComponent"],
        _portfolio_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _portfolio_components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__["AboutPageComponent"],
        _portfolio_components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPageComponent"],
        _portfolio_components_skills_page_skills_page_component__WEBPACK_IMPORTED_MODULE_11__["SkillsPageComponent"],
        _portfolio_components_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsPageComponent"],
        _portfolio_components_projects_home_projects_home_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsHomeComponent"],
        _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__["LoaderComponent"],
        _sort_algorithm_visualizer_sort_algorithm_visualizer_component__WEBPACK_IMPORTED_MODULE_16__["SortAlgorithmVisualizerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"],
                    _portfolio_components_background_background_component__WEBPACK_IMPORTED_MODULE_4__["BackgroundComponent"],
                    _portfolio_components_title_page_title_page_component__WEBPACK_IMPORTED_MODULE_7__["TitlePageComponent"],
                    _portfolio_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _portfolio_components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_9__["AboutPageComponent"],
                    _portfolio_components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPageComponent"],
                    _portfolio_components_skills_page_skills_page_component__WEBPACK_IMPORTED_MODULE_11__["SkillsPageComponent"],
                    _portfolio_components_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsPageComponent"],
                    _portfolio_components_projects_home_projects_home_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsHomeComponent"],
                    _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__["LoaderComponent"],
                    _sort_algorithm_visualizer_sort_algorithm_visualizer_component__WEBPACK_IMPORTED_MODULE_16__["SortAlgorithmVisualizerComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/portfolio/components/about-page/about-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/portfolio/components/about-page/about-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(); };
AboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutPageComponent, selectors: [["app-about-page"]], decls: 37, vars: 0, consts: [["id", "about-page", 1, "page"], [1, "main-container"], ["id", "description", 1, "transparent-animated", "transparent-top"], ["id", "location-images"], [1, "location", "transparent-animated", "transparent-right"], ["id", "south-korea", 1, "location-image"], [1, "location-text"], [1, "location-text-inner"], [1, "title"], [1, "location", "transparent-animated", "transparent-left"], ["id", "washington", 1, "location-image"], ["id", "west-virginia", 1, "location-image"]], template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " My name is Matthew Hwang, and I recently graduated from the University of Washington, Tacoma in 2018 with a Bachelor's in Computer Science. I am currently working as a Federal Worker at the Bureau of the Fiscal Service as an IT Specialist, where I work with the front-end team in an Agile environment, while organizing our projects with JIRA, Confluence, and BitBucket. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Although most of my professional experience has been with the front-end, I am always looking to expand my skills and learn just about anything that will make me become a better developer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " My goal is to become a senior full-stack software developer, with the hopes that with many years of experience, I will one day be able to work for NASA! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "2013 - Daegu, South Korea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Graduated from Daegu American High School, which was located on an American military base stationed at Camp Walker, Daegu, South Korea.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "2018 - Tacoma, Washington, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Transferred from the University of Washington, Seattle campus to the Tacoma campus and graduated with a Bachelor's in Computer Science.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2019 - Parkersburg, West Virginia, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Started working for the Federal Government at the Bureau of the Fiscal Service as an IT Specialist, starting as a GS-7, and promoted to a GS-9 in 2020. Here, I have learned to work with others through the Agile software development methodology and have learned a lot while working with the front-end team. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".location-text-inner[_ngcontent-%COMP%], .location[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.page[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n}\n\n#description[_ngcontent-%COMP%] {\n  max-width: 35rem;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 2rem;\n}\n\n#location-images[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.location[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n\n.location-image[_ngcontent-%COMP%] {\n  width: 40%;\n  padding-top: min(40%, 20rem);\n  max-width: 20rem;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.location-text[_ngcontent-%COMP%] {\n  width: 40%;\n  padding-top: min(40%, 20rem);\n  max-width: 20rem;\n  position: relative;\n  font-size: min(1rem, 2.5vw);\n}\n\n.location-text-inner[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n#south-korea[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/SouthKorea.png\");\n}\n\n#washington[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/Washington.png\");\n}\n\n#west-virginia[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/WestVirginia.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvYWJvdXQtcGFnZS9FOlxcWnlkaWNvXFxBbmd1bGFyIFByb2plY3RzXFxQb3J0Zm9saW9XZWJzaXRlXFxjbGllbnQvc3JjXFxzdHlsZXNcXF9wbGFjZWhvbGRlcnMuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50cy9hYm91dC1wYWdlL0U6XFxaeWRpY29cXEFuZ3VsYXIgUHJvamVjdHNcXFBvcnRmb2xpb1dlYnNpdGVcXGNsaWVudC9zcmNcXGFwcFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFxhYm91dC1wYWdlXFxhYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50cy9hYm91dC1wYWdlL0U6XFxaeWRpY29cXEFuZ3VsYXIgUHJvamVjdHNcXFBvcnRmb2xpb1dlYnNpdGVcXGNsaWVudC9zcmNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNSSjs7QUNEQTtFQUNJLDRCQ0ZlO0FGTW5COztBQ0RBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURJSjs7QUNEQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FESUo7O0FDREE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBRElKOztBQ0FBO0VBQ0ksVUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FER0o7O0FDQUE7RUFDSSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QURHSjs7QUNBQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHNCQUFBO0VBQ0EsdUJBQUE7QURFSjs7QUNDQTtFQUNJLG1CQUFBO0FERUo7O0FDQ0E7RUFDSSwrQ0FBQTtBREVKOztBQ0NBO0VBQ0ksK0NBQUE7QURFSjs7QUNDQTtFQUNJLGlEQUFBO0FERUoiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50cy9hYm91dC1wYWdlL2Fib3V0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlZnVsbC1zY3JlZW4ge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuJWNlbnRlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiVsaW5rIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59IiwiLmxvY2F0aW9uLXRleHQtaW5uZXIsIC5sb2NhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbiNkZXNjcmlwdGlvbiB7XG4gIG1heC13aWR0aDogMzVyZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbiNsb2NhdGlvbi1pbWFnZXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubG9jYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmxvY2F0aW9uLWltYWdlIHtcbiAgd2lkdGg6IDQwJTtcbiAgcGFkZGluZy10b3A6IG1pbig0MCUsIDIwcmVtKTtcbiAgbWF4LXdpZHRoOiAyMHJlbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4ubG9jYXRpb24tdGV4dCB7XG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmctdG9wOiBtaW4oNDAlLCAyMHJlbSk7XG4gIG1heC13aWR0aDogMjByZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiBtaW4oMXJlbSwgMi41dncpO1xufVxuXG4ubG9jYXRpb24tdGV4dC1pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuI3NvdXRoLWtvcmVhIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Tb3V0aEtvcmVhLnBuZ1wiKTtcbn1cblxuI3dhc2hpbmd0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL1dhc2hpbmd0b24ucG5nXCIpO1xufVxuXG4jd2VzdC12aXJnaW5pYSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvV2VzdFZpcmdpbmlhLnBuZ1wiKTtcbn0iLCJAaW1wb3J0ICdwbGFjZWhvbGRlcnMnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLnBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGV4dHJlbWVMaWdodEdyYXk7XHJcbn1cclxuXHJcbiNkZXNjcmlwdGlvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4jbG9jYXRpb24taW1hZ2VzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubG9jYXRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgQGV4dGVuZCAlY2VudGVyLWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1pbWFnZSB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgcGFkZGluZy10b3A6IG1pbig0MCUsIDIwcmVtKTtcclxuICAgIG1heC13aWR0aDogMjByZW07XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4ubG9jYXRpb24tdGV4dCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgcGFkZGluZy10b3A6IG1pbig0MCUsIDIwcmVtKTtcclxuICAgIG1heC13aWR0aDogMjByZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IG1pbigxcmVtLCAyLjV2dyk7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi10ZXh0LWlubmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIEBleHRlbmQgJWNlbnRlci1jb250ZW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuI3NvdXRoLWtvcmVhIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvU291dGhLb3JlYS5wbmdcIik7XHJcbn1cclxuXHJcbiN3YXNoaW5ndG9uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvV2FzaGluZ3Rvbi5wbmdcIik7XHJcbn1cclxuXHJcbiN3ZXN0LXZpcmdpbmlhIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvV2VzdFZpcmdpbmlhLnBuZ1wiKTtcclxufSIsIiRsaWdodEdyYXk6IHJnYigxNjgsIDE2OSwgMTcyKTtcclxuJHN1cGVyTGlnaHRHcmF5OiByZ2IoMjE5LCAyMTksIDIxOSk7XHJcbiRleHRyZW1lTGlnaHRHcmF5OiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiRoZWFkZXJIZWlnaHQ6IDUwcHg7XHJcbiRibGFja0JhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44MzYpO1xyXG4kbGlnaHRCbHVlOiByZ2IoMTczLCAxNzMsIDI1NSk7XHJcbiRkYXJrR3JheTogIzJhMmIyYzsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-page',
                templateUrl: './about-page.component.html',
                styleUrls: ['./about-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/components/background/background.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/portfolio/components/background/background.component.ts ***!
  \*************************************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_portfolio_services_file_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/portfolio/services/file-handler.service */ "./src/app/portfolio/services/file-handler.service.ts");



class BackgroundComponent {
    constructor(fileHandlerService, zone) {
        this.fileHandlerService = fileHandlerService;
        this.zone = zone;
        this.scale = 0;
        this.size = {
            width: 0,
            height: 0
        };
        this.rotation = 0;
        this.rotationSpeed = 0.001;
        this.stars = {};
        this.extraStars = [];
        this.lines = [];
        this.max = 600;
        this.mouse = {
            x: null,
            y: null
        };
    }
    ngOnInit() {
        this.canvas = document.getElementById('background');
        this.ctx = this.canvas.getContext('2d');
        this.fileHandlerService.readFile('app/portfolio/components/background/stars.csv').subscribe((lines) => {
            this.parseData(lines);
            this.setCanvas();
            this.addMouseListener();
            window.requestAnimationFrame(() => this.loop());
        });
    }
    addMouseListener() {
        document.onmousemove = (event) => {
            this.mouse.x = (event.pageX - window.scrollX - this.size.width / 2);
            this.mouse.y = (event.pageY - window.scrollY - this.size.height / 2);
        };
    }
    parseData(lines) {
        for (let i = 1; i < lines.length; i++) {
            let columns = lines[i].split(',');
            let star = { id: columns[0], x: +columns[1], y: +columns[2], size: +columns[3], lineTo: columns[4] };
            if (columns[0].length > 0) {
                if (star.id === 'Polaris') {
                    this.polaris = star;
                }
                this.stars[star.id.trim()] = star;
            }
            else {
                this.extraStars.push(star);
            }
        }
        for (let key in this.stars) {
            let star = this.stars[key];
            let lineTo = this.stars[key].lineTo.trim();
            if (lineTo.length > 0) {
                this.lines.push({ x1: star.x, y1: star.y, x2: this.stars[lineTo].x, y2: this.stars[lineTo].y });
            }
        }
    }
    setCanvas() {
        this.size.width = this.canvas.offsetWidth;
        this.size.height = this.canvas.offsetHeight;
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;
        this.scale = Math.max(this.size.width, this.size.height) / this.max * 1.1;
        this.ctx.translate(this.size.width / 2, this.size.height / 2);
        this.ctx.clearRect(-this.size.width * 2, -this.size.height * 2, this.size.width * 4, this.size.height * 4);
    }
    getDistance(x, y) {
        return Math.pow(Math.pow(this.mouse.x - x, 2) + Math.pow(this.mouse.y - y, 2), 0.5);
    }
    draw() {
        let ctx = this.ctx;
        ctx.clearRect(-this.size.width * 3, -this.size.height * 3, this.size.width * 6, this.size.height * 6);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
        ctx.rotate(this.rotationSpeed);
        this.rotation = (this.rotation + this.rotationSpeed) % (Math.PI * 2);
        for (let key in this.stars) {
            let star = this.stars[key];
            ctx.beginPath();
            ctx.arc((star.x - this.polaris.x) * this.scale, (star.y - this.polaris.y) * this.scale, star.size * this.scale / 6, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        }
        if (this.mouse.x) {
            for (let line of this.lines) {
                let centerX = ((line.x1 - this.polaris.x) * this.scale + (line.x2 - this.polaris.x) * this.scale) / 2;
                let centerY = ((line.y1 - this.polaris.y) * this.scale + (line.y2 - this.polaris.y) * this.scale) / 2;
                let distance = Math.max(0.0, 1 - (this.getDistance((centerX) * Math.cos(this.rotation) - (centerY) * Math.sin(this.rotation), (centerY) * Math.cos(this.rotation) + (centerX) * Math.sin(this.rotation)) / 250));
                ctx.globalAlpha = distance;
                ctx.beginPath();
                ctx.lineWidth = this.scale / 4;
                ctx.moveTo((line.x1 - this.polaris.x) * this.scale, (line.y1 - this.polaris.y) * this.scale);
                ctx.lineTo((line.x2 - this.polaris.x) * this.scale, (line.y2 - this.polaris.y) * this.scale);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1.0;
            }
        }
    }
    loop() {
        if (this.size.width !== this.canvas.offsetWidth || this.size.height !== this.canvas.offsetHeight) {
            this.setCanvas();
        }
        this.draw();
        // Running outside of Angular to prevent unnecessary change detection
        this.zone.runOutsideAngular(() => {
            window.requestAnimationFrame(() => this.loop());
        });
    }
}
BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) { return new (t || BackgroundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_portfolio_services_file_handler_service__WEBPACK_IMPORTED_MODULE_1__["FileHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
BackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackgroundComponent, selectors: [["app-background"]], decls: 1, vars: 0, consts: [["id", "background"]], template: function BackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0);
    } }, styles: ["#background[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n}\n\n#background[_ngcontent-%COMP%] {\n  z-index: -1;\n  background-color: #041d55;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvYmFja2dyb3VuZC9FOlxcWnlkaWNvXFxBbmd1bGFyIFByb2plY3RzXFxQb3J0Zm9saW9XZWJzaXRlXFxjbGllbnQvc3JjXFxzdHlsZXNcXF9wbGFjZWhvbGRlcnMuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50cy9iYWNrZ3JvdW5kL0U6XFxaeWRpY29cXEFuZ3VsYXIgUHJvamVjdHNcXFBvcnRmb2xpb1dlYnNpdGVcXGNsaWVudC9zcmNcXGFwcFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFxiYWNrZ3JvdW5kXFxiYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FDQ0o7O0FDTEE7RUFFSSxXQUFBO0VBQ0EseUJBQUE7QURPSiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9jb21wb25lbnRzL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVmdWxsLXNjcmVlbiB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4lY2VudGVyLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuJWxpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn0iLCIjYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuXG4jYmFja2dyb3VuZCB7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQxZDU1O1xufSIsIkBpbXBvcnQgJ3BsYWNlaG9sZGVycyc7XHJcblxyXG4jYmFja2dyb3VuZCB7XHJcbiAgICBAZXh0ZW5kICVmdWxsLXNjcmVlbjtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MWQ1NTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-background',
                templateUrl: './background.component.html',
                styleUrls: ['./background.component.scss']
            }]
    }], function () { return [{ type: src_app_portfolio_services_file_handler_service__WEBPACK_IMPORTED_MODULE_1__["FileHandlerService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/components/contact-page/contact-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/portfolio/components/contact-page/contact-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) { return new (t || ContactPageComponent)(); };
ContactPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPageComponent, selectors: [["app-contact-page"]], decls: 23, vars: 0, consts: [["id", "contact-page", 1, "page"], ["id", "arrow"], [1, "main-container"], ["id", "links"], [1, "row"], [1, "left-side"], [1, "right-side"], ["href", "https://www.linkedin.com/in/matthewhwang95/", "target", "_blank"], ["href", "https://github.com/Zydico", "target", "_blank"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "matthewhwang95@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LinkedIn:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "https://www.linkedin.com/in/matthewhwang95");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Github:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "https://github.com/Zydico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page[_ngcontent-%COMP%] {\n  background-color: #141414;\n  color: white;\n  padding-top: 7rem;\n  padding-bottom: 5rem;\n  position: relative;\n}\n\n#arrow[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-left: 50vw solid transparent;\n  border-right: 50vw solid transparent;\n  border-top: 4rem solid whitesmoke;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\nh1[_ngcontent-%COMP%]::after {\n  background-color: white;\n}\n\n#links[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 0.9rem;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #eeeeee;\n}\n\n.left-side[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 5rem;\n}\n\n.right-side[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20rem;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n}\n\na[_ngcontent-%COMP%]:visited {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvY29udGFjdC1wYWdlL0U6XFxaeWRpY29cXEFuZ3VsYXIgUHJvamVjdHNcXFBvcnRmb2xpb1dlYnNpdGVcXGNsaWVudC9zcmNcXGFwcFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFxjb250YWN0LXBhZ2VcXGNvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FDREo7O0FESUE7RUFDSSx1QkFBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9jb21wb25lbnRzL2NvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLnBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAyMCwgMjApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDdyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2Fycm93IHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDUwdncgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDUwdncgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wOiA0cmVtIHNvbGlkICRleHRyZW1lTGlnaHRHcmF5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuaDE6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbGlua3Mge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBjb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG59XHJcblxyXG4ubGVmdC1zaWRlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1cmVtO1xyXG59XHJcblxyXG4ucmlnaHQtc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59IiwiLnBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA3cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jYXJyb3cge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNTB2dyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1MHZ3IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiA0cmVtIHNvbGlkIHdoaXRlc21va2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuXG5oMTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuI2xpbmtzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgY29sb3I6ICNlZWVlZWU7XG59XG5cbi5sZWZ0LXNpZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1cmVtO1xufVxuXG4ucmlnaHQtc2lkZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcmVtO1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-page',
                templateUrl: './contact-page.component.html',
                styleUrls: ['./contact-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/components/header/header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/portfolio/components/header/header.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_scroll_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/scroll-handler.service */ "./src/app/portfolio/services/scroll-handler.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "display": a0 }; };
const _c1 = function (a0) { return { "position": a0 }; };
const _c2 = function (a0) { return { "selected": a0 }; };
class HeaderComponent {
    constructor(scrollHandlerService) {
        this.scrollHandlerService = scrollHandlerService;
    }
    ngOnInit() {
        this.scrollHandlerService.updateScroll();
    }
    scrollTo(page) {
        let element = document.getElementById(page + '-page');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_scroll_handler_service__WEBPACK_IMPORTED_MODULE_1__["ScrollHandlerService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 21, consts: [["id", "filler", 3, "ngStyle"], ["id", "header", 3, "ngStyle"], ["id", "header-links"], [1, "header-link", 3, "ngClass", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_3_listener() { return ctx.scrollTo("title"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_5_listener() { return ctx.scrollTo("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_7_listener() { return ctx.scrollTo("skills"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_9_listener() { return ctx.scrollTo("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_11_listener() { return ctx.scrollTo("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.scrollHandlerService.isLocked ? "block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.scrollHandlerService.isLocked ? "fixed" : "relative"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx.scrollHandlerService.isOnTitle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, ctx.scrollHandlerService.isOnAbout));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, ctx.scrollHandlerService.isOnSkills));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c2, ctx.scrollHandlerService.isOnProjects));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c2, ctx.scrollHandlerService.isOnContact));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["#header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.header-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n#filler[_ngcontent-%COMP%] {\n  height: 50px;\n  display: none;\n}\n\n#header[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.836);\n  height: 50px;\n  left: 0;\n  top: 0;\n  position: relative;\n  width: 100%;\n  z-index: 100;\n}\n\n#header-links[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 100%;\n  text-align: left;\n}\n\n.header-link[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n  color: white;\n  display: inline-block;\n  transition: color 0.5s;\n  font-size: min(1rem, 2.5vw);\n}\n\n.header-link[_ngcontent-%COMP%]:hover, .selected[_ngcontent-%COMP%] {\n  color: #adadff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvaGVhZGVyL0U6XFxaeWRpY29cXEFuZ3VsYXIgUHJvamVjdHNcXFBvcnRmb2xpb1dlYnNpdGVcXGNsaWVudC9zcmNcXHN0eWxlc1xcX3BsYWNlaG9sZGVycy5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50cy9oZWFkZXIvRTpcXFp5ZGljb1xcQW5ndWxhciBQcm9qZWN0c1xcUG9ydGZvbGlvV2Vic2l0ZVxcY2xpZW50L3NyY1xcYXBwXFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50cy9oZWFkZXIvRTpcXFp5ZGljb1xcQW5ndWxhciBQcm9qZWN0c1xcUG9ydGZvbGlvV2Vic2l0ZVxcY2xpZW50L3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFdBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDUko7O0FDTkE7RUFDSSxZQ0RXO0VERVgsYUFBQTtBRFNKOztBQ05BO0VBQ0ksc0NDTGM7RURNZCxZQ1BXO0VEU1gsT0FBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEUUo7O0FDTEE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRFFKOztBQ0xBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QURRSjs7QUNKQTtFQUNJLGNDL0JRO0FGc0NaIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVmdWxsLXNjcmVlbiB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4lY2VudGVyLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuJWxpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn0iLCIjaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbiNmaWxsZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODM2KTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuI2hlYWRlci1saW5rcyB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmhlYWRlci1saW5rIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNXM7XG4gIGZvbnQtc2l6ZTogbWluKDFyZW0sIDIuNXZ3KTtcbn1cblxuLmhlYWRlci1saW5rOmhvdmVyLCAuc2VsZWN0ZWQge1xuICBjb2xvcjogI2FkYWRmZjtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdwbGFjZWhvbGRlcnMnO1xyXG5cclxuI2ZpbGxlciB7XHJcbiAgICBoZWlnaHQ6ICRoZWFkZXJIZWlnaHQ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFja0JhY2tncm91bmQ7XHJcbiAgICBoZWlnaHQ6ICRoZWFkZXJIZWlnaHQ7XHJcbiAgICBAZXh0ZW5kICVjZW50ZXItY29udGVudDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuI2hlYWRlci1saW5rcyB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmhlYWRlci1saW5rIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcclxuICAgIGZvbnQtc2l6ZTogbWluKDFyZW0sIDIuNXZ3KTtcclxuICAgIEBleHRlbmQgJWxpbms7XHJcbn1cclxuXHJcbi5oZWFkZXItbGluazpob3ZlciwgLnNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiAkbGlnaHRCbHVlO1xyXG59IiwiJGxpZ2h0R3JheTogcmdiKDE2OCwgMTY5LCAxNzIpO1xyXG4kc3VwZXJMaWdodEdyYXk6IHJnYigyMTksIDIxOSwgMjE5KTtcclxuJGV4dHJlbWVMaWdodEdyYXk6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuJGhlYWRlckhlaWdodDogNTBweDtcclxuJGJsYWNrQmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgzNik7XHJcbiRsaWdodEJsdWU6IHJnYigxNzMsIDE3MywgMjU1KTtcclxuJGRhcmtHcmF5OiAjMmEyYjJjOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _services_scroll_handler_service__WEBPACK_IMPORTED_MODULE_1__["ScrollHandlerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/components/projects-home/projects-home.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/portfolio/components/projects-home/projects-home.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsHomeComponent", function() { return ProjectsHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");




class ProjectsHomeComponent {
    constructor(router, loader) {
        this.router = router;
        this.loader = loader;
    }
    ngOnInit() {
    }
    changePage(path) {
        this.loader.showLoader();
        setTimeout(() => {
            this.router.navigate([path]);
            this.loader.hideLoader();
        }, 1200);
    }
}
ProjectsHomeComponent.ɵfac = function ProjectsHomeComponent_Factory(t) { return new (t || ProjectsHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"])); };
ProjectsHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsHomeComponent, selectors: [["app-projects-home"]], decls: 35, vars: 0, consts: [[1, "projects-header"], ["id", "projects-container"], [1, "project"], ["id", "uwtournaments", 1, "blur"], [1, "project-name"], [1, "project-description"], [1, "project-description-background"], [1, "project-description-container"], ["id", "uwtournaments-image", 1, "project-description-image"], [1, "project-description-header"], ["href", "https://uwtournaments.herokuapp.com/roster", "target", "_blank", 1, "project-description-link"], [1, "project-description-text"], ["height", "15", "width", "15", 1, "project-description-svg"], ["x1", "0", "y1", "0", "x2", "15", "y2", "15", 2, "stroke", "rgb(48, 48, 48)", "stroke-width", "3"], ["x1", "0", "y1", "15", "x2", "15", "y2", "0", 2, "stroke", "rgb(48, 48, 48)", "stroke-width", "3"], ["href", "https://uwtournaments.herokuapp.com/roster", "target", "_blank", 1, "project-description-link-button"], [1, "project", 3, "click"], ["id", "sort-algorithm-visualizer", 1, "blur"]], template: function ProjectsHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "UWTournaments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "UWTournaments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "https://uwtournaments.herokuapp.com/roster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " A web application that I made for the UW Tacoma League of Legends club to help organize tournaments. This is a MEAN stack application that also uses Firebase to handle logins. This website is hosted for free on Heroku, so please give it a while to load up. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Languages and tools used: MongoDB, Express, Angular, NodeJS, Firebase, Heroku, HTML, CSS, Typescript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Email: guest@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Password: password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "line", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsHomeComponent_Template_div_click_31_listener() { return ctx.changePage("sort-algorithm-visualizer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sort Algorithm Visualizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".project-description[_ngcontent-%COMP%], .project[_ngcontent-%COMP%], .projects-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#projects-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.projects-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.project[_ngcontent-%COMP%] {\n  margin: 1rem;\n  width: 10rem;\n  height: 10rem;\n  background-color: #dbdbdb;\n  position: relative;\n  font-weight: bold;\n  color: white;\n  transition: background-color 0.25s linear;\n}\n\n#uwtournaments[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/LoLUWT.png\");\n}\n\n#sort-algorithm-visualizer[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/Sort.png\");\n}\n\n.blur[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: contain;\n  transition: -webkit-filter 0.25s linear;\n  transition: filter 0.25s linear;\n  transition: filter 0.25s linear, -webkit-filter 0.25s linear;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.project-name[_ngcontent-%COMP%] {\n  z-index: 2;\n  text-shadow: 0px 0px 0.25rem black;\n  transition: font-size 0.25s linear;\n  cursor: pointer;\n  pointer-events: none;\n  text-align: center;\n}\n\n.project[_ngcontent-%COMP%]:hover   .blur[_ngcontent-%COMP%] {\n  -webkit-filter: blur(0.1rem);\n          filter: blur(0.1rem);\n}\n\n.project[_ngcontent-%COMP%]:hover {\n  background-color: #c4c4c4;\n}\n\n.project-description[_ngcontent-%COMP%] {\n  z-index: 101;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  opacity: 0;\n  display: none;\n  transition: opacity 1s;\n}\n\n.project-description-background[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 102;\n  background-color: rgba(27, 27, 27, 0.8);\n}\n\n.project-description-container[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  max-width: 40rem;\n  width: 100%;\n  height: 100vh;\n  z-index: 103;\n  box-shadow: 0 0 0.5rem 0.1rem #242424;\n  position: relative;\n}\n\n.project-description-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: auto 100%;\n  border-bottom: 2px solid gray;\n}\n\n#uwtournaments-image[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/UWTournaments.png\");\n}\n\n.project-description-header[_ngcontent-%COMP%] {\n  color: #2a2b2c;\n  font-size: 1.5rem;\n  margin-left: 0.5rem;\n  margin-top: 0.5rem;\n}\n\n.project-description-link[_ngcontent-%COMP%] {\n  color: #2a2b2c;\n  font-size: 1rem;\n  margin-left: 0.5rem;\n}\n\n.project-description-text[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  color: #2a2b2c;\n  font-size: min(0.75rem, 2.5vw);\n}\n\nsvg[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n  cursor: pointer;\n  transition: -webkit-filter 0.25s linear;\n  transition: filter 0.25s linear;\n  transition: filter 0.25s linear, -webkit-filter 0.25s linear;\n}\n\nsvg[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(300%);\n          filter: brightness(300%);\n}\n\n.project-description-link-button[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  position: absolute;\n  left: 0.75rem;\n  bottom: 0.75rem;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  background-color: #6666ff;\n  transition: background-color 0.25s linear;\n}\n\n.project-description-link-button[_ngcontent-%COMP%]:visited {\n  color: white;\n}\n\n.project-description-link-button[_ngcontent-%COMP%]:hover {\n  background-color: #a3a3ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvcHJvamVjdHMtaG9tZS9FOlxcWnlkaWNvXFxBbmd1bGFyIFByb2plY3RzXFxQb3J0Zm9saW9XZWJzaXRlXFxjbGllbnQvc3JjXFxzdHlsZXNcXF9wbGFjZWhvbGRlcnMuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvcHJvamVjdHMtaG9tZS9wcm9qZWN0cy1ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50cy9wcm9qZWN0cy1ob21lL0U6XFxaeWRpY29cXEFuZ3VsYXIgUHJvamVjdHNcXFBvcnRmb2xpb1dlYnNpdGVcXGNsaWVudC9zcmNcXGFwcFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFxwcm9qZWN0cy1ob21lXFxwcm9qZWN0cy1ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50cy9wcm9qZWN0cy1ob21lL0U6XFxaeWRpY29cXEFuZ3VsYXIgUHJvamVjdHNcXFBvcnRmb2xpb1dlYnNpdGVcXGNsaWVudC9zcmNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNSSjs7QUNEQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FESUo7O0FDREE7RUFDSSxXQUFBO0FESUo7O0FDQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkNsQmE7RURtQmIsa0JBQUE7RUFFQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBREVKOztBQ0NBO0VBQ0ksMkNBQUE7QURFSjs7QUNDQTtFQUNJLHlDQUFBO0FERUo7O0FDQ0E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUNBQUE7RUFBQSwrQkFBQTtFQUFBLDREQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QURFSjs7QUNDQTtFQUNJLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURFSjs7QUNDQTtFQUNJLDRCQUFBO1VBQUEsb0JBQUE7QURFSjs7QUNDQTtFQUNJLHlCQUFBO0FERUo7O0FDQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FEQ0o7O0FDRUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QURDSjs7QUNFQTtFQUNJLDRCQ3ZGZTtFRHdGZixnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QURDSjs7QUNFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QURDSjs7QUNFQTtFQUNJLGtEQUFBO0FEQ0o7O0FDRUE7RUFDSSxjQzFHTztFRDJHUCxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURDSjs7QUNFQTtFQUNJLGNDakhPO0VEa0hQLGVBQUE7RUFDQSxtQkFBQTtBRENKOztBQ0VBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxjQ3pITztFRDBIUCw4QkFBQTtBRENKOztBQ0VBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtFQUFBLCtCQUFBO0VBQUEsNERBQUE7QURDSjs7QUNFQTtFQUNJLGdDQUFBO1VBQUEsd0JBQUE7QURDSjs7QUNFQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0FEQ0o7O0FDRUE7RUFDSSxZQUFBO0FEQ0o7O0FDRUE7RUFDSSx5QkFBQTtBRENKIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvcHJvamVjdHMtaG9tZS9wcm9qZWN0cy1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWZ1bGwtc2NyZWVuIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbiVjZW50ZXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4lbGluayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufSIsIi5wcm9qZWN0LWRlc2NyaXB0aW9uLCAucHJvamVjdCwgLnByb2plY3RzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jcHJvamVjdHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wcm9qZWN0cy1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2plY3Qge1xuICBtYXJnaW46IDFyZW07XG4gIHdpZHRoOiAxMHJlbTtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGxpbmVhcjtcbn1cblxuI3V3dG91cm5hbWVudHMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL0xvTFVXVC5wbmdcIik7XG59XG5cbiNzb3J0LWFsZ29yaXRobS12aXN1YWxpemVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Tb3J0LnBuZ1wiKTtcbn1cblxuLmJsdXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4yNXMgbGluZWFyO1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICB6LWluZGV4OiAyO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwLjI1cmVtIGJsYWNrO1xuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4yNXMgbGluZWFyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0OmhvdmVyIC5ibHVyIHtcbiAgZmlsdGVyOiBibHVyKDAuMXJlbSk7XG59XG5cbi5wcm9qZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICB6LWluZGV4OiAxMDE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAyNywgMjcsIDAuOCk7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIG1heC13aWR0aDogNDByZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAxMDM7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC4xcmVtICMyNDI0MjQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24taW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmF5O1xufVxuXG4jdXd0b3VybmFtZW50cy1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvVVdUb3VybmFtZW50cy5wbmdcIik7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uLWhlYWRlciB7XG4gIGNvbG9yOiAjMmEyYjJjO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbi1saW5rIHtcbiAgY29sb3I6ICMyYTJiMmM7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24tdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBjb2xvcjogIzJhMmIyYztcbiAgZm9udC1zaXplOiBtaW4oMC43NXJlbSwgMi41dncpO1xufVxuXG5zdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xuICBib3R0b206IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMjVzIGxpbmVhcjtcbn1cblxuc3ZnOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDMwMCUpO1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbi1saW5rLWJ1dHRvbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDAuNzVyZW07XG4gIGJvdHRvbTogMC43NXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY2ZmY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgbGluZWFyO1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbi1saW5rLWJ1dHRvbjp2aXNpdGVkIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbi1saW5rLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhM2EzZmY7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAncGxhY2Vob2xkZXJzJztcclxuXHJcbiNwcm9qZWN0cy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBAZXh0ZW5kICVjZW50ZXItY29udGVudDtcclxufVxyXG5cclxuLnByb2plY3Qge1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdXBlckxpZ2h0R3JheTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIEBleHRlbmQgJWNlbnRlci1jb250ZW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGxpbmVhcjtcclxufVxyXG5cclxuI3V3dG91cm5hbWVudHMge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Mb0xVV1QucG5nXCIpO1xyXG59XHJcblxyXG4jc29ydC1hbGdvcml0aG0tdmlzdWFsaXplciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL1NvcnQucG5nXCIpO1xyXG59XHJcblxyXG4uYmx1ciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMjVzIGxpbmVhcjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWUge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDAuMjVyZW0gYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4yNXMgbGluZWFyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0OmhvdmVyIC5ibHVyIHtcclxuICAgIGZpbHRlcjogYmx1cigwLjFyZW0pO1xyXG59XHJcblxyXG4ucHJvamVjdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuICAgIHotaW5kZXg6IDEwMTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgQGV4dGVuZCAlY2VudGVyLWNvbnRlbnQ7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcclxufVxyXG5cclxuLnByb2plY3QtZGVzY3JpcHRpb24tYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAyNywgMjcsIDAuOCk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZXh0cmVtZUxpZ2h0R3JheTtcclxuICAgIG1heC13aWR0aDogNDByZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB6LWluZGV4OiAxMDM7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuMXJlbSByZ2IoMzYsIDM2LCAzNik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9uLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDEyOCwgMTI4LCAxMjgpO1xyXG59XHJcblxyXG4jdXd0b3VybmFtZW50cy1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL1VXVG91cm5hbWVudHMucG5nXCIpO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXNjcmlwdGlvbi1oZWFkZXIge1xyXG4gICAgY29sb3I6ICRkYXJrR3JheTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtZGVzY3JpcHRpb24tbGluayB7XHJcbiAgICBjb2xvcjogJGRhcmtHcmF5O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtZGVzY3JpcHRpb24tdGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjb2xvcjogJGRhcmtHcmF5O1xyXG4gICAgZm9udC1zaXplOiBtaW4oMC43NXJlbSwgMi41dncpO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDFyZW07XHJcbiAgICBib3R0b206IDFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4yNXMgbGluZWFyO1xyXG59XHJcblxyXG5zdmc6aG92ZXIge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDMwMCUpO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXNjcmlwdGlvbi1saW5rLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwLjc1cmVtO1xyXG4gICAgYm90dG9tOiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMiwgMTAyLCAyNTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBsaW5lYXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9uLWxpbmstYnV0dG9uOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXNjcmlwdGlvbi1saW5rLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAxNjMsIDI1NSk7XHJcbn0iLCIkbGlnaHRHcmF5OiByZ2IoMTY4LCAxNjksIDE3Mik7XHJcbiRzdXBlckxpZ2h0R3JheTogcmdiKDIxOSwgMjE5LCAyMTkpO1xyXG4kZXh0cmVtZUxpZ2h0R3JheTogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4kaGVhZGVySGVpZ2h0OiA1MHB4O1xyXG4kYmxhY2tCYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuODM2KTtcclxuJGxpZ2h0Qmx1ZTogcmdiKDE3MywgMTczLCAyNTUpO1xyXG4kZGFya0dyYXk6ICMyYTJiMmM7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-home',
                templateUrl: './projects-home.component.html',
                styleUrls: ['./projects-home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/components/projects-page/projects-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/portfolio/components/projects-page/projects-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageComponent", function() { return ProjectsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ProjectsPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProjectsPageComponent {
    constructor(router, loader) {
        this.router = router;
        this.loader = loader;
        this.inAnimation = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        let projects = document.getElementsByClassName('project');
        for (let i = 0; i < projects.length; i++) {
            let blur = projects[0].getElementsByClassName('blur')[0];
            let svg = projects[0].getElementsByClassName('project-description-svg')[0];
            let description = projects[0].getElementsByClassName('project-description')[0];
            let background = projects[0].getElementsByClassName('project-description-background')[0];
            blur.addEventListener('click', () => { this.showProject(description); });
            svg.addEventListener('click', () => { this.hideProject(description); });
            background.addEventListener('click', () => { this.hideProject(description); });
        }
    }
    showProject(target) {
        if (this.inAnimation)
            return;
        this.inAnimation = true;
        target.style.display = 'flex';
        setTimeout(() => {
            target.style.opacity = '1.0';
        }, 50);
        setTimeout(() => {
            this.inAnimation = false;
        }, 1000);
    }
    hideProject(target) {
        target.style.opacity = '0.0';
        setTimeout(() => {
            target.style.display = 'none';
        }, 1000);
    }
    goBack() {
        this.loader.showLoader();
        setTimeout(() => {
            this.router.navigate(['portfolio']);
            this.loader.hideLoader();
        }, 1200);
    }
    getRoute() {
        return this.router.url;
    }
}
ProjectsPageComponent.ɵfac = function ProjectsPageComponent_Factory(t) { return new (t || ProjectsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"])); };
ProjectsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsPageComponent, selectors: [["app-projects-page"]], decls: 4, vars: 1, consts: [["id", "projects-page", 1, "page"], [1, "main-container"], ["id", "back-button", 3, "click", 4, "ngIf"], ["id", "back-button", 3, "click"]], template: function ProjectsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsPageComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getRoute() !== "/portfolio");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".page[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  position: relative;\n}\n\n#back-button[_ngcontent-%COMP%] {\n  background-color: #5757ff;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  display: inline-block;\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: background-color 0.25s linear;\n}\n\n#back-button[_ngcontent-%COMP%]:hover {\n  background-color: #aaaaff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvcHJvamVjdHMtcGFnZS9FOlxcWnlkaWNvXFxBbmd1bGFyIFByb2plY3RzXFxQb3J0Zm9saW9XZWJzaXRlXFxjbGllbnQvc3JjXFxhcHBcXHBvcnRmb2xpb1xcY29tcG9uZW50c1xccHJvamVjdHMtcGFnZVxccHJvamVjdHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvcHJvamVjdHMtcGFnZS9FOlxcWnlkaWNvXFxBbmd1bGFyIFByb2plY3RzXFxQb3J0Zm9saW9XZWJzaXRlXFxjbGllbnQvc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvcHJvamVjdHMtcGFnZS9wcm9qZWN0cy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksNEJDRGU7RURFZixrQkFBQTtBRURKOztBRklBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EseUNBQUE7QUVESjs7QUZJQTtFQUNJLHlCQUFBO0FFREoiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50cy9wcm9qZWN0cy1wYWdlL3Byb2plY3RzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLnBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGV4dHJlbWVMaWdodEdyYXk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNiYWNrLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDg3LCAyNTUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMXJlbTtcclxuICAgIHRvcDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgbGluZWFyO1xyXG59XHJcblxyXG4jYmFjay1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMTcwLCAyNTUpO1xyXG59IiwiJGxpZ2h0R3JheTogcmdiKDE2OCwgMTY5LCAxNzIpO1xyXG4kc3VwZXJMaWdodEdyYXk6IHJnYigyMTksIDIxOSwgMjE5KTtcclxuJGV4dHJlbWVMaWdodEdyYXk6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuJGhlYWRlckhlaWdodDogNTBweDtcclxuJGJsYWNrQmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgzNik7XHJcbiRsaWdodEJsdWU6IHJnYigxNzMsIDE3MywgMjU1KTtcclxuJGRhcmtHcmF5OiAjMmEyYjJjOyIsIi5wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jYmFjay1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc1N2ZmO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDFyZW07XG4gIHRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGxpbmVhcjtcbn1cblxuI2JhY2stYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFmZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-page',
                templateUrl: './projects-page.component.html',
                styleUrls: ['./projects-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/components/skills-page/skills-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/portfolio/components/skills-page/skills-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: SkillsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsPageComponent", function() { return SkillsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SkillsPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SkillsPageComponent.ɵfac = function SkillsPageComponent_Factory(t) { return new (t || SkillsPageComponent)(); };
SkillsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsPageComponent, selectors: [["app-skills-page"]], decls: 47, vars: 0, consts: [["id", "skills-page", 1, "page"], [1, "main-container"], ["id", "skills-container"], ["id", "line"], ["id", "left-tip"], ["id", "right-tip"], ["id", "left-description"], ["id", "right-description"], ["id", "bar-container"], [1, "skill", "minimized", 2, "--percent", "100%"], [1, "skill", "minimized", 2, "--percent", "95%"], [1, "skill", "minimized", 2, "--percent", "90%"], [1, "skill", "minimized", 2, "--percent", "80%"], [1, "skill", "minimized", 2, "--percent", "70%"], [1, "skill", "minimized", 2, "--percent", "60%"], [1, "skill", "minimized", 2, "--percent", "50%"], [1, "skill", "minimized", 2, "--percent", "40%"], [1, "skill", "minimized", 2, "--percent", "35%"], [1, "skill", "minimized", 2, "--percent", "25%"], [1, "skill", "minimized", 2, "--percent", "20%"], [1, "skill", "minimized", 2, "--percent", "10%"]], template: function SkillsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Messed with it a few times");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Experienced");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Angular 2+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Javascript/Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "CSS/SASS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "JUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Jasmine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "NodeJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Spring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Firebase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Thymeleaf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Hibernate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Lua");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page[_ngcontent-%COMP%] {\n  background-color: #dbdbdb;\n}\n\n#skills-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#bar-container[_ngcontent-%COMP%] {\n  max-width: 25rem;\n  width: 100%;\n  background-color: whitesmoke;\n  margin-top: 1rem;\n}\n\n#line[_ngcontent-%COMP%] {\n  max-width: 25rem;\n  width: 100%;\n  height: 0.2rem;\n  background-color: #2a2b2c;\n  position: relative;\n  margin-top: 2rem;\n}\n\n#left-tip[_ngcontent-%COMP%], #right-tip[_ngcontent-%COMP%] {\n  background-color: #2a2b2c;\n  width: 0.2rem;\n  height: 1rem;\n}\n\n#left-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n\n#right-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translate(0, -50%);\n}\n\n#left-description[_ngcontent-%COMP%], #right-description[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 8rem;\n}\n\n#left-description[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: -3rem;\n}\n\n#right-description[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: -2rem;\n  text-align: right;\n}\n\n.skill[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n  background-color: #adadff;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  color: #2a2b2c;\n  font-weight: bold;\n  width: var(--percent);\n  overflow: hidden;\n  white-space: nowrap;\n  transition: width 1s;\n}\n\n.minimized[_ngcontent-%COMP%] {\n  width: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvc2tpbGxzLXBhZ2UvRTpcXFp5ZGljb1xcQW5ndWxhciBQcm9qZWN0c1xcUG9ydGZvbGlvV2Vic2l0ZVxcY2xpZW50L3NyY1xcYXBwXFxwb3J0Zm9saW9cXGNvbXBvbmVudHNcXHNraWxscy1wYWdlXFxza2lsbHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvc2tpbGxzLXBhZ2UvRTpcXFp5ZGljb1xcQW5ndWxhciBQcm9qZWN0c1xcUG9ydGZvbGlvV2Vic2l0ZVxcY2xpZW50L3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BvcnRmb2xpby9jb21wb25lbnRzL3NraWxscy1wYWdlL3NraWxscy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJDRmE7QUNDakI7O0FGSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRURKOztBRklBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJDYmU7RURjZixnQkFBQTtBRURKOztBRklBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQ2pCTztFRGtCUCxrQkFBQTtFQUNBLGdCQUFBO0FFREo7O0FGSUE7RUFDSSx5QkN2Qk87RUR3QlAsYUFBQTtFQUNBLFlBQUE7QUVESjs7QUZJQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtBRURKOztBRklBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLDZCQUFBO0FFREo7O0FGSUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUVESjs7QUZJQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUVESjs7QUZJQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBRURKOztBRklBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQ2hFUTtFRGlFUixvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQ25FTztFRG9FUCxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FFREo7O0FGSUE7RUFDSSxTQUFBO0FFREoiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50cy9za2lsbHMtcGFnZS9za2lsbHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4ucGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VwZXJMaWdodEdyYXk7XHJcbn1cclxuXHJcbiNza2lsbHMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2Jhci1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAyNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGV4dHJlbWVMaWdodEdyYXk7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4jbGluZSB7XHJcbiAgICBtYXgtd2lkdGg6IDI1cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDAuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrR3JheTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbiNsZWZ0LXRpcCwgI3JpZ2h0LXRpcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya0dyYXk7XHJcbiAgICB3aWR0aDogMC4ycmVtO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4jbGVmdC10aXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbn1cclxuXHJcbiNyaWdodC10aXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxufVxyXG5cclxuI2xlZnQtZGVzY3JpcHRpb24sICNyaWdodC1kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiA4cmVtO1xyXG59XHJcblxyXG4jbGVmdC1kZXNjcmlwdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAtM3JlbTtcclxufVxyXG5cclxuI3JpZ2h0LWRlc2NyaXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAtMnJlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uc2tpbGwge1xyXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRCbHVlO1xyXG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgY29sb3I6ICRkYXJrR3JheTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IHZhcigtLXBlcmNlbnQpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcztcclxufVxyXG5cclxuLm1pbmltaXplZCB7XHJcbiAgICB3aWR0aDogMCU7XHJcbn0iLCIkbGlnaHRHcmF5OiByZ2IoMTY4LCAxNjksIDE3Mik7XHJcbiRzdXBlckxpZ2h0R3JheTogcmdiKDIxOSwgMjE5LCAyMTkpO1xyXG4kZXh0cmVtZUxpZ2h0R3JheTogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4kaGVhZGVySGVpZ2h0OiA1MHB4O1xyXG4kYmxhY2tCYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuODM2KTtcclxuJGxpZ2h0Qmx1ZTogcmdiKDE3MywgMTczLCAyNTUpO1xyXG4kZGFya0dyYXk6ICMyYTJiMmM7IiwiLnBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xufVxuXG4jc2tpbGxzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNiYXItY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAyNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbiNsaW5lIHtcbiAgbWF4LXdpZHRoOiAyNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYjJjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbiNsZWZ0LXRpcCwgI3JpZ2h0LXRpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJiMmM7XG4gIHdpZHRoOiAwLjJyZW07XG4gIGhlaWdodDogMXJlbTtcbn1cblxuI2xlZnQtdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbiNyaWdodC10aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4jbGVmdC1kZXNjcmlwdGlvbiwgI3JpZ2h0LWRlc2NyaXB0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiA4cmVtO1xufVxuXG4jbGVmdC1kZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAtM3JlbTtcbn1cblxuI3JpZ2h0LWRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAtMnJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5za2lsbCB7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGFkZmY7XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGNvbG9yOiAjMmEyYjJjO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IHZhcigtLXBlcmNlbnQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcztcbn1cblxuLm1pbmltaXplZCB7XG4gIHdpZHRoOiAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills-page',
                templateUrl: './skills-page.component.html',
                styleUrls: ['./skills-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/components/title-page/title-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/portfolio/components/title-page/title-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: TitlePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlePageComponent", function() { return TitlePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_scroll_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/scroll-handler.service */ "./src/app/portfolio/services/scroll-handler.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/portfolio/components/header/header.component.ts");




class TitlePageComponent {
    constructor(scrollHandlerService) {
        this.scrollHandlerService = scrollHandlerService;
    }
    ngOnInit() {
    }
    scroll() {
        let element = document.getElementById('about-page');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
TitlePageComponent.ɵfac = function TitlePageComponent_Factory(t) { return new (t || TitlePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_scroll_handler_service__WEBPACK_IMPORTED_MODULE_1__["ScrollHandlerService"])); };
TitlePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitlePageComponent, selectors: [["app-title-page"]], decls: 10, vars: 0, consts: [["id", "title-page"], ["id", "title"], ["id", "job"], ["id", "about-me"], ["id", "about-me-background"], ["id", "about-me-text", 3, "click"]], template: function TitlePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Matthew Hwang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Full-stack web developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TitlePageComponent_Template_div_click_7_listener() { return ctx.scroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-header");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], styles: ["#title-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#title-page[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(100vh - 50px);\n  flex-direction: column;\n}\n\n#title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n#title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 0.2rem;\n  background-color: white;\n  margin-top: 0.3rem;\n  margin-bottom: 0.5rem;\n}\n\n#job[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n}\n\n#about-me[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150%;\n  left: 50%;\n  display: inline-block;\n  transform: translate(-50%, 0%);\n  font-size: 0.8em;\n  padding: 0.5rem 0.75rem;\n  border: 0.1rem solid white;\n  text-align: center;\n  cursor: pointer;\n  overflow: hidden;\n}\n\n#about-me-background[_ngcontent-%COMP%] {\n  width: 150%;\n  height: 300%;\n  background-color: #adadff;\n  position: absolute;\n  left: 0%;\n  top: 50%;\n  transform: translate(-110%, -50%) rotate(15deg);\n  z-index: 0;\n  transition: left 0.5s;\n}\n\n#about-me-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n#about-me[_ngcontent-%COMP%]:hover   #about-me-background[_ngcontent-%COMP%] {\n  left: 120%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvdGl0bGUtcGFnZS9FOlxcWnlkaWNvXFxBbmd1bGFyIFByb2plY3RzXFxQb3J0Zm9saW9XZWJzaXRlXFxjbGllbnQvc3JjXFxzdHlsZXNcXF9wbGFjZWhvbGRlcnMuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudHMvdGl0bGUtcGFnZS90aXRsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50cy90aXRsZS1wYWdlL0U6XFxaeWRpY29cXEFuZ3VsYXIgUHJvamVjdHNcXFBvcnRmb2xpb1dlYnNpdGVcXGNsaWVudC9zcmNcXGFwcFxccG9ydGZvbGlvXFxjb21wb25lbnRzXFx0aXRsZS1wYWdlXFx0aXRsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50cy90aXRsZS1wYWdlL0U6XFxaeWRpY29cXEFuZ3VsYXIgUHJvamVjdHNcXFBvcnRmb2xpb1dlYnNpdGVcXGNsaWVudC9zcmNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNSSjs7QUNEQTtFQUVJLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FER0o7O0FDQUE7RUFDSSxlQUFBO0FER0o7O0FDQUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FER0o7O0FDQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QURHSjs7QUNBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURHSjs7QUNBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJDMUNRO0VEMkNSLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBREdKOztBQ0FBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FER0o7O0FDQUE7RUFDSSxVQUFBO0FER0oiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50cy90aXRsZS1wYWdlL3RpdGxlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlZnVsbC1zY3JlZW4ge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuJWNlbnRlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiVsaW5rIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59IiwiI3RpdGxlLXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3RpdGxlLXBhZ2Uge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jdGl0bGUge1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbiN0aXRsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbiNqb2Ige1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNhYm91dC1tZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jYWJvdXQtbWUtYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxNTAlO1xuICBoZWlnaHQ6IDMwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGFkZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTEwJSwgLTUwJSkgcm90YXRlKDE1ZGVnKTtcbiAgei1pbmRleDogMDtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzO1xufVxuXG4jYWJvdXQtbWUtdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuI2Fib3V0LW1lOmhvdmVyICNhYm91dC1tZS1iYWNrZ3JvdW5kIHtcbiAgbGVmdDogMTIwJTtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICdwbGFjZWhvbGRlcnMnO1xyXG5cclxuI3RpdGxlLXBhZ2Uge1xyXG4gICAgQGV4dGVuZCAlY2VudGVyLWNvbnRlbnQ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXJIZWlnaHR9KTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbn1cclxuXHJcbiN0aXRsZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDAuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4zcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4jam9iIHtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jYWJvdXQtbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jYWJvdXQtbWUtYmFja2dyb3VuZCB7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIGhlaWdodDogMzAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodEJsdWU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTExMCUsIC01MCUpIHJvdGF0ZSgxNWRlZyk7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjVzO1xyXG59XHJcblxyXG4jYWJvdXQtbWUtdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4jYWJvdXQtbWU6aG92ZXIgI2Fib3V0LW1lLWJhY2tncm91bmQge1xyXG4gICAgbGVmdDogMTIwJTtcclxufSIsIiRsaWdodEdyYXk6IHJnYigxNjgsIDE2OSwgMTcyKTtcclxuJHN1cGVyTGlnaHRHcmF5OiByZ2IoMjE5LCAyMTksIDIxOSk7XHJcbiRleHRyZW1lTGlnaHRHcmF5OiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiRoZWFkZXJIZWlnaHQ6IDUwcHg7XHJcbiRibGFja0JhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44MzYpO1xyXG4kbGlnaHRCbHVlOiByZ2IoMTczLCAxNzMsIDI1NSk7XHJcbiRkYXJrR3JheTogIzJhMmIyYzsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitlePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-title-page',
                templateUrl: './title-page.component.html',
                styleUrls: ['./title-page.component.scss']
            }]
    }], function () { return [{ type: _services_scroll_handler_service__WEBPACK_IMPORTED_MODULE_1__["ScrollHandlerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_background_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/background/background.component */ "./src/app/portfolio/components/background/background.component.ts");
/* harmony import */ var _components_title_page_title_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/title-page/title-page.component */ "./src/app/portfolio/components/title-page/title-page.component.ts");
/* harmony import */ var _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about-page/about-page.component */ "./src/app/portfolio/components/about-page/about-page.component.ts");
/* harmony import */ var _components_skills_page_skills_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/skills-page/skills-page.component */ "./src/app/portfolio/components/skills-page/skills-page.component.ts");
/* harmony import */ var _components_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects-page/projects-page.component */ "./src/app/portfolio/components/projects-page/projects-page.component.ts");
/* harmony import */ var _components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact-page/contact-page.component */ "./src/app/portfolio/components/contact-page/contact-page.component.ts");








class PortfolioComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 6, vars: 0, template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-title-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-about-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-skills-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-projects-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contact-page");
    } }, directives: [_components_background_background_component__WEBPACK_IMPORTED_MODULE_1__["BackgroundComponent"], _components_title_page_title_page_component__WEBPACK_IMPORTED_MODULE_2__["TitlePageComponent"], _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__["AboutPageComponent"], _components_skills_page_skills_page_component__WEBPACK_IMPORTED_MODULE_4__["SkillsPageComponent"], _components_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsPageComponent"], _components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/services/file-handler.service.ts":
/*!************************************************************!*\
  !*** ./src/app/portfolio/services/file-handler.service.ts ***!
  \************************************************************/
/*! exports provided: FileHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHandlerService", function() { return FileHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class FileHandlerService {
    constructor(http) {
        this.http = http;
    }
    readFile(url) {
        return this.http.get(url, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return data.split('\n');
        }));
    }
}
FileHandlerService.ɵfac = function FileHandlerService_Factory(t) { return new (t || FileHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FileHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileHandlerService, factory: FileHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/services/scroll-handler.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/portfolio/services/scroll-handler.service.ts ***!
  \**************************************************************/
/*! exports provided: ScrollHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollHandlerService", function() { return ScrollHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ScrollHandlerService {
    constructor() {
        this.isLocked = false;
        this.isOnTitle = true;
        this.isOnAbout = false;
        this.isOnSkills = false;
        this.isOnProjects = false;
        this.isOnContact = false;
        window.onscroll = () => {
            this.updateScroll();
        };
    }
    isOnPage(page) {
        let element = document.getElementById(page + '-page');
        if (!element)
            return false;
        if (page === 'projects') {
        }
        return window.scrollY >= element.offsetTop - 1 && window.scrollY < element.offsetTop + element.offsetHeight;
    }
    updateScroll() {
        this.isOnTitle = this.isOnPage('title');
        this.isOnAbout = this.isOnPage('about');
        this.isOnSkills = this.isOnPage('skills');
        this.isOnProjects = this.isOnPage('projects');
        this.isOnContact = this.isOnPage('contact');
        let aboutPage = document.getElementById('about-page');
        let header = document.getElementById('header');
        if (window.scrollY < aboutPage.offsetTop) {
            this.isOnTitle = true;
            if (window.scrollY + header.offsetHeight > aboutPage.offsetTop) {
                this.isLocked = true;
                this.isOnTitle = false;
                this.isOnAbout = true;
            }
            else {
                this.isLocked = false;
            }
        }
        else {
            this.isLocked = true;
        }
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            this.isOnProjects = false;
            this.isOnContact = true;
        }
        this.checkClasses('transparent-right');
        this.checkClasses('transparent-left');
        this.checkClasses('transparent-top');
        let bars = document.getElementById('bar-container');
        if (bars && bars.offsetTop <= window.scrollY + 500) {
            let list = document.getElementsByClassName('minimized');
            for (let i = 0; i < list.length; i++) {
                let element = list.item(i);
                setTimeout(() => { element.classList.remove('minimized'); }, i * 150);
            }
        }
    }
    checkClasses(className) {
        let list = document.getElementsByClassName(className);
        for (let i = 0; i < list.length; i++) {
            let element = list.item(i);
            if (element.offsetTop <= window.scrollY + 500) {
                element.classList.remove(className);
            }
        }
    }
}
ScrollHandlerService.ɵfac = function ScrollHandlerService_Factory(t) { return new (t || ScrollHandlerService)(); };
ScrollHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScrollHandlerService, factory: ScrollHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");



class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    ngOnInit() {
        setTimeout(() => { this.loaderService.hideLoader(); }, 1000);
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 17, vars: 0, consts: [["id", "loader"], ["id", "center"], ["id", "center-ball", 1, "ball", "center"], ["id", "inner-ring", 1, "center", "ring"], ["id", "small-ball-1", 1, "ball", "small-ball"], ["id", "small-ball-2", 1, "ball", "small-ball"], ["id", "arc-1", 1, "arc", "small-arc"], ["id", "arc-2", 1, "arc", "small-arc"], ["id", "arc-3", 1, "arc", "small-arc"], ["id", "arc-4", 1, "arc", "small-arc"], ["id", "outer-ring", 1, "center", "ring"], ["id", "large-ball-1", 1, "ball", "large-ball"], ["id", "large-ball-2", 1, "ball", "large-ball"], ["id", "arc-5", 1, "arc", "big-arc"], ["id", "arc-6", 1, "arc", "big-arc"], ["id", "arc-7", 1, "arc", "big-arc"], ["id", "arc-8", 1, "arc", "big-arc"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#loader[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n}\n\n#loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#loader[_ngcontent-%COMP%] {\n  z-index: 999;\n  background-color: #36393F;\n  transition-timing-function: ease-in;\n  transition: top 1s;\n}\n\n#center[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.center[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  transform: translate(-50%, -50%);\n}\n\n#center-ball[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.ball[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #a8a9ac;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.small-ball[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n\n.large-ball[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.ring[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n}\n\n#inner-ring[_ngcontent-%COMP%] {\n  -webkit-animation: spin 3s linear infinite;\n          animation: spin 3s linear infinite;\n}\n\n#outer-ring[_ngcontent-%COMP%] {\n  -webkit-animation: spin 5s linear infinite;\n          animation: spin 5s linear infinite;\n}\n\n#small-ball-1[_ngcontent-%COMP%] {\n  transform: translate(calc(-50% - 40px), calc(-50%));\n}\n\n#small-ball-2[_ngcontent-%COMP%] {\n  transform: translate(calc(-50% + 40px), calc(-50%));\n}\n\n#large-ball-1[_ngcontent-%COMP%] {\n  transform: translate(calc(-50% - 70px), calc(-50%));\n}\n\n#large-ball-2[_ngcontent-%COMP%] {\n  transform: translate(calc(-50% + 70px), calc(-50%));\n}\n\n.arc[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 50%;\n  border: 3px solid;\n}\n\n.small-arc[_ngcontent-%COMP%] {\n  width: 78px;\n  height: 78px;\n}\n\n.big-arc[_ngcontent-%COMP%] {\n  width: 138px;\n  height: 138px;\n}\n\n#arc-1[_ngcontent-%COMP%] {\n  border-color: transparent transparent #a8a9ac transparent;\n  transform: translate(-50%, -50%) rotate(-25deg);\n}\n\n#arc-2[_ngcontent-%COMP%] {\n  border-color: transparent transparent transparent #a8a9ac;\n  transform: translate(-50%, -50%) rotate(-40deg);\n}\n\n#arc-3[_ngcontent-%COMP%] {\n  border-color: #a8a9ac transparent transparent transparent;\n  transform: translate(-50%, -50%) rotate(-25deg);\n}\n\n#arc-4[_ngcontent-%COMP%] {\n  border-color: transparent #a8a9ac transparent transparent;\n  transform: translate(-50%, -50%) rotate(-40deg);\n}\n\n#arc-5[_ngcontent-%COMP%] {\n  border-color: transparent transparent #a8a9ac transparent;\n  transform: translate(-50%, -50%) rotate(-30deg);\n}\n\n#arc-6[_ngcontent-%COMP%] {\n  border-color: transparent transparent transparent #a8a9ac;\n  transform: translate(-50%, -50%) rotate(-40deg);\n}\n\n#arc-7[_ngcontent-%COMP%] {\n  border-color: #a8a9ac transparent transparent transparent;\n  transform: translate(-50%, -50%) rotate(-30deg);\n}\n\n#arc-8[_ngcontent-%COMP%] {\n  border-color: transparent #a8a9ac transparent transparent;\n  transform: translate(-50%, -50%) rotate(-40deg);\n}\n\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL0U6XFxaeWRpY29cXEFuZ3VsYXIgUHJvamVjdHNcXFBvcnRmb2xpb1dlYnNpdGVcXGNsaWVudC9zcmNcXHN0eWxlc1xcX3BsYWNlaG9sZGVycy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvRTpcXFp5ZGljb1xcQW5ndWxhciBQcm9qZWN0c1xcUG9ydGZvbGlvV2Vic2l0ZVxcY2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGxvYWRlclxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvRTpcXFp5ZGljb1xcQW5ndWxhciBQcm9qZWN0c1xcUG9ydGZvbGlvV2Vic2l0ZVxcY2xpZW50L3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FDVkE7RUFHSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FEV0o7O0FDUkE7RUFDSSxrQkFBQTtBRFdKOztBQ1JBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGdDQUFBO0FEV0o7O0FDUkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRFdKOztBQ1JBO0VBQ0ksa0JBQUE7RUFDQSx5QkM5QlE7RUQrQlIsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBRFdKOztBQ1JBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURXSjs7QUNSQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FEV0o7O0FDUkE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtBRFdKOztBQ1JBO0VBQ0ksMENBQUE7VUFBQSxrQ0FBQTtBRFdKOztBQ1JBO0VBQ0ksMENBQUE7VUFBQSxrQ0FBQTtBRFdKOztBQ1JBO0VBQ0ksbURBQUE7QURXSjs7QUNSQTtFQUNJLG1EQUFBO0FEV0o7O0FDUkE7RUFDSSxtREFBQTtBRFdKOztBQ1JBO0VBQ0ksbURBQUE7QURXSjs7QUNSQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEV0o7O0FDUkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRFdKOztBQ1JBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QURXSjs7QUNSQTtFQUNJLHlEQUFBO0VBQ0EsK0NBQUE7QURXSjs7QUNSQTtFQUNJLHlEQUFBO0VBQ0EsK0NBQUE7QURXSjs7QUNSQTtFQUNJLHlEQUFBO0VBQ0EsK0NBQUE7QURXSjs7QUNSQTtFQUNJLHlEQUFBO0VBQ0EsK0NBQUE7QURXSjs7QUNSQTtFQUNJLHlEQUFBO0VBQ0EsK0NBQUE7QURXSjs7QUNSQTtFQUNJLHlEQUFBO0VBQ0EsK0NBQUE7QURXSjs7QUNSQTtFQUNJLHlEQUFBO0VBQ0EsK0NBQUE7QURXSjs7QUNSQTtFQUNJLHlEQUFBO0VBQ0EsK0NBQUE7QURXSjs7QUNSQTtFQUNJO0lBQUssdUJBQUE7RURZUDtFQ1hFO0lBQU8seUJBQUE7RURjVDtBQUNGOztBQ2pCQTtFQUNJO0lBQUssdUJBQUE7RURZUDtFQ1hFO0lBQU8seUJBQUE7RURjVDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVmdWxsLXNjcmVlbiB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4lY2VudGVyLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuJWxpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn0iLCIjbG9hZGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbiNsb2FkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2xvYWRlciB7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzkzRjtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIHRyYW5zaXRpb246IHRvcCAxcztcbn1cblxuI2NlbnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuI2NlbnRlci1iYWxsIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmJhbGwge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGE5YWM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuXG4uc21hbGwtYmFsbCB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi5sYXJnZS1iYWxsIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnJpbmcge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4jaW5uZXItcmluZyB7XG4gIGFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbiNvdXRlci1yaW5nIHtcbiAgYW5pbWF0aW9uOiBzcGluIDVzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuI3NtYWxsLWJhbGwtMSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSAtIDQwcHgpLCBjYWxjKC01MCUpKTtcbn1cblxuI3NtYWxsLWJhbGwtMiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSArIDQwcHgpLCBjYWxjKC01MCUpKTtcbn1cblxuI2xhcmdlLWJhbGwtMSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSAtIDcwcHgpLCBjYWxjKC01MCUpKTtcbn1cblxuI2xhcmdlLWJhbGwtMiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSArIDcwcHgpLCBjYWxjKC01MCUpKTtcbn1cblxuLmFyYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkO1xufVxuXG4uc21hbGwtYXJjIHtcbiAgd2lkdGg6IDc4cHg7XG4gIGhlaWdodDogNzhweDtcbn1cblxuLmJpZy1hcmMge1xuICB3aWR0aDogMTM4cHg7XG4gIGhlaWdodDogMTM4cHg7XG59XG5cbiNhcmMtMSB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2E4YTlhYyB0cmFuc3BhcmVudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC0yNWRlZyk7XG59XG5cbiNhcmMtMiB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2E4YTlhYztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00MGRlZyk7XG59XG5cbiNhcmMtMyB7XG4gIGJvcmRlci1jb2xvcjogI2E4YTlhYyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC0yNWRlZyk7XG59XG5cbiNhcmMtNCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2E4YTlhYyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00MGRlZyk7XG59XG5cbiNhcmMtNSB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2E4YTlhYyB0cmFuc3BhcmVudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC0zMGRlZyk7XG59XG5cbiNhcmMtNiB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2E4YTlhYztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00MGRlZyk7XG59XG5cbiNhcmMtNyB7XG4gIGJvcmRlci1jb2xvcjogI2E4YTlhYyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC0zMGRlZyk7XG59XG5cbiNhcmMtOCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2E4YTlhYyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00MGRlZyk7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59IiwiQGltcG9ydCAncGxhY2Vob2xkZXJzJztcclxuQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbiNsb2FkZXIge1xyXG4gICAgQGV4dGVuZCAlZnVsbC1zY3JlZW47XHJcbiAgICBAZXh0ZW5kICVjZW50ZXItY29udGVudDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM5M0Y7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIHRyYW5zaXRpb246IHRvcCAxcztcclxufVxyXG5cclxuI2NlbnRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4jY2VudGVyLWJhbGwge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5iYWxsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodEdyYXk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4uc21hbGwtYmFsbCB7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxufVxyXG5cclxuLmxhcmdlLWJhbGwge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yaW5nIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4jaW5uZXItcmluZyB7XHJcbiAgICBhbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4jb3V0ZXItcmluZyB7XHJcbiAgICBhbmltYXRpb246IHNwaW4gNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4jc21hbGwtYmFsbC0xIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSAtIDQwcHgpLCBjYWxjKC01MCUpKTtcclxufVxyXG5cclxuI3NtYWxsLWJhbGwtMiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC01MCUgKyA0MHB4KSwgY2FsYygtNTAlKSk7XHJcbn1cclxuXHJcbiNsYXJnZS1iYWxsLTEge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYygtNTAlIC0gNzBweCksIGNhbGMoLTUwJSkpO1xyXG59XHJcblxyXG4jbGFyZ2UtYmFsbC0yIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSArIDcwcHgpLCBjYWxjKC01MCUpKTtcclxufVxyXG5cclxuLmFyYyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQ7XHJcbn1cclxuXHJcbi5zbWFsbC1hcmMge1xyXG4gICAgd2lkdGg6IDc4cHg7XHJcbiAgICBoZWlnaHQ6IDc4cHg7XHJcbn1cclxuXHJcbi5iaWctYXJjIHtcclxuICAgIHdpZHRoOiAxMzhweDtcclxuICAgIGhlaWdodDogMTM4cHg7XHJcbn1cclxuXHJcbiNhcmMtMSB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRsaWdodEdyYXkgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTI1ZGVnKTtcclxufVxyXG5cclxuI2FyYy0yIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJGxpZ2h0R3JheTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDBkZWcpO1xyXG59XHJcblxyXG4jYXJjLTMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkbGlnaHRHcmF5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC0yNWRlZyk7XHJcbn1cclxuXHJcbiNhcmMtNCB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICRsaWdodEdyYXkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQwZGVnKTtcclxufVxyXG5cclxuI2FyYy01IHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJGxpZ2h0R3JheSB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtMzBkZWcpO1xyXG59XHJcblxyXG4jYXJjLTYge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkbGlnaHRHcmF5O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00MGRlZyk7XHJcbn1cclxuXHJcbiNhcmMtNyB7XHJcbiAgICBib3JkZXItY29sb3I6ICRsaWdodEdyYXkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTMwZGVnKTtcclxufVxyXG5cclxuI2FyYy04IHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgJGxpZ2h0R3JheSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDBkZWcpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufSIsIiRsaWdodEdyYXk6IHJnYigxNjgsIDE2OSwgMTcyKTtcclxuJHN1cGVyTGlnaHRHcmF5OiByZ2IoMjE5LCAyMTksIDIxOSk7XHJcbiRleHRyZW1lTGlnaHRHcmF5OiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiRoZWFkZXJIZWlnaHQ6IDUwcHg7XHJcbiRibGFja0JhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44MzYpO1xyXG4kbGlnaHRCbHVlOiByZ2IoMTczLCAxNzMsIDI1NSk7XHJcbiRkYXJrR3JheTogIzJhMmIyYzsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return [{ type: _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/loader/loader.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/loader/loader.service.ts ***!
  \**********************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoaderService {
    constructor() {
    }
    showLoader() {
        document.getElementById('loader').style.top = '0%';
    }
    hideLoader() {
        document.getElementById('loader').style.top = '100%';
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sort-algorithm-visualizer/sort-algorithm-visualizer.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/sort-algorithm-visualizer/sort-algorithm-visualizer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SortAlgorithmVisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortAlgorithmVisualizerComponent", function() { return SortAlgorithmVisualizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/loader/loader.service */ "./src/app/shared/services/loader/loader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SortAlgorithmVisualizerComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortAlgorithmVisualizerComponent_div_16_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.changeMode("selection", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Selection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortAlgorithmVisualizerComponent_div_16_Template_div_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.changeMode("bubble", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bubble");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortAlgorithmVisualizerComponent_div_16_Template_div_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.changeMode("insertion", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Insertion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortAlgorithmVisualizerComponent_div_16_Template_div_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.changeMode("merge", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Merge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortAlgorithmVisualizerComponent_div_16_Template_div_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.changeMode("quick", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Quick");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortAlgorithmVisualizerComponent_div_16_Template_div_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.changeMode("heap", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Heap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortAlgorithmVisualizerComponent_div_16_Template_div_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.changeMode("counting", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Counting");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortAlgorithmVisualizerComponent_div_16_Template_div_click_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.changeMode("radix", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Radix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortAlgorithmVisualizerComponent_div_16_Template_div_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.changeMode("bucket", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Bucket");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
class SortAlgorithmVisualizerComponent {
    constructor(zone, router, loader) {
        this.zone = zone;
        this.router = router;
        this.loader = loader;
        this.visible = true;
        this.mode = '';
        this.numberOfValues = 20;
        this.minHeight = 250;
        this.enabled = true;
        this.list = [];
        this.delay = ms => new Promise(res => setTimeout(res, ms));
        this.speedVariable = 100;
        this.insertionSort = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let length = this.list.length;
            for (let i = 0; i < length; i++) {
                let j = i - 1;
                this.list[i].status = 'searching';
                while (j >= 0) {
                    this.list[j].status = 'searching';
                    this.list[j + 1].status = 'searching';
                    this.draw();
                    yield this.delay(this.delaySpeed);
                    if (this.list[j].height > this.list[j + 1].height) {
                        this.list[j + 1].status = 'sorting';
                        this.list[j].status = 'sorting';
                        this.draw();
                        yield this.delay(this.delaySpeed);
                        let temp = this.list[j + 1];
                        this.list[j + 1] = this.list[j];
                        this.list[j] = temp;
                        this.draw();
                        yield this.delay(this.delaySpeed);
                        this.list[j].status = 'sorted';
                        this.list[j + 1].status = 'sorted';
                        j--;
                        this.draw();
                        yield this.delay(this.delaySpeed);
                    }
                    else {
                        this.list[j].status = 'sorted';
                        this.list[j + 1].status = 'sorted';
                        this.draw();
                        yield this.delay(this.delaySpeed);
                        break;
                    }
                }
                this.draw();
                yield this.delay(this.delaySpeed);
            }
            this.enabled = true;
        });
        this.bubbleSort = (length) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (length === 1) {
                this.enabled = true;
            }
            for (let i = 0; i < length - 1; i++) {
                this.list[i].status = 'searching';
                this.list[i + 1].status = 'searching';
                this.draw();
                yield this.delay(this.delaySpeed);
                if (this.list[i].height > this.list[i + 1].height) {
                    this.list[i].status = 'sorting';
                    this.list[i + 1].status = 'sorting';
                    this.draw();
                    yield this.delay(this.delaySpeed);
                    let temp = this.list[i];
                    this.list[i] = this.list[i + 1];
                    this.list[i + 1] = temp;
                    this.draw();
                    yield this.delay(this.delaySpeed);
                }
                this.list[i].status = 'unsorted';
            }
            this.list[length - 1].status = 'sorted';
            this.draw();
            yield this.delay(this.delaySpeed);
            this.bubbleSort(length - 1);
        });
        this.selectionSort = (i) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let length = this.list.length;
            let min = i;
            for (let j = i; j < length; j++) {
                this.list[j].status = 'searching';
                this.list[min].status = 'sorting';
                this.draw();
                yield this.delay(this.delaySpeed);
                if (this.list[j].height < this.list[min].height) {
                    this.list[min].status = 'unsorted';
                    this.list[j].status = 'sorting';
                    this.draw();
                    min = j;
                }
                else {
                    this.list[j].status = 'unsorted';
                }
                yield this.delay(this.delaySpeed);
            }
            if (this.list[length - 1].status !== 'sorting') {
                this.list[length - 1].status = 'unsorted';
            }
            this.list[i].status = 'sorting';
            this.draw();
            yield this.delay(this.delaySpeed);
            let temp = this.list[i];
            this.list[i] = this.list[min];
            this.list[min] = temp;
            this.draw();
            yield this.delay(this.delaySpeed);
            this.list[min].status = 'unsorted';
            this.list[i].status = 'sorted';
            this.draw();
            yield this.delay(this.delaySpeed);
            if (i + 1 < length) {
                this.selectionSort(i + 1);
            }
            else {
                this.enabled = true;
            }
        });
    }
    ngOnInit() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.mode = 'selection';
        this.checkSize();
        window.onresize = () => {
            this.checkSize();
        };
        this.generateNewGraph();
    }
    checkSize() {
        if (window.innerWidth > 900 && !this.visible) {
            this.visible = true;
        }
    }
    toggleVisibility() {
        this.visible = !this.visible;
    }
    changeMode(newMode, event) {
        if (!this.enabled)
            return;
        let elements = document.getElementById('collapse-container').children;
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            element.classList.remove('selected');
        }
        let target = (event.target || event.srcElement);
        target.classList.add('selected');
        this.mode = newMode;
        this.generateNewGraph();
    }
    adjustSpeed() {
        this.delaySpeed = Math.ceil(5000 / this.speedVariable);
    }
    goBack() {
        this.loader.showLoader();
        setTimeout(() => {
            this.router.navigate(['portfolio']);
            this.loader.hideLoader();
        }, 1200);
    }
    generateNewGraph() {
        if (!this.enabled)
            return;
        let newValue = Math.max(this.numberOfValues * 5, this.minHeight);
        this.canvasHeight = newValue;
        this.canvas.style.height = this.canvasHeight + 'px';
        this.canvas.height = this.canvasHeight;
        this.canvas.width = this.canvas.offsetWidth;
        this.list = [];
        for (let i = 0; i < this.numberOfValues; i++) {
            this.list.push({
                height: Math.floor(Math.random() * Math.floor(this.canvasHeight - 10)) + 10,
                status: 'unsorted'
            });
        }
        this.adjustSpeed();
        this.draw();
    }
    sliderChanged(event) {
        let target = (event.target || event.srcElement);
        this.numberOfValues = Number(target.value);
        this.generateNewGraph();
    }
    speedChanged(event) {
        let target = (event.target || event.srcElement);
        this.speedVariable = Number(target.value);
        this.adjustSpeed();
    }
    draw() {
        let width = this.canvas.offsetWidth;
        this.canvas.width = width;
        let ctx = this.ctx;
        ctx.clearRect(0, 0, width, this.canvasHeight);
        let widthInterval = width / this.numberOfValues;
        for (let i = 0; i < this.numberOfValues; i++) {
            if (this.list[i].status === 'unsorted') {
                ctx.fillStyle = '#9EA6FF';
                ctx.strokeStyle = '#BABFFF';
            }
            else if (this.list[i].status === 'sorting') {
                ctx.fillStyle = '#47C947';
                ctx.strokeStyle = '#50E050';
            }
            else if (this.list[i].status === 'searching') {
                ctx.fillStyle = '#FF4753';
                ctx.strokeStyle = '#FF7F87';
            }
            else if (this.list[i].status === 'sorted') {
                ctx.fillStyle = '#FFB270';
                ctx.strokeStyle = '#FFC89E';
            }
            ctx.fillRect(i * widthInterval, 0, widthInterval, this.list[i].height);
            ctx.strokeRect(i * widthInterval, 0, widthInterval, this.list[i].height);
        }
    }
    sort() {
        if (!this.enabled)
            return;
        this.enabled = false;
        if (this.mode === 'selection') {
            this.selectionSort(0);
        }
        else if (this.mode === 'bubble') {
            this.bubbleSort(this.list.length);
        }
        else if (this.mode === 'insertion') {
            this.insertionSort();
        }
    }
}
SortAlgorithmVisualizerComponent.ɵfac = function SortAlgorithmVisualizerComponent_Factory(t) { return new (t || SortAlgorithmVisualizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"])); };
SortAlgorithmVisualizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SortAlgorithmVisualizerComponent, selectors: [["app-sort-algorithm-visualizer"]], decls: 21, vars: 9, consts: [["id", "header"], ["id", "sort-button", 3, "ngClass", "click"], [1, "slider-container"], [1, "slider-label"], ["type", "range", "min", "10", "max", "100", "value", "20", "id", "slider", 3, "disabled", "input"], ["type", "range", "min", "5", "max", "1000", "value", "100", "id", "slider", 3, "input"], ["id", "reset-button", 3, "ngClass", "click"], ["id", "mode-container"], ["id", "sort-mode-button", 3, "click"], ["id", "collapse-container", 4, "ngIf"], ["id", "graph-container"], ["id", "back-button", 3, "click"], ["id", "canvas"], ["id", "collapse-container"], [1, "sort-mode", "selected", 3, "click"], [1, "sort-mode", 3, "click"]], template: function SortAlgorithmVisualizerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortAlgorithmVisualizerComponent_Template_div_click_1_listener() { return ctx.sort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "# of elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function SortAlgorithmVisualizerComponent_Template_input_input_6_listener($event) { return ctx.sliderChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "sort speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function SortAlgorithmVisualizerComponent_Template_input_input_10_listener($event) { return ctx.speedChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortAlgorithmVisualizerComponent_Template_div_click_11_listener() { return ctx.generateNewGraph(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortAlgorithmVisualizerComponent_Template_div_click_14_listener() { return ctx.toggleVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SortAlgorithmVisualizerComponent_div_16_Template, 19, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortAlgorithmVisualizerComponent_Template_div_click_18_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "canvas", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, !ctx.enabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.enabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, !ctx.enabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.visible ? "Hide Modes" : "Show Modes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["#header[_ngcontent-%COMP%] {\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.877);\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n#sort-button[_ngcontent-%COMP%] {\n  background-color: #127e12;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  margin-left: 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n#sort-button[_ngcontent-%COMP%]:hover, #sort-mode-button[_ngcontent-%COMP%]:hover {\n  background-color: #37aa37;\n}\n\n#reset-button[_ngcontent-%COMP%] {\n  background-color: #b63b3b;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  margin-left: 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n#reset-button[_ngcontent-%COMP%]:hover {\n  background-color: #cc7878;\n}\n\n.sort-mode[_ngcontent-%COMP%] {\n  width: 5rem;\n  text-align: center;\n  margin-left: 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.sort-mode[_ngcontent-%COMP%]:hover, .selected[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  padding-top: 1rem;\n  position: relative;\n}\n\n.slider-label[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  top: 0.1rem;\n  left: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n\n#mode-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n#sort-mode-button[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n  border-radius: 0.5rem;\n  background-color: #127e12;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  display: none;\n}\n\n#collapse-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n#graph-container[_ngcontent-%COMP%] {\n  background-color: #e7e7e7;\n  padding: 1rem;\n}\n\ncanvas[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  background-color: #929292 !important;\n  cursor: default !important;\n}\n\n@media only screen and (max-width: 900px) {\n  #mode-container[_ngcontent-%COMP%] {\n    background-color: #494949;\n    width: 100vw;\n    margin-top: 0;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n  }\n\n  #sort-mode-button[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .sort-mode[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .sort-mode[_ngcontent-%COMP%]:hover {\n    background-color: #8b8b8b;\n  }\n\n  .selected[_ngcontent-%COMP%] {\n    background-color: #757575 !important;\n  }\n}\n\n#back-button[_ngcontent-%COMP%] {\n  background-color: #3b3b3b;\n  border-radius: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  display: inline-block;\n  margin-bottom: 1rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n#back-button[_ngcontent-%COMP%]:hover {\n  background-color: #6b6b6b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29ydC1hbGdvcml0aG0tdmlzdWFsaXplci9FOlxcWnlkaWNvXFxBbmd1bGFyIFByb2plY3RzXFxQb3J0Zm9saW9XZWJzaXRlXFxjbGllbnQvc3JjXFxhcHBcXHNvcnQtYWxnb3JpdGhtLXZpc3VhbGl6ZXJcXHNvcnQtYWxnb3JpdGhtLXZpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NvcnQtYWxnb3JpdGhtLXZpc3VhbGl6ZXIvc29ydC1hbGdvcml0aG0tdmlzdWFsaXplci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHlCQUFBO09BQUEsc0JBQUE7UUFBQSxxQkFBQTtZQUFBLGlCQUFBO0lBQ0EsZUFBQTtFQ0NOOztFREVFO0lBQ0ksY0FBQTtFQ0NOOztFREVFO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ0NOOztFREVFO0lBQ0kseUJBQUE7RUNDTjs7RURFRTtJQUNJLG9DQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zb3J0LWFsZ29yaXRobS12aXN1YWxpemVyL3NvcnQtYWxnb3JpdGhtLXZpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NzcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbiNzb3J0LWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDEyNiwgMTgpO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuI3NvcnQtYnV0dG9uOmhvdmVyLCAjc29ydC1tb2RlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDE3MCwgNTUpO1xyXG59XHJcblxyXG4jcmVzZXQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDU5LCA1OSk7XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4jcmVzZXQtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDEyMCwgMTIwKTtcclxufVxyXG5cclxuLnNvcnQtbW9kZSB7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zb3J0LW1vZGU6aG92ZXIsIC5zZWxlY3RlZCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNsaWRlci1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogMC4xcmVtO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbiNtb2RlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4jc29ydC1tb2RlLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxMjYsIDE4KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2NvbGxhcHNlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbiNncmFwaC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuY2FudmFzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ2LCAxNDYsIDE0NikgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAjbW9kZS1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgNzMsIDczKTtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgI3NvcnQtbW9kZS1idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb3J0LW1vZGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvcnQtbW9kZTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMTM5LCAxMzkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3RlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNywgMTE3LCAxMTcpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNiYWNrLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbiNiYWNrLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA3LCAxMDcsIDEwNyk7XHJcbn0iLCIjaGVhZGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODc3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4jc29ydC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI3ZTEyO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4jc29ydC1idXR0b246aG92ZXIsICNzb3J0LW1vZGUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3YWEzNztcbn1cblxuI3Jlc2V0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNjNiM2I7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbiNyZXNldC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2M3ODc4O1xufVxuXG4uc29ydC1tb2RlIHtcbiAgd2lkdGg6IDVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zb3J0LW1vZGU6aG92ZXIsIC5zZWxlY3RlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc2xpZGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2xpZGVyLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMC4xcmVtO1xuICBsZWZ0OiAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiNtb2RlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbiNzb3J0LW1vZGUtYnV0dG9uIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyN2UxMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jY29sbGFwc2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuI2dyYXBoLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbmNhbnZhcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyOTI5MiAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAjbW9kZS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NDk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgI3NvcnQtbW9kZS1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnNvcnQtbW9kZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuXG4gIC5zb3J0LW1vZGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjhiOGI7XG4gIH1cblxuICAuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzUgIWltcG9ydGFudDtcbiAgfVxufVxuI2JhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuI2JhY2stYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiNmI2Yjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SortAlgorithmVisualizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sort-algorithm-visualizer',
                templateUrl: './sort-algorithm-visualizer.component.html',
                styleUrls: ['./sort-algorithm-visualizer.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Zydico\Angular Projects\PortfolioWebsite\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map