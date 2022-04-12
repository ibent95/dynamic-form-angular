"use strict";
(self["webpackChunkdynamic_form_app"] = self["webpackChunkdynamic_form_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _module_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/login/login.component */ 2782);
/* harmony import */ var _module_publication_publication_form_publication_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/publication/publication-form/publication-form.component */ 8727);
/* harmony import */ var _module_publication_publication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/publication/publication.component */ 824);
/* harmony import */ var _shared_page_components_page_components_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/page-components/page-components.component */ 2588);
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ 5816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../app/core/core.module */ 294)).then(m => m.CoreModule)
    },
    {
        path: 'login',
        component: _module_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
        children: [],
    },
    {
        path: '**',
        component: _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent,
        children: [],
    },
    {
        path: 'publication',
        component: _module_publication_publication_component__WEBPACK_IMPORTED_MODULE_2__.PublicationComponent,
        children: [
            {
                path: 'create',
                component: _module_publication_publication_form_publication_form_component__WEBPACK_IMPORTED_MODULE_1__.PublicationFormComponent,
            },
            {
                path: 'update',
                component: _module_publication_publication_form_publication_form_component__WEBPACK_IMPORTED_MODULE_1__.PublicationFormComponent
            }
        ],
    },
    {
        path: 'research',
        component: _module_publication_publication_component__WEBPACK_IMPORTED_MODULE_2__.PublicationComponent,
        children: [
            {
                path: 'create',
                component: _module_publication_publication_form_publication_form_component__WEBPACK_IMPORTED_MODULE_1__.PublicationFormComponent,
            },
            {
                path: 'update',
                component: _module_publication_publication_form_publication_form_component__WEBPACK_IMPORTED_MODULE_1__.PublicationFormComponent
            }
        ],
    },
    {
        path: 'components',
        component: _shared_page_components_page_components_component__WEBPACK_IMPORTED_MODULE_3__.PageComponentsComponent,
        children: [],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'dynamic-form-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9670:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENV": () => (/* binding */ ENV),
/* harmony export */   "CONFIG": () => (/* binding */ CONFIG)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);


const ENV = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('ENV');
const CONFIG = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_locales_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/id */ 2606);
/* harmony import */ var ngx_select_ex__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-select-ex */ 7150);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ 898);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.config */ 9670);
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/app.service */ 6935);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _core_core_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.component */ 6778);
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/header/header.component */ 3556);
/* harmony import */ var _core_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/sidebar/sidebar.component */ 8681);
/* harmony import */ var _core_content_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/content/content.component */ 1481);
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/footer/footer.component */ 1229);
/* harmony import */ var _shared_page_blank_page_blank_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/page-blank/page-blank.component */ 8541);
/* harmony import */ var _shared_page_components_page_components_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/page-components/page-components.component */ 2588);
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ 5816);
/* harmony import */ var _shared_page_under_construction_page_under_construction_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/page-under-construction/page-under-construction.component */ 6569);
/* harmony import */ var _shared_ghost_table_ghost_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/ghost-table/ghost-table.component */ 2378);
/* harmony import */ var _module_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./module/login/login.component */ 2782);
/* harmony import */ var _module_overview_overview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./module/overview/overview.component */ 4579);
/* harmony import */ var _module_publication_publication_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./module/publication/publication.component */ 824);
/* harmony import */ var _module_publication_publication_form_publication_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./module/publication/publication-form/publication-form.component */ 8727);
/* harmony import */ var _module_publication_publication_detail_publication_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./module/publication/publication-detail/publication-detail.component */ 9901);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/loader/loader.component */ 9047);
// Angular and other libraries








// App routings, settings, components





// App core components






// Shared components





// Module components







(0,_angular_common__WEBPACK_IMPORTED_MODULE_23__.registerLocaleData)(_angular_common_locales_id__WEBPACK_IMPORTED_MODULE_0__["default"], 'id');
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_24__.LOCALE_ID, useValue: 'id' },
        { provide: _app_config__WEBPACK_IMPORTED_MODULE_4__.ENV, useValue: _app_config__WEBPACK_IMPORTED_MODULE_4__.CONFIG },
        _service_app_service__WEBPACK_IMPORTED_MODULE_5__.AppService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__.CoreModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
            ngx_select_ex__WEBPACK_IMPORTED_MODULE_29__.NgxSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _module_login_login_component__WEBPACK_IMPORTED_MODULE_17__.LoginComponent,
        _shared_page_blank_page_blank_component__WEBPACK_IMPORTED_MODULE_12__.PageBlankComponent,
        _shared_page_components_page_components_component__WEBPACK_IMPORTED_MODULE_13__.PageComponentsComponent,
        _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__.PageNotFoundComponent,
        _shared_page_under_construction_page_under_construction_component__WEBPACK_IMPORTED_MODULE_15__.PageUnderConstructionComponent,
        _core_core_component__WEBPACK_IMPORTED_MODULE_7__.CoreComponent,
        _core_header_header_component__WEBPACK_IMPORTED_MODULE_8__.HeaderComponent,
        _core_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__.SidebarComponent,
        _core_content_content_component__WEBPACK_IMPORTED_MODULE_10__.ContentComponent,
        _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__.FooterComponent,
        _module_overview_overview_component__WEBPACK_IMPORTED_MODULE_18__.OverviewComponent,
        _module_publication_publication_component__WEBPACK_IMPORTED_MODULE_19__.PublicationComponent,
        _module_publication_publication_form_publication_form_component__WEBPACK_IMPORTED_MODULE_20__.PublicationFormComponent,
        _module_publication_publication_detail_publication_detail_component__WEBPACK_IMPORTED_MODULE_21__.PublicationDetailComponent,
        _shared_ghost_table_ghost_table_component__WEBPACK_IMPORTED_MODULE_16__.GhostTableComponent,
        _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__.LoaderComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_6__.CoreModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
        ngx_select_ex__WEBPACK_IMPORTED_MODULE_29__.NgxSelectModule] }); })();


/***/ }),

/***/ 1481:
/*!***************************************************!*\
  !*** ./src/app/core/content/content.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": () => (/* binding */ ContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/page-not-found/page-not-found.component */ 5816);
/* harmony import */ var _module_overview_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../module/overview/overview.component */ 4579);








const _c0 = ["dynamicRef"];
function ContentComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-page-not-found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function ContentComponent_ng_container_2_app_overview_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-overview");
} }
function ContentComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContentComponent_ng_container_2_app_overview_1_Template, 1, 0, "app-overview", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](2, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isRootRoute);
} }
class ContentComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        // Remove first slash (/) in route element
        this.routeMap = this.router.url.split('/');
        this.routeMap.shift();
        // Check if route is exist
        this.isRouteExists = this.checkRouteExists(this.routeMap);
        this.isRootRoute = (this.router.url === '/');
    }
    ngAfterViewInit() {
        // Router event change detector
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd))
            .subscribe((event) => {
            // Remove first slash (/) in route element
            this.routeMap = this.router.url.split('/');
            this.routeMap.shift();
            // Check if route is exist
            this.isRouteExists = this.checkRouteExists(this.routeMap);
            this.isRootRoute = (this.router.url === '/');
            Promise.resolve().then(() => this.setDynamicReferenceContainerContent(this.isRouteExists, this.isRootRoute));
        });
        // Other condition or browser is reloaded or refreshed
        this.windowNavigation = window.performance.getEntriesByType("navigation")[0];
        // If browser is browser is reloaded or refreshed
        if (this.windowNavigation.type === 'reload') {
            Promise.resolve().then(() => this.setDynamicReferenceContainerContent(this.isRouteExists, this.isRootRoute));
        }
    }
    setDynamicReferenceContainerContent(isRouteExists, isRootRoute, routeConfig) {
        var _a, _b;
        // If route is exist
        if (isRouteExists) {
            // Remove content in dynamic reference container
            (_a = this.dynamicRef) === null || _a === void 0 ? void 0 : _a.remove();
            // Add content in dynamic reference container if the route is not root route ('/')
            if (!isRootRoute)
                (_b = this.dynamicRef) === null || _b === void 0 ? void 0 : _b.createComponent(this.routeConfig['component']);
        }
    }
    checkRouteExists(routeMap) {
        var _a, _b;
        let result = this.router.config.some((route) => route.path === routeMap[0]);
        if (result)
            this.routeConfig = this.router.config.find((config, configIndex) => ((config.path === routeMap[0]) && config.children));
        if (this.routeMap && this.routeMap.length === 2) {
            const parentConfig = this.router.config.find((config, configIndex) => ((config.path === routeMap[0]) && config.children));
            result = (_a = parentConfig === null || parentConfig === void 0 ? void 0 : parentConfig.children) === null || _a === void 0 ? void 0 : _a.some((route) => route.path === routeMap[1]);
            if (result)
                this.routeConfig = (_b = parentConfig === null || parentConfig === void 0 ? void 0 : parentConfig.children) === null || _b === void 0 ? void 0 : _b.find((config, configIndex) => config.path === routeMap[1]);
        }
        return result || false;
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
ContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], viewQuery: function ContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dynamicRef = _t.first);
    } }, inputs: { routeMap: "routeMap" }, decls: 3, vars: 2, consts: [[4, "ngIf"], ["dynamicRef", ""]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContentComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ContentComponent_ng_container_2_Template, 4, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isRouteExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isRouteExists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent, _module_overview_overview_component__WEBPACK_IMPORTED_MODULE_1__.OverviewComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 821:
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreRoutingModule": () => (/* binding */ CoreRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.component */ 6778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _core_component__WEBPACK_IMPORTED_MODULE_0__.CoreComponent,
        children: [
            {
                path: ':component',
                component: _core_component__WEBPACK_IMPORTED_MODULE_0__.CoreComponent,
                children: [
                    {
                        path: ':form',
                        component: _core_component__WEBPACK_IMPORTED_MODULE_0__.CoreComponent
                    },
                ],
            },
        ]
    },
];
class CoreRoutingModule {
}
CoreRoutingModule.ɵfac = function CoreRoutingModule_Factory(t) { return new (t || CoreRoutingModule)(); };
CoreRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreRoutingModule });
CoreRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6778:
/*!****************************************!*\
  !*** ./src/app/core/core.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreComponent": () => (/* binding */ CoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 8681);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3556);
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/content.component */ 1481);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 1229);








class CoreComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.routeMap = this.router.url.split('/');
        this.routeMap.shift(); // To remove empty string in first object
        this.subscribeRouterEvents();
    }
    subscribeRouterEvents() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                this.routeMap = this.router.url.split('/');
                this.routeMap.shift(); // To remove empty string in first object
            }
        });
    }
}
CoreComponent.ɵfac = function CoreComponent_Factory(t) { return new (t || CoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
CoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CoreComponent, selectors: [["app-core"]], decls: 8, vars: 4, consts: [[1, "drawer-container"], ["mode", "side", "opened", ""], [3, "routeMap"]], template: function CoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routeMap", ctx.routeMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routeMap", ctx.routeMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routeMap", ctx.routeMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routeMap", ctx.routeMap);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawer, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _content_content_component__WEBPACK_IMPORTED_MODULE_2__.ContentComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], styles: [".drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQUNEIiwiZmlsZSI6ImNvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhd2VyLWNvbnRhaW5lciB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-routing.module */ 821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _core_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoreRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _core_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoreRoutingModule] }); })();


/***/ }),

/***/ 1229:
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { routeMap: "routeMap" }, decls: 5, vars: 0, consts: [[1, "max-w-none", "m-7"], [1, "footer-content", "center-content"], ["href", "https://github.com/ibent95", 1, "text-white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Copyright 2022, made by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ibent95");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n  .footer-content {\n  margin: 0;\n  padding: 5px 50px 5px;\n}\n\n  .center-content {\n  justify-content: center;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBRUEsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUFEOztBQUdBO0VBQ0MsU0FBQTtFQUNBLHFCQUFBO0FBQUQ7O0FBR0E7RUFDQyx1QkFBQTtFQUNBLGFBQUE7QUFBRCIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQvL2JvdHRvbTogMDtcclxuXHRyaWdodDogMDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5mb290ZXItY29udGVudCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDVweCA1MHB4IDVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jZW50ZXItY29udGVudCB7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ZGlzcGxheTogZmxleDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 3556:
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 9019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 2796);





class HeaderComponent {
    constructor() { }
    ngOnInit() {
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { routeMap: "routeMap" }, decls: 79, vars: 6, consts: [["mat-button", ""], ["mat-button", "", 3, "matMenuTriggerFor"], ["animals", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["vertebrates", "matMenu"], ["mat-menu-item", ""], ["invertebrates", "matMenu"], ["fish", "matMenu"], ["amphibians", "matMenu"], ["reptiles", "matMenu"], ["mat-menu-item", "", "disabled", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "ibent95");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Animal index");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Vertebrates");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Invertebrates");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Fishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Amphibians");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Reptiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Birds");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Mammals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Insects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Molluscs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Crustaceans");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Corals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Arachnids");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Velvet worms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Horseshoe crabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-menu", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Baikal oilfish");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Bala shark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Ballan wrasse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Bamboo shark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Banded killifish");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Sonoran desert toad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Western toad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Arroyo toad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Yosemite toad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Banded Day Gecko");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Banded Gila Monster");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Black Tree Monitor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Blue Spiny Lizard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Velociraptor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](44);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](56);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r5);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8681:
/*!***************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 9019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);





const _c0 = function () { return { tracingId: 123 }; };
const _c1 = function () { return { tracingId: 321 }; };
class SidebarComponent {
    constructor() { }
    ngOnInit() {
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], inputs: { routeMap: "routeMap" }, decls: 15, vars: 9, consts: [[1, "center-content"], ["routerLink", "/", 3, "state"], ["aria-hidden", "false", "aria-label", "Home"], ["routerLink", "/publication", 3, "state"], ["aria-hidden", "false", "aria-label", "Publication"], ["routerLink", "/components", 3, "state"], ["aria-hidden", "false", "aria-label", "Component"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ibent95");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "document_scanner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "view_compact_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("state", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Home", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("state", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Publications", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("state", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Components", " ");
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 898:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ 1859);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tree */ 4972);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 3672);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

// Material Form Controls









// Material Navigation



// Material Layout








// Material Buttons & Indicators








// Material Popups & Modals




// Material Data tables




class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule,
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__.MatAutocompleteModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckboxModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatNativeDateModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__.MatSliderModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__.MatTreeModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggleModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__.MatChipsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule
        ], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatNativeDateModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule] }); })();


/***/ }),

/***/ 2782:
/*!*************************************************!*\
  !*** ./src/app/module/login/login.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4579:
/*!*******************************************************!*\
  !*** ./src/app/module/overview/overview.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewComponent": () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/app.service */ 6935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function OverviewComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Server messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Server date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\"", ctx_r0.serverResponse.message, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 2, ctx_r0.serverResponse.date, "fullDate"));
} }
class OverviewComponent {
    constructor(appSvc) {
        this.appSvc = appSvc;
    }
    ngOnInit() {
        this.serverResponse = null;
        this.getServerInfo();
    }
    getServerInfo() {
        this.appSvc.list(src_app_service_app_service__WEBPACK_IMPORTED_MODULE_0__.AppServiceType.ROOT).subscribe(response => {
            this.serverResponse = response['data'];
        });
    }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService)); };
OverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["app-overview"]], decls: 11, vars: 1, consts: [[1, "max-w-none", "m-7"], [1, "mb-3"], [4, "ngIf"], [1, "mt-3"], ["href", "https://github.com/ibent95", 1, "text-white"], [1, "table-auto", "w-full"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dynamic form app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This is dynamic form implementation project in angular app.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OverviewComponent_ng_container_6_Template, 18, 5, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "ibent95");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.serverResponse);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9901:
/*!***************************************************************************************!*\
  !*** ./src/app/module/publication/publication-detail/publication-detail.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicationDetailComponent": () => (/* binding */ PublicationDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PublicationDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
PublicationDetailComponent.ɵfac = function PublicationDetailComponent_Factory(t) { return new (t || PublicationDetailComponent)(); };
PublicationDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicationDetailComponent, selectors: [["app-publication-detail"]], decls: 2, vars: 0, template: function PublicationDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "publication-detail works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaWNhdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8727:
/*!***********************************************************************************!*\
  !*** ./src/app/module/publication/publication-form/publication-form.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicationFormComponent": () => (/* binding */ PublicationFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/app.service */ 6935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/loader/loader.component */ 9047);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3365);














function PublicationFormComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function PublicationFormComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function PublicationFormComponent_ng_container_9_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const publicationType_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", publicationType_r6.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](publicationType_r6.publication_type_name + " [ " + publicationType_r6.publication_type_code + " ]");
} }
function PublicationFormComponent_ng_container_9_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function PublicationFormComponent_ng_container_9_ng_container_8_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", field_r9.field_name)("placeholder", field_r9.field_placeholder);
} }
function PublicationFormComponent_ng_container_9_ng_container_8_ng_container_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r15.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r15.value + " [ " + option_r15.value + " ]", " ");
} }
function PublicationFormComponent_ng_container_9_ng_container_8_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PublicationFormComponent_ng_container_9_ng_container_8_ng_container_1_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", field_r9.field_name)("placeholder", field_r9.field_placeholder || "Please select a data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r12.forms.value[field_r9.field_name + "_options"]["items"]);
} }
function PublicationFormComponent_ng_container_9_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PublicationFormComponent_ng_container_9_ng_container_8_ng_container_1_ng_container_5_Template, 2, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PublicationFormComponent_ng_container_9_ng_container_8_ng_container_1_ng_container_6_Template, 3, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const field_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", "accent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](field_r9.field_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", field_r9.field_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "select");
} }
function PublicationFormComponent_ng_container_9_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PublicationFormComponent_ng_container_9_ng_container_8_ng_container_1_Template, 7, 5, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.forms_metadata);
} }
function PublicationFormComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Publication type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function PublicationFormComponent_ng_container_9_Template_mat_select_selectionChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.onPublicationTypeClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PublicationFormComponent_ng_container_9_ng_container_6_Template, 3, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PublicationFormComponent_ng_container_9_ng_container_7_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PublicationFormComponent_ng_container_9_ng_container_8_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.forms);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", "accent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", "publication_type_uuid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.selectOptions["publication_type"].items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.available.publication_type_selected && !ctx_r2.available.form_metadata_loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.available.publication_type_selected && ctx_r2.available.form_metadata_loaded);
} }
class PublicationFormComponent {
    /**
     * Constructor and other functions before form`s metadata are load
     */
    constructor(router, formBuilder, appSvc, location) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.appSvc = appSvc;
        this.location = location;
    }
    ngOnInit() {
        this.available = {
            form_metadata_loaded: false,
            form_builder: false,
            publication_type_loaded: false,
            publication_type_selected: false,
            publication_form_metadata_loaded: false,
            wizard_avaliable: false,
            wizard_count: 0,
            wizards: [],
        };
        this.publicationTypeCode = 'JUR-1';
        this.formVersionCode = 'JUR1-V1';
        this.fieldInForms = [];
        this.forms = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
        this.selectOptions = {
            publication_type: {
                items: [],
                default_value: null
            }
        };
        this.hiddenFields = {};
        this.disabledFields = {};
        this.selectURLParameters = {};
        this.userData = {};
        this.initiateForm();
    }
    getMasterdataPublicationType() {
        this.appSvc.list(src_app_service_app_service__WEBPACK_IMPORTED_MODULE_0__.AppServiceType.PUBLICATION_MASTERDATA_PUBLICATION_TYPE).subscribe(response => {
            this.selectOptions['publication_type'].items = response['data'];
            this.available.publication_type_loaded = true;
        });
    }
    initiateForm() {
        // Required masterdata
        this.getMasterdataPublicationType();
        this.forms = this.formBuilder.group({
            publication_type_code: null,
            publication_type_uuid: null,
        });
        this.available.form_builder = true;
    }
    onPublicationTypeClick(eventData) {
        //const selectedData = eventData[0].data; // From ngx-select
        const selectedData = this.selectOptions['publication_type'].items.find((item) => item.uuid === eventData.value);
        this.publicationTypeUuid = selectedData['uuid'] || null;
        this.publicationTypeCode = selectedData['publication_type_code'] || null;
        this.available.publication_type_selected = true;
        this.available.form_metadata_loaded = false;
        this.getFormMetadata(this.publicationTypeCode);
    }
    getFormMetadata(publicationTypeCode, formVersionCode) {
        let params = '/' + publicationTypeCode;
        if (formVersionCode)
            params += '?form-version-code=' + formVersionCode;
        this.appSvc.listParam(src_app_service_app_service__WEBPACK_IMPORTED_MODULE_0__.AppServiceType.PUBLICATION_FORM_METADATA, params).subscribe(response => {
            this.publicationFormMetadata = response['data'];
            this.available.form_metadata_loaded = true;
            this.setFieldsByAttribute('field_name', this.publicationFormMetadata.forms);
            this.setDynamicFormValues(this.publicationTypeUuid, this.publicationTypeCode);
        });
    }
    // Recursive function to set field data (from backend: metadata) to flat array, also set other necessary settings (disable field, hidden field, params in endpoint for select)
    setFieldsByAttribute(attribute, array) {
        let i = 0;
        array.forEach((element) => {
            var _a;
            if (element.hasOwnProperty(attribute) && element[attribute]) {
                // Set custom code here
                (_a = this.fieldInForms) === null || _a === void 0 ? void 0 : _a.push(element);
                // Set hidden and disabled config
                this.hiddenFields[element.field_name] = false;
                this.disabledFields[element.field_name] = false;
            }
            if (element.field_type === 'wizard' && (element.children.length > 0)) {
                this.available.wizards.push({
                    label: element.field_label,
                    step: i,
                    active: (i === 0)
                });
                i++;
            }
            if (element.field_type === 'select' || element.field_type === 'autoselect' || element.field_type === 'autocomplete' || element.field_type === 'multiple_select' || element.field_type === 'multiple_autoselect') {
                this.selectOptions[element.field_name] = {
                    items: element.children || [],
                    defaultValue: element.default_value || [],
                    formControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl()
                };
                this.selectURLParameters[element.field_name] = '';
            }
            if (element.field_type === 'panel_multiple' || element.field_type === 'multiple') {
                element.children.forEach((value, key) => {
                    this.selectOptions[value.field_name] = {
                        items: value.children,
                        defaultValue: [],
                        formControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl()
                    };
                    // Set initial value for every select url params
                    //if (value.field_type === 'select' || value.field_type === 'autoselect' || value.field_type === 'autocomplete' || value.field_type === 'multiple_select' || value.field_type === 'multiple_autoselect') { }
                    // Set hidden and disabled config
                    if (value[attribute]) {
                        this.hiddenFields[value.field_name] = false;
                        this.disabledFields[value.field_name] = false;
                    }
                });
            }
            if ((element.field_type !== 'panel_multiple' && element.field_type !== 'multiple') && Array.isArray(element['children']) && element['children'].length > 0) {
                this.setFieldsByAttribute(attribute, element['children']);
            }
        });
    }
    // Handling to set value in forms (in Form Create and Update)
    setDynamicFormValues(publicationTypeUuid, publicationTypeCode) {
        let fieldDataSets = {};
        fieldDataSets['publication_type_uuid'] = publicationTypeUuid;
        fieldDataSets['publication_type_code'] = publicationTypeCode;
        this.fieldInForms.forEach((element) => {
            if (element.field_type === 'radio') {
                this.selectURLParameters[element.field_name] = '';
                this.selectOptions[element.field_name] = {
                    items: element.children || [],
                    defaultValue: element.default_value || [],
                };
                fieldDataSets[element.field_name + '_select_options'] = {
                    items: element.children || [],
                    defaultValue: element.default_value || [],
                };
                fieldDataSets['uuid_' + element.field_name] = [this.userData['uuid_' + element.field_name] || (element.default_value || '')];
            }
            else if (element.field_type === 'select') {
                this.selectURLParameters[element.field_name] = '';
                this.selectOptions[element.field_name] = {
                    items: element.options || [],
                    defaultValue: element.default_value || [],
                };
                fieldDataSets[element.field_name + '_options'] = {
                    items: element.options || [],
                    defaultValue: element.default_value || [],
                };
                fieldDataSets[element.field_name] = [this.userData['uuid_' + element.field_name] || (element.default_value || '')];
            }
            else if (element.field_type === 'autoselect') {
                this.selectURLParameters[element.field_name] = '';
                this.selectOptions[element.field_name] = {
                    items: element.options || [],
                    defaultValue: element.default_value || [],
                };
                fieldDataSets[element.field_name + '_options'] = {
                    items: element.options || [],
                    defaultValue: element.default_value || [],
                };
                if (this.userData['uuid_' + element.field_name]) {
                    fieldDataSets[element.field_name + '_options'].items = [{ option_text_field: this.userData[element.field_name], uuid: this.userData['uuid_' + element.field_name], }].concat(fieldDataSets[element.field_name + '_options'].items);
                    this.selectOptions[element.field_name].items = fieldDataSets[element.field_name + '_options'].items;
                }
                fieldDataSets[element.field_name] = [this.userData['uuid_' + element.field_name] || (element.default_value || '')];
            }
            else if (element.field_type === 'autocomplete') {
                this.selectURLParameters[element.field_name] = '';
                this.selectOptions[element.field_name] = {
                    items: element.children || [],
                    defaultValue: element.default_value || [],
                };
                //if (this.userData[element.field_name]) this.onType(this.userData[element.field_name], element.field_type, element.field_name, element.dependency_child, element.dependency_parent, element.uuid_form);
                fieldDataSets[element.field_name + '_select_options'] = this.selectOptions[element.field_name];
                fieldDataSets[element.field_name] = [this.userData[element.field_name] || ''];
                fieldDataSets['uuid_' + element.field_name] = [this.userData['uuid_' + element.field_name] || ''];
            }
            else if (element.field_type === 'multiple_select') {
                let multiple_select = [];
                this.selectURLParameters[element.field_name] = '';
                if (this.userData[element.field_name] && (this.userData[element.field_name].length > 0)) {
                    multiple_select = this.userData[element.field_name].map((apiData) => {
                        return apiData['uuid'];
                    });
                }
                this.selectOptions[element.field_name].defaultValue = multiple_select;
                fieldDataSets[element.field_name] = multiple_select;
            }
            else if (element.field_type === 'multiple_autoselect') {
                let multiple_autoselect = [];
                this.selectURLParameters[element.field_name] = '';
                this.selectOptions[element.field_name].defaultValue = "";
                fieldDataSets[element.field_name + '_select_options'] = {
                    items: element.children || [],
                    defaultValue: element.default_value || [],
                };
                //fieldDataSets[element.field_name] = (this.userData[element.field_name]) ? [this.userData[element.field_name].map((item: any) => { return item.uuid; })] : [];
                if (this.userData[element.field_name] && this.userData[element.field_name].length) {
                    fieldDataSets[element.field_name + '_select_options'].items = this.userData[element.field_name].map((item) => {
                        return {
                            option_text_field: item.value,
                            uuid: item.uuid,
                        };
                    }).concat(fieldDataSets[element.field_name + '_select_options'].items);
                    multiple_autoselect = this.userData[element.field_name].map((apiData) => {
                        return apiData['uuid'];
                    });
                }
                this.available[element.field_name] = (this.userData[element.field_name]) ? [this.userData[element.field_name].map((item) => { return item.uuid; })] : [];
                fieldDataSets[element.field_name] = multiple_autoselect;
            }
            else if (element.field_type === 'checkbox') {
                fieldDataSets[element.field_name] = [(this.userData[element.field_name] || this.userData[element.field_name] === '1') || false];
            }
            else if (element.field_type === 'file') {
                fieldDataSets[element.field_name] = [this.userData[element.field_name] || ''];
                //fieldDataSets[element.field_name + '_path_file'] = [this.userData[this.userData[element.field_name + '_path_file']] || ''];
            }
            else if (element.field_type === 'date' || element.field_type === 'year') {
                fieldDataSets[element.field_name] = (this.userData[element.field_name]) ? (new Date(this.userData[element.field_name])) : '';
            }
            else if (element.field_type === 'multiple' || element.field_type === 'panel_multiple') {
                let multipleGroup = [];
                this.selectURLParameters[element.field_name] = [];
                this.selectOptions[element.field_name] = [];
                this.available[element.field_name] = [];
                if (this.userData[element.field_name]) {
                    if (this.userData[element.field_name].length) {
                        this.userData[element.field_name].forEach((apiData, index) => {
                            //multipleGroup.push(this.doCreateMultipleItem(element.field_name, element.children, index, apiData));
                        });
                        fieldDataSets[element.field_name] = this.formBuilder.array(multipleGroup);
                    }
                }
                else {
                    //fieldDataSets[element.field_name] = this.formBuilder.array([this.doCreateMultipleItem(element.field_name, element.children, multipleGroup.length)]);
                }
            }
            else if (element.field_type === 'number') {
                fieldDataSets[element.field_name] = [this.userData[element.field_name] || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[0-9]*$')]];
            }
            else if (element.field_type === 'mask_full_time') {
                this.available[element.field_name] = this.userData[element.field_name] || '';
                fieldDataSets[element.field_name] = [this.userData[element.field_name] || ''];
            }
            else {
                fieldDataSets[element.field_name] = (element.tipe_validasi && (element.field_type !== 'mask')) ? ([this.userData[element.field_name] || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(element.tipe_validasi)]]) : ([this.userData[element.field_name] || '']);
            }
        });
        this.forms = this.formBuilder.group(fieldDataSets);
        console.log('forms', this.forms);
        //this.setInitialFieldDependencyConfig();
        //this.subscribeToPublicationFormStatus();
    }
    get forms_metadata() {
        return this.publicationFormMetadata.forms;
    }
}
PublicationFormComponent.ɵfac = function PublicationFormComponent_Factory(t) { return new (t || PublicationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location)); };
PublicationFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PublicationFormComponent, selectors: [["app-publication-form"]], decls: 10, vars: 3, consts: [[1, "max-w-none", "m-7"], [4, "ngIf"], [1, "grid", "grid-cols-1", "gap-4", 3, "formGroup"], ["appearance", "fill", 3, "color"], [3, "formControlName", "selectionChange"], [4, "ngFor", "ngForOf"], [3, "value"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["matInput", "", 3, "formControlName", "placeholder"], [3, "formControlName", "placeholder"]], template: function PublicationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Publication`s form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Form of publication");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PublicationFormComponent_ng_container_7_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PublicationFormComponent_ng_container_8_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PublicationFormComponent_ng_container_9_Template, 9, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.available.no_data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.available.no_data && ctx.available.form_builder && !ctx.available.publication_type_loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.available.no_data && ctx.available.form_builder && ctx.available.publication_type_loaded);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaWNhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 824:
/*!*************************************************************!*\
  !*** ./src/app/module/publication/publication.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicationComponent": () => (/* binding */ PublicationComponent)
/* harmony export */ });
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/app.service */ 6935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _shared_ghost_table_ghost_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ghost-table/ghost-table.component */ 2378);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _shared_page_components_page_components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/page-components/page-components.component */ 2588);














function PublicationComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Server messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Server date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\"", ctx_r0.serverResponse.message, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](17, 2, ctx_r0.serverResponse.date, "fullDate"));
} }
function PublicationComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-ghost-table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowCount", 3)("columnCount", 3);
} }
function PublicationComponent_ng_container_16_ng_container_3_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columnIndex_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.tableDisplayedColumns.label[columnIndex_r8]);
} }
function PublicationComponent_ng_container_16_ng_container_3_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const columnIndex_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r12[ctx_r10.tableDisplayedColumns.property[columnIndex_r8]]);
} }
function PublicationComponent_ng_container_16_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PublicationComponent_ng_container_16_ng_container_3_th_2_Template, 2, 1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PublicationComponent_ng_container_16_ng_container_3_td_3_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const columnIndex_r8 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matColumnDef", ctx_r3.tableDisplayedColumns.property[columnIndex_r8]);
} }
function PublicationComponent_ng_container_16_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 19);
} }
function PublicationComponent_ng_container_16_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 20);
} }
function PublicationComponent_ng_container_16_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", ctx_r6.tableDisplayedColumns.property.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("Tidak ada data");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
function PublicationComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PublicationComponent_ng_container_16_ng_container_3_Template, 4, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PublicationComponent_ng_container_16_tr_4_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PublicationComponent_ng_container_16_tr_5_Template, 1, 0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PublicationComponent_ng_container_16_tr_6_Template, 3, 2, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "mat-paginator", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r2.tableDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.tableDisplayedColumns.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.tableDisplayedColumns.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r2.tableDisplayedColumns.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0))("length", ctx_r2.tableDataSource.length);
} }
class PublicationComponent {
    constructor(router, appSvc) {
        this.router = router;
        this.appSvc = appSvc;
    }
    ngOnInit() {
        this.serverResponse = null;
        this.showTable = false;
        this.getServerInfo();
        this.tableDisplayedColumns = {
            label: [],
            type: [],
            property: [],
        };
        this.tableDataSource = [];
        this.tableInit();
    }
    getServerInfo() {
        this.appSvc.list(_service_app_service__WEBPACK_IMPORTED_MODULE_0__.AppServiceType.PUBLICATION_MAIN).subscribe(response => {
            this.serverResponse = response['data'];
        });
    }
    tableInit() {
        this.tableDisplayedColumns = {
            label: ['No.', 'Title', 'Date of publish', 'Status'],
            type: ['number', 'text', 'text', 'object'],
            property: ['position', 'title', 'publication_date', 'status'],
        };
        //this.tableDisplayedColumns = [
        //  { label: 'Position', property: 'position', },
        //  { label: 'Name', property: 'name', },
        //  { label: 'Weight', property: 'weight', },
        //  { label: 'Symbol', property: 'symbol', },
        //];
        this.getTableData();
    }
    getTableData() {
        this.appSvc.list(_service_app_service__WEBPACK_IMPORTED_MODULE_0__.AppServiceType.PUBLICATIONS).subscribe(response => {
            if (response['data'])
                response['data'].map((data, dataIndex) => {
                    data['position'] = dataIndex + 1;
                    data['status'] = data['publication_status']['publication_status_name'];
                    data['status_code'] = data['publication_status']['publication_status_code'];
                    data['status_uuid'] = data['publication_status']['uuid'];
                    return data;
                });
            this.tableDataSource = response['data'];
            this.showTable = true;
        });
    }
    onAddPublicationClick() {
        this.router.navigate([this.router.url + '/create']);
    }
}
PublicationComponent.ɵfac = function PublicationComponent_Factory(t) { return new (t || PublicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService)); };
PublicationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PublicationComponent, selectors: [["app-publication"]], decls: 18, vars: 3, consts: [[1, "max-w-none", "m-7"], [1, "grid", "grid-cols-2", "mb-4"], ["align", "start"], [4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "color", "accent", 1, "content-center", 3, "click"], [1, "table-auto", "w-full"], [3, "rowCount", "columnCount"], ["mat-table", "", "recycleRows", "", "matSort", "", 1, "mat-elevation-z10", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", "aria-label", "Select page of publications", 3, "pageSizeOptions", "length"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell", "text-center"]], template: function PublicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Publication ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Overview information and table of publication`s data");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PublicationComponent_ng_container_9_Template, 18, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PublicationComponent_Template_button_click_11_listener() { return ctx.onAddPublicationClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, PublicationComponent_ng_container_15_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, PublicationComponent_ng_container_16_Template, 8, 7, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-page-components");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.serverResponse);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showTable);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _shared_ghost_table_ghost_table_component__WEBPACK_IMPORTED_MODULE_1__.GhostTableComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRecycleRows, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _shared_page_components_page_components_component__WEBPACK_IMPORTED_MODULE_2__.PageComponentsComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6935:
/*!****************************************!*\
  !*** ./src/app/service/app.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServiceType": () => (/* binding */ AppServiceType),
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.config */ 9670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




var AppServiceType;
(function (AppServiceType) {
    AppServiceType[AppServiceType["ROOT"] = 0] = "ROOT";
    AppServiceType[AppServiceType["PUBLICATION_MAIN"] = 1] = "PUBLICATION_MAIN";
    AppServiceType[AppServiceType["PUBLICATIONS"] = 2] = "PUBLICATIONS";
    AppServiceType[AppServiceType["PUBLICATION_FORM_METADATA"] = 3] = "PUBLICATION_FORM_METADATA";
    AppServiceType[AppServiceType["PUBLICATION_MASTERDATA_PUBLICATION_TYPE"] = 4] = "PUBLICATION_MASTERDATA_PUBLICATION_TYPE";
})(AppServiceType || (AppServiceType = {}));
class AppService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        this.BASE_URL_API = this.config.apiUrl;
        this.HEADERS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            //.set('Access-Control-Allow-Credentials', 'false')
            //.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
            //.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
            .set('Access-Control-Allow-Origin', '*')
            //.set('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
            //.set('Cache-Control', 'no-cache, private')
            //.set('X-Powered-By', 'PHP/8.1.0')
            //.set('X-Robots-Tag', 'noindex')
            //.set('Content-Length', '79')
            .set('Content-Type', 'application/json');
        //{ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' }
    }
    getUrl(serviceType) {
        let url;
        switch (serviceType) {
            case AppServiceType.ROOT:
                url = this.BASE_URL_API + '/v1';
                break;
            /** =============================== PUBLICATION =============================== */
            case AppServiceType.PUBLICATION_MAIN:
                url = this.BASE_URL_API + '/v1/publication';
                break;
            case AppServiceType.PUBLICATIONS:
                url = this.BASE_URL_API + '/v1/publications';
                break;
            case AppServiceType.PUBLICATION_FORM_METADATA:
                url = this.BASE_URL_API + '/v1/publication/form-metadata';
                break;
            case AppServiceType.PUBLICATION_MASTERDATA_PUBLICATION_TYPE:
                url = this.BASE_URL_API + '/v1/master/publication-type';
                break;
            /** ================================= RESEARCH ================================= */
            /** ================================== DEFAULT ================================== */
            default:
                url = '';
                break;
        }
        return url;
    }
    //pagedList(serviceType: AppServiceType, page: number, parameter: any, callback: (result: any) => void, params?: any) {
    //  this.http.pagedCollection(this.getUrl(serviceType) + parameter, page, result => {
    //    callback(result);
    //  });
    //}
    list(serviceType) {
        return this.http.get(this.getUrl(serviceType), { headers: this.HEADERS });
    }
    listParam(serviceType, params = '') {
        return this.http.get(this.getUrl(serviceType) + params, { headers: this.HEADERS });
    }
    post(serviceType, body) {
        return this.http.post(this.getUrl(serviceType), body, { headers: this.HEADERS });
    }
    create(serviceType, body, params = '') {
        return this.http.post(this.getUrl(serviceType) + params, body, { headers: this.HEADERS });
    }
    put(serviceType, body) {
        return this.http.put(this.getUrl(serviceType), body, { headers: this.HEADERS });
    }
    update(serviceType, body, params = '') {
        return this.http.put(this.getUrl(serviceType) + params, body, { headers: this.HEADERS });
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_config__WEBPACK_IMPORTED_MODULE_0__.ENV), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AppService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'any' });


/***/ }),

/***/ 2378:
/*!*************************************************************!*\
  !*** ./src/app/shared/ghost-table/ghost-table.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GhostTableComponent": () => (/* binding */ GhostTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function GhostTableComponent_ng_container_0_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GhostTableComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GhostTableComponent_ng_container_0_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("grid grid-cols-", row_r4.column.length, " gap-4 mb-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r4.column);
} }
function GhostTableComponent_ng_container_0_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GhostTableComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GhostTableComponent_ng_container_0_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("grid grid-cols-", row_r9.column.length, " gap-4 mb-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r9.column);
} }
function GhostTableComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GhostTableComponent_ng_container_0_ng_container_2_Template, 3, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GhostTableComponent_ng_container_0_ng_container_3_Template, 3, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data.body);
} }
function GhostTableComponent_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GhostTableComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GhostTableComponent_ng_container_1_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("grid grid-cols-", row_r16.column.length, " gap-4 mb-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r16.column);
} }
function GhostTableComponent_ng_container_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GhostTableComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GhostTableComponent_ng_container_1_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("grid grid-cols-", row_r21.column.length, " gap-4 mb-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r21.column);
} }
function GhostTableComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GhostTableComponent_ng_container_1_ng_container_2_Template, 3, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GhostTableComponent_ng_container_1_ng_container_3_Template, 3, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data.body);
} }
class GhostTableComponent {
    constructor() { }
    ngOnInit() {
        this.rowCount = this.rowCount || 3;
        this.columnCount = this.columnCount || 4;
        this.gridType = 'tailwind';
        this.data = {
            header: [],
            body: []
        };
        this.initiateRowsAndColumns();
    }
    initiateRowsAndColumns() {
        // Initial item for columns of datas`s body
        let headerItem = { column: [] };
        // Loop / itarable for generate rows of datas`s header
        for (let headerColumIndex = 0; headerColumIndex < this.columnCount; headerColumIndex++) {
            headerItem === null || headerItem === void 0 ? void 0 : headerItem.column.push('header-' + (headerColumIndex + 1));
        }
        // Push generated item to body of data
        this.data.header.push(headerItem);
        // Loop / itarable for generate rows of datas`s body
        for (let rowIndex = 0; rowIndex < this.rowCount; rowIndex++) {
            // Initial item for columns of datas`s body
            let item = { column: [] };
            // Loop / itarable for generate columns of datas`s body
            for (let columIndex = 0; columIndex < this.columnCount; columIndex++) {
                item === null || item === void 0 ? void 0 : item.column.push('value-' + (columIndex + 1));
            }
            // Push generated item to body of data
            this.data.body.push(item);
        }
    }
}
GhostTableComponent.ɵfac = function GhostTableComponent_Factory(t) { return new (t || GhostTableComponent)(); };
GhostTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GhostTableComponent, selectors: [["app-ghost-table"]], inputs: { rowCount: "rowCount", columnCount: "columnCount", gridType: "gridType" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "ghost-element"], [4, "ngFor", "ngForOf"], [1, "header-line"], [1, "line"]], template: function GhostTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GhostTableComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GhostTableComponent_ng_container_1_Template, 4, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gridType === "material" && ctx.data.body.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gridType === "tailwind" && ctx.data.body.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["@keyframes ghost-table {\n  from {\n    background-position: 0vw 0;\n  }\n  to {\n    background-position: 200vw 0;\n  }\n}\n.line[_ngcontent-%COMP%] {\n  height: 35px;\n  border-radius: 8px;\n  background: linear-gradient(90deg, #f0f0f0, #696969, #f0f0f0) 0 0/180vh 1% fixed;\n  background-color: #797979;\n  animation: ghost-table 1500ms infinite;\n}\n.header-line[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 25px;\n  border-radius: 8px;\n  background: linear-gradient(90deg, #f0f0f0, #696969, #f0f0f0) 0 0/180vh 1% fixed;\n  background-color: #797979;\n  animation: ghost-table 1500ms infinite;\n}\n.ghost-element[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdob3N0LXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSwwQkFBQTtFQUNGO0VBQ0E7SUFDRSw0QkFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdGQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBQURGO0FBSUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0ZBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0FBREY7QUFJQTtFQUNFLGNBQUE7QUFERiIsImZpbGUiOiJnaG9zdC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgZ2hvc3QtdGFibGUge1xyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHZ3IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMHZ3IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubGluZSB7XHJcbi8vICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2YwZjBmMCwgIzY5Njk2OSwgI2YwZjBmMCkgMCAwLyAxODB2aCAxJSBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIxLCAxMjEsIDEyMSk7XHJcbiAgYW5pbWF0aW9uOiBnaG9zdC10YWJsZSAxNTAwbXMgaW5maW5pdGU7IC8vIGxpbmVhclxyXG59XHJcblxyXG4uaGVhZGVyLWxpbmUge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmMGYwZjAsICM2OTY5NjksICNmMGYwZjApIDAgMC8gMTgwdmggMSUgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMSwgMTIxLCAxMjEpO1xyXG4gIGFuaW1hdGlvbjogZ2hvc3QtdGFibGUgMTUwMG1zIGluZmluaXRlOyAvLyBsaW5lYXJcclxufVxyXG5cclxuLmdob3N0LWVsZW1lbnQge1xyXG4gIHBhZGRpbmctdG9wOiAwOyAvLyA4MHB4XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9047:
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);


class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 5, vars: 2, consts: [[1, "flex", "justify-center"], [1, "text-center"], [3, "color", "mode"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "accent")("mode", "indeterminate");
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__.MatProgressSpinner], styles: [""] });


/***/ }),

/***/ 8541:
/*!***********************************************************!*\
  !*** ./src/app/shared/page-blank/page-blank.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageBlankComponent": () => (/* binding */ PageBlankComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);





class PageBlankComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageBlankComponent.ɵfac = function PageBlankComponent_Factory(t) { return new (t || PageBlankComponent)(); };
PageBlankComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageBlankComponent, selectors: [["app-page-blank"]], decls: 21, vars: 0, consts: [[1, "max-w-none", "m-7"], ["mat-card-avatar", "", 1, "example-header-image"], ["align", "end"], ["mat-button", ""], ["mode", "indeterminate"]], template: function PageBlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos totam omnis neque, nemo facere error iusto, fugit ea deleniti alias at. Reiciendis modi quae totam et minima, maiores earum a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum harum architecto fugit molestiae expedita id aperiam, aut molestias saepe quas tempora corporis tenetur soluta culpa, consectetur, voluptatibus quia ducimus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum velit provident recusandae nostrum. Maxime necessitatibus nulla nobis, magnam molestias labore corporis consequatur! Cumque similique placeat rerum exercitationem laboriosam iste quod. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardFooter, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBar], styles: [".example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/logo.png\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtYmxhbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw2Q0FBQTtFQUNBLHNCQUFBO0FBQ0QiLCJmaWxlIjoicGFnZS1ibGFuay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvbG9nby5wbmcnKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 2588:
/*!*********************************************************************!*\
  !*** ./src/app/shared/page-components/page-components.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageComponentsComponent": () => (/* binding */ PageComponentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ 5939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slider */ 1859);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _ghost_table_ghost_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ghost-table/ghost-table.component */ 2378);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-not-found/page-not-found.component */ 5816);
/* harmony import */ var _page_under_construction_page_under_construction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-under-construction/page-under-construction.component */ 6569);


























function PageComponentsComponent_mat_chip_248_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-chip", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("removed", function PageComponentsComponent_mat_chip_248_Template_mat_chip_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const fruit_r24 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.chipsRemove(fruit_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fruit_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", fruit_r24.name, " ");
} }
function PageComponentsComponent_th_299_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PageComponentsComponent_td_300_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r27.position, " ");
} }
function PageComponentsComponent_th_302_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PageComponentsComponent_td_303_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r28.name, " ");
} }
function PageComponentsComponent_th_305_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PageComponentsComponent_td_306_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r29.weight, " ");
} }
function PageComponentsComponent_th_308_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Symbol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PageComponentsComponent_td_309_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r30.symbol, " ");
} }
function PageComponentsComponent_tr_310_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 97);
} }
function PageComponentsComponent_tr_311_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 98);
} }
function PageComponentsComponent_th_318_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PageComponentsComponent_td_319_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r32.position, " ");
} }
function PageComponentsComponent_th_321_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PageComponentsComponent_td_322_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r33.name, " ");
} }
function PageComponentsComponent_th_324_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PageComponentsComponent_td_325_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r34.weight, " ");
} }
function PageComponentsComponent_th_327_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Symbol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PageComponentsComponent_td_328_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r35.symbol, " ");
} }
function PageComponentsComponent_tr_329_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 97);
} }
function PageComponentsComponent_tr_330_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 98);
} }
const _c0 = function () { return { standalone: true }; };
const _c1 = function () { return [5, 10, 20]; };
class PageComponentsComponent {
    constructor() {
        this.chipsSeparatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.COMMA];
    }
    ngOnInit() {
        this.hidePassword = true;
        this.radioField = '';
        this.chipsField = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' }
        ];
        this.chipsAddOnBlur = true;
        this.sliderField = 20;
        this.tableDisplayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.tableDataSource = [
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
            { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
            { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
            { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
            { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
            { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
            { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
            { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        ];
    }
    setHidePassword(event) {
        event.preventDefault();
        this.hidePassword = !this.hidePassword;
    }
    chipsAdd(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value)
            this.chipsField.push({ name: value });
        // Clear the input value
        event.chipInput.clear();
    }
    chipsRemove(fruit) {
        const index = this.chipsField.indexOf(fruit);
        if (index >= 0)
            this.chipsField.splice(index, 1);
    }
}
PageComponentsComponent.ɵfac = function PageComponentsComponent_Factory(t) { return new (t || PageComponentsComponent)(); };
PageComponentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageComponentsComponent, selectors: [["app-page-components"]], decls: 397, vars: 46, consts: [[1, "max-w-none", "m-7"], [1, "mb-4"], [1, "mb-2"], [1, "text-title", "text-lg"], ["inset", ""], [1, "grid", "grid-cols-2", "gap-4"], [1, "mb-3"], [1, "text-title", "text-sm", "mb-2"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "accent"], ["mat-stroked-button", "", "color", "warn"], ["mat-stroked-button", "", "disabled", ""], ["mat-stroked-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "accent"], ["mat-flat-button", "", "color", "warn"], ["mat-flat-button", "", "disabled", ""], ["mat-flat-button", "", "href", "https://www.google.com/", "target", "_blank"], [1, "grid", "grid-cols-4", "gap-4"], ["mat-icon-button", "", "aria-label", "Example icon button with a vertical three dot icon"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon button with a home icon"], ["mat-icon-button", "", "color", "accent", "aria-label", "Example icon button with a menu icon"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon button with a heart icon"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon button with a open in new tab icon"], ["mat-fab", "", "color", "primary", "aria-label", "Example icon button with a delete icon"], ["mat-fab", "", "color", "accent", "aria-label", "Example icon button with a bookmark icon"], ["mat-fab", "", "color", "warn", "aria-label", "Example icon button with a home icon"], ["mat-fab", "", "disabled", "", "aria-label", "Example icon button with a heart icon"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Example icon button with a plus one icon"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a filter list icon"], ["mat-mini-fab", "", "disabled", "", "aria-label", "Example icon button with a home icon"], ["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"], ["appearance", "legacy", "name", "fontStyle", "aria-label", "Font Style"], ["appearance", "fill", 3, "color"], ["matInput", ""], ["matInput", "", "type", "number", "placeholder", "Ex. 12", "min", "1"], ["matSuffix", ""], ["value", "one"], ["value", "two"], ["matInput", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datePicker", ""], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["dateRangePicker", ""], [1, "col-span-2", "grid", "grid-cols-3", "mb-3"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "auto"], ["value", "always"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [3, "max", "min", "step", "tickInterval", "thumbLabel", "ngModel", "ngModelOptions", "ngModelChange"], ["mode", "determinate", "value", "40", 3, "color"], ["mode", "indeterminate", 3, "color"], [3, "color", "mode"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], [1, "border", "border-solid", "border-gray-500"], ["href", "https://github.com/ibent95", 1, "text-white"], [3, "rowCount", "columnCount"], [3, "removed"], ["matChipRemove", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function PageComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Link to Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Raised");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Link to Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Stroked");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Link to Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Flat");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Link to Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "FAB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Mini FAB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "plus_one");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Button toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Default appearance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "mat-button-toggle-group", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "mat-button-toggle", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "Bold");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "mat-button-toggle", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "Italic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "mat-button-toggle", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Underline");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Legacy appearance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "mat-button-toggle-group", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "mat-button-toggle", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Bold");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "mat-button-toggle", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "Italic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "mat-button-toggle", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, "Underline");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](159, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "form", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "mat-form-field", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](167, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](170, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "mat-form-field", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](174, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "mat-form-field", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "mat-option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "First option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "mat-option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, "Second option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "mat-form-field", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "Enter your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](194, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PageComponentsComponent_Template_button_click_195_listener($event) { return ctx.setHidePassword($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](200, "Date picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "mat-form-field", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](204, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "mat-datepicker-toggle", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](206, "mat-datepicker", null, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "Date range picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "mat-form-field", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](213, "Enter a date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "mat-date-range-input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](215, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](216, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](217, "mat-datepicker-toggle", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](218, "mat-date-range-picker", null, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "Hide required marker");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](228, "Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "mat-radio-group", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PageComponentsComponent_Template_mat_radio_group_ngModelChange_229_listener($event) { return ctx.radioField = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "mat-radio-button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](231, "Auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "mat-radio-button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, "Always");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "mat-slide-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, "Slide me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "Chips");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "mat-form-field", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, "Chips");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "mat-chip-list", 70, 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](248, PageComponentsComponent_mat_chip_248_Template, 5, 1, "mat-chip", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("matChipInputTokenEnd", function PageComponentsComponent_Template_input_matChipInputTokenEnd_249_listener($event) { return ctx.chipsAdd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](252, "Textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "mat-form-field", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](255, "Textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](256, "textarea", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](259, "Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "mat-slider", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PageComponentsComponent_Template_mat_slider_ngModelChange_260_listener($event) { return ctx.sliderField = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](264, "Progress bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](265, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "Determinate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](269, "mat-progress-bar", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, "Indeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](273, "mat-progress-bar", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](277, "Progress spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](278, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](282, "Determinate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](283, "mat-progress-spinner", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](286, "Indeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](287, "mat-progress-spinner", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](288, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](291, "Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](292, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, "Basic table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "table", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](298, 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](299, PageComponentsComponent_th_299_Template, 2, 0, "th", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](300, PageComponentsComponent_td_300_Template, 2, 1, "td", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](301, 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](302, PageComponentsComponent_th_302_Template, 2, 0, "th", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](303, PageComponentsComponent_td_303_Template, 2, 1, "td", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](304, 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](305, PageComponentsComponent_th_305_Template, 2, 0, "th", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](306, PageComponentsComponent_td_306_Template, 2, 1, "td", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](307, 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](308, PageComponentsComponent_th_308_Template, 2, 0, "th", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](309, PageComponentsComponent_td_309_Template, 2, 1, "td", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](310, PageComponentsComponent_tr_310_Template, 1, 0, "tr", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](311, PageComponentsComponent_tr_311_Template, 1, 0, "tr", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](312, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "Pagination table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](316, "table", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](317, 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](318, PageComponentsComponent_th_318_Template, 2, 0, "th", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](319, PageComponentsComponent_td_319_Template, 2, 1, "td", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](320, 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](321, PageComponentsComponent_th_321_Template, 2, 0, "th", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](322, PageComponentsComponent_td_322_Template, 2, 1, "td", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](323, 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](324, PageComponentsComponent_th_324_Template, 2, 0, "th", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](325, PageComponentsComponent_td_325_Template, 2, 1, "td", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](326, 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](327, PageComponentsComponent_th_327_Template, 2, 0, "th", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](328, PageComponentsComponent_td_328_Template, 2, 1, "td", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](329, PageComponentsComponent_tr_329_Template, 1, 0, "tr", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](330, PageComponentsComponent_tr_330_Template, 1, 0, "tr", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](331, "mat-paginator", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](332, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](333, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](335, "Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](336, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](337, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](338, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](340, "No header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](341, "mat-card", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](342, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](343, "Dynamic form app");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](344, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](345, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](346, "This is dynamic form implementation project in angular app.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](347, " By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](348, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](349, "ibent95");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](350, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](351, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](352, "With header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](353, "mat-card", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](354, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](355, "Dynamic form app");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](356, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](357, "Subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](358, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](359, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](361, "This is dynamic form implementation project in angular app.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](362, " By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](363, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](364, "ibent95");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](365, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](367, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](368, "Ghost component");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](369, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](370, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](371, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](372, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](373, "Ghost table (TailwindCSS`s grid style)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](374, "app-ghost-table", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](375, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](376, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](377, "Ghost table (Material`s grid style)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](378, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](379, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](380, "Comming soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](381, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](382, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](383, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](384, "Page component");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](385, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](386, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](387, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](388, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](389, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](390, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](391, "app-page-not-found");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](392, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](393, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](394, "Page under construction");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](395, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](396, "app-page-under-construction");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](207);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](219);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](247);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rangePicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.radioField)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](43, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.chipsField);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matChipInputFor", _r2)("matChipInputSeparatorKeyCodes", ctx.chipsSeparatorKeysCodes)("matChipInputAddOnBlur", ctx.chipsAddOnBlur);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("max", 100)("min", 0)("step", 1)("tickInterval", 5)("thumbLabel", true)("ngModel", ctx.sliderField)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](44, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", "accent")("mode", "indeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.tableDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.tableDisplayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.tableDisplayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.tableDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.tableDisplayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.tableDisplayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](45, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowCount", 3)("columnCount", 4);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDateRangePicker, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckbox, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioButton, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggle, _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipInput, _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__.MatSlider, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__.MatProgressBar, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginator, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _ghost_table_ghost_table_component__WEBPACK_IMPORTED_MODULE_0__.GhostTableComponent, _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent, _page_under_construction_page_under_construction_component__WEBPACK_IMPORTED_MODULE_2__.PageUnderConstructionComponent], styles: ["button.mat-button[_ngcontent-%COMP%], a.mat-button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nbutton.mat-raised-button[_ngcontent-%COMP%], a.mat-raised-button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nbutton.mat-stroked-button[_ngcontent-%COMP%], a.mat-stroked-button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nbutton.mat-flat-button[_ngcontent-%COMP%], a.mat-flat-button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nbutton.mat-icon-button[_ngcontent-%COMP%], button.mat-fab[_ngcontent-%COMP%], button.mat-mini-fab[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFrQyxrQkFBQTtBQUNsQzs7QUFFQTtFQUFnRCxrQkFBQTtBQUVoRDs7QUFDQTtFQUFrRCxrQkFBQTtBQUdsRDs7QUFBQTtFQUE0QyxrQkFBQTtBQUk1Qzs7QUFEQTtFQUE4RCxrQkFBQTtBQUs5RCIsImZpbGUiOiJwYWdlLWNvbXBvbmVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYXQtYnV0dG9uXHJcbmJ1dHRvbi5tYXQtYnV0dG9uLCBhLm1hdC1idXR0b24geyBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cclxuXHJcbi8vIG1hdC1yYWlzZWQtYnV0dG9uXHJcbmJ1dHRvbi5tYXQtcmFpc2VkLWJ1dHRvbiwgYS5tYXQtcmFpc2VkLWJ1dHRvbiB7IG1hcmdpbi1yaWdodDogMTBweDsgfVxyXG5cclxuLy8gbWF0LXN0cm9rZWQtYnV0dG9uXHJcbmJ1dHRvbi5tYXQtc3Ryb2tlZC1idXR0b24sIGEubWF0LXN0cm9rZWQtYnV0dG9uIHsgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XHJcblxyXG4vLyBtYXQtZmxhdC1idXR0b25cclxuYnV0dG9uLm1hdC1mbGF0LWJ1dHRvbiwgYS5tYXQtZmxhdC1idXR0b24geyBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cclxuXHJcbi8vIG1hdC1pY29uLWJ1dHRvbiwgbWF0LWZhYiwgbWF0LW1pbmktZmFiXHJcbmJ1dHRvbi5tYXQtaWNvbi1idXR0b24sIGJ1dHRvbi5tYXQtZmFiLCBidXR0b24ubWF0LW1pbmktZmFiIHsgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9Il19 */"] });


/***/ }),

/***/ 5816:
/*!*******************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);



class PageNotFoundComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() { }
    onBackButtonClick() {
        this.location.back();
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location)); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 10, vars: 0, consts: [[1, "full-width", "grid", "grid-cols-1", "gap-4", "content-center", "h-96"], [1, "text-center"], [1, "material-icons", "text-9xl"], [1, "text-3xl"], ["mat-stroked-button", "", "color", "accent", 3, "click"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "find_in_page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageNotFoundComponent_Template_button_click_8_listener() { return ctx.onBackButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6569:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/page-under-construction/page-under-construction.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageUnderConstructionComponent": () => (/* binding */ PageUnderConstructionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);



class PageUnderConstructionComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() { }
    onBackButtonClick() {
        this.location.back();
    }
}
PageUnderConstructionComponent.ɵfac = function PageUnderConstructionComponent_Factory(t) { return new (t || PageUnderConstructionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location)); };
PageUnderConstructionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageUnderConstructionComponent, selectors: [["app-page-under-construction"]], decls: 8, vars: 0, consts: [[1, "full-width", "grid", "grid-cols-1", "gap-4", "content-center", "h-96"], [1, "text-center"], [1, "material-icons", "text-9xl"], [1, "text-3xl"], ["mat-stroked-button", "", "color", "accent", 3, "click"]], template: function PageUnderConstructionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "construction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "System under construction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageUnderConstructionComponent_Template_button_click_6_listener() { return ctx.onBackButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXVuZGVyLWNvbnN0cnVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    apiUrl: 'http://localhost',
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://svc-dynamic-form-symfony.loc/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map