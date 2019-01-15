(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav [pedidoBar]=\"pedidoBar\">\n  <app-scanner-qrcode *ngIf=\"!valorQrCode\"  (valorQrCode)=\"recebendoValorScanner($event)\"></app-scanner-qrcode>\n  <app-pedido         *ngIf=\"valorQrCode\" [valorQrCode]=\"valorQrCode\" (pedidoBar)=\"recebendoMeuPedidobar($event)\"></app-pedido>   \n</app-main-nav>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_pedido__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/pedido */ "./src/app/models/pedido.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.valorQrCode = '';
        this.pedidoBar = new _models_pedido__WEBPACK_IMPORTED_MODULE_1__["Pedido"];
    }
    AppComponent.prototype.recebendoValorScanner = function (valorQrCode) {
        this.valorQrCode = valorQrCode;
    };
    AppComponent.prototype.recebendoMeuPedidobar = function (pedidoBar) {
        this.pedidoBar = pedidoBar;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/esm5/zxing-ngx-scanner.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pedido_pedido_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pedido/pedido.component */ "./src/app/pedido/pedido.component.ts");
/* harmony import */ var _scanner_qrcode_scanner_qrcode_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scanner-qrcode/scanner-qrcode.component */ "./src/app/scanner-qrcode/scanner-qrcode.component.ts");
/* harmony import */ var _pedidos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pedidos.service */ "./src/app/pedidos.service.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _pedido_dialog_adicionar_produto_dialog_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pedido/dialog-adicionar-produto/dialog-adicionar-produto.component */ "./src/app/pedido/dialog-adicionar-produto/dialog-adicionar-produto.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pedido_pedido_component__WEBPACK_IMPORTED_MODULE_8__["PedidoComponent"],
                _scanner_qrcode_scanner_qrcode_component__WEBPACK_IMPORTED_MODULE_9__["ScannerQrcodeComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_11__["MainNavComponent"],
                _pedido_dialog_adicionar_produto_dialog_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_15__["DialogAdicionarProdutoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_4__["ZXingScannerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_14__["BlockUIModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_pedidos_service__WEBPACK_IMPORTED_MODULE_10__["PedidosService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [
                _pedido_dialog_adicionar_produto_dialog_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_15__["DialogAdicionarProdutoComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 300px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n        <!-- MEU PEDIDO -->\n      <mat-accordion class=\"example-headers-align\">          \n          <mat-expansion-panel hideToggle>           \n            <mat-expansion-panel-header>      \n              <mat-panel-title>\n                <b>Meu pedido</b>\n              </mat-panel-title>\n              <mat-panel-description>\n                  <p *ngIf=\"pedidoBar.produtos.length > 0\">Detalhes</p>\n                  <mat-icon *ngIf=\"pedidoBar.produtos.length > 0\" matBadge={{pedidoBar.produtos.length}} matBadgePosition=\"below after\" matBadgeColor=\"warn\"> shopping_cart</mat-icon> \n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            \n            <mat-grid-list cols=\"5\" rowHeight=\"2:1\" >\n                    <mat-grid-tile [colspan]=2><b>Item</b></mat-grid-tile>\n                    <mat-grid-tile [colspan]=1><b>Total</b></mat-grid-tile>\n                    <mat-grid-tile [colspan]=1><b>Qtde.</b></mat-grid-tile>\n                    <mat-grid-tile [colspan]=1></mat-grid-tile>\n                  </mat-grid-list>  \n            <div *ngFor=\"let produto of pedidoBar.produtos\">\n                <mat-grid-list cols=\"5\" rowHeight=\"1:2\" >\n                    <mat-grid-tile [colspan]=2>{{ produto.nome }}</mat-grid-tile>\n                    <mat-grid-tile [colspan]=1>{{ produto.preco}}</mat-grid-tile>\n                    <mat-grid-tile [colspan]=1>{{produto.quantidade }}</mat-grid-tile>\n                    <mat-grid-tile>\n                        <button mat-icon-button color=\"warn\" (click)=\"removerProduto(produto)\">                    \n                            <mat-icon>remove_circle</mat-icon>\n                        </button>  \n                    </mat-grid-tile>\n                  </mat-grid-list>   \n                  <mat-grid-list cols=\"5\" rowHeight=\"1:1\" *ngIf=\"produto.observacao  != null\">\n                        <mat-grid-tile [colspan]=5><b>Obs:</b>{{ produto.observacao }}</mat-grid-tile>\n                  </mat-grid-list>                 \n            </div>\n            <hr>\n            <div *ngIf=\"pedidoBar.produtos.length > 0\">\n              <mat-grid-list cols=\"5\" rowHeight=\"2:1\" >\n                  <mat-grid-tile [colspan]=3>Total do Pedido</mat-grid-tile>\n                  <mat-grid-tile [colspan]=2><b>{{ minhaConta | currency:'BRL'}}</b></mat-grid-tile>                  \n              </mat-grid-list> \n              <mat-grid-list cols=\"4\" rowHeight=\"2:1\" >\n                  \n                  <mat-grid-tile [colspan]=\"2\">\n                      <button mat-raised-button color=\"accent\" (click)=\"enviarPedido()\">\n                          Enviar Pedido\n                          <mat-icon>send</mat-icon>\n                      </button>  \n                  </mat-grid-tile>    \n                  <mat-grid-tile></mat-grid-tile>      \n                  <mat-grid-tile><button mat-button color=\"primary\" (click)=\"drawer.toggle()\">Esconder</button></mat-grid-tile>\n              </mat-grid-list>                 \n          </div>      \n          </mat-expansion-panel>        \n        </mat-accordion>\n         <!-- FINAL MEU PEDIDO -->\n        <!-- PEDIDOS ENVIADOS -->\n          <mat-accordion class=\"example-headers-align\" *ngIf=\"pedidosEnviados?.produtos.length > 0\">\n            <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\"  hideToggle>\n              <mat-expansion-panel-header>      \n                <mat-panel-title>\n                  <b>Minha Conta</b>\n                </mat-panel-title>\n                <mat-panel-description>\n                    <p>Pedidos enviados</p>\n                    <mat-icon  matBadge={{pedidosEnviados?.produtos.length}} matBadgeColor=\"primary\">local_pizza</mat-icon>\n                  \n                </mat-panel-description>\n              </mat-expansion-panel-header>\n              \n              <div *ngFor=\"let enviado of pedidosEnviados?.produtos\">\n                  <mat-grid-list cols=\"4\" rowHeight=\"2:1\" >\n                      <mat-grid-tile>{{ enviado.nome }}</mat-grid-tile>\n                      <mat-grid-tile>{{ enviado.preco | currency:'BRL'}}</mat-grid-tile>\n                      <mat-grid-tile></mat-grid-tile>\n                      <mat-grid-tile>\n                        \n                      </mat-grid-tile>\n                    </mat-grid-list>                    \n              </div>\n              <mat-grid-list cols=\"4\" rowHeight=\"2:1\" >\n                    <mat-grid-tile>Total: </mat-grid-tile>\n                    <mat-grid-tile><b>{{ minhaConta | currency:'BRL'}}</b></mat-grid-tile>\n                    <mat-grid-tile></mat-grid-tile>\n                    <mat-grid-tile></mat-grid-tile>          \n                </mat-grid-list> \n              <mat-grid-list cols=\"4\" rowHeight=\"2:1\" >\n              \n                    <mat-grid-tile [colspan]=\"2\">\n                        <button mat-raised-button color=\"accent\" (click)=\"fecharConta()\">\n                            Fechar Conta\n                            <mat-icon>payment</mat-icon>\n                        </button>  \n                    </mat-grid-tile>    \n                    <mat-grid-tile></mat-grid-tile>      \n                    <mat-grid-tile><button mat-button color=\"accent\" (click)=\"closeStep()\">Esconder</button></mat-grid-tile>\n                </mat-grid-list>   \n            </mat-expansion-panel>\n          </mat-accordion>\n      <!-- <a mat-list-item href=\"#\">Link 2</a>\n      <a mat-list-item href=\"#\">Link 3</a> -->\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <!-- <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button> -->\n      <span id=\"titulo\" layout-align=\"center center\">GarçomFácil</span>\n    </mat-toolbar>\n    <!-- MEU PEDIDO TOOLBAR -->\n    <mat-toolbar color=\"primary\" *ngIf=\"pedidoBar.produtos.length > 0\">\n            <button\n              type=\"button\"\n              aria-label=\"Toggle sidenav\"\n              mat-icon-button\n              (click)=\"drawer.toggle()\"\n              *ngIf=\"isHandset$ | async\">\n              <span id=\"titulo\" layout-align=\"center center\">Carrinho</span>\n              <mat-icon *ngIf=\"pedidoBar.produtos.length > 0\" matBadge={{pedidoBar.produtos.length}} matBadgePosition=\"below after\" matBadgeColor=\"warn\"> shopping_cart</mat-icon> \n            </button>\n            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;\n            <button\n            type=\"button\"\n            aria-label=\"Toggle sidenav\"\n            mat-icon-button\n            (click)=\"drawer.toggle()\"\n            *ngIf=\"isHandset$ | async\">\n            <span id=\"titulo\" layout-align=\"center center\">Total: {{ minhaConta | currency:'BRL'}}</span>\n            \n          </button>                                       \n    </mat-toolbar>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_pedido__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/pedido */ "./src/app/models/pedido.ts");
/* harmony import */ var _services_pedido_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pedido-data.service */ "./src/app/services/pedido-data.service.ts");
/* harmony import */ var _pedidos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pedidos.service */ "./src/app/pedidos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver, pedidoDataService, pedidosService) {
        this.breakpointObserver = breakpointObserver;
        this.pedidoDataService = pedidoDataService;
        this.pedidosService = pedidosService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pedidoDataService.currentConta.subscribe(function (valor) { return _this.minhaConta = valor; });
    };
    MainNavComponent.prototype.removerProduto = function (produtoRemovido) {
        for (var i = 0; i < this.pedidoBar.produtos.length; i++) {
            if (this.pedidoBar.produtos[i].id == produtoRemovido.id && this.pedidoBar.produtos[i].quantidade == produtoRemovido.quantidade && this.pedidoBar.produtos[i].observacao == produtoRemovido.observacao) {
                this.pedidoBar.produtos.splice(i, 1);
            }
        }
        this.pedidoDataService.changeContaRmv(produtoRemovido.preco);
    };
    MainNavComponent.prototype.enviarPedido = function () {
        var _this = this;
        this.pedidosService.enviarPedido(this.pedidoBar).subscribe(function (retorno) { return _this.retornoEnviarPedido = retorno; });
        var addPedidoEnviado = this.pedidoBar;
        this.pedidosEnviados = addPedidoEnviado;
        this.pedidoBar.produtos = [];
        alert('Seu pedido foi enviado!');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_pedido__WEBPACK_IMPORTED_MODULE_3__["Pedido"])
    ], MainNavComponent.prototype, "pedidoBar", void 0);
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _services_pedido_data_service__WEBPACK_IMPORTED_MODULE_4__["PedidoDataService"], _pedidos_service__WEBPACK_IMPORTED_MODULE_5__["PedidosService"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/cardapio.ts":
/*!************************************!*\
  !*** ./src/app/models/cardapio.ts ***!
  \************************************/
/*! exports provided: Cardapio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cardapio", function() { return Cardapio; });
var Cardapio = /** @class */ (function () {
    function Cardapio() {
    }
    return Cardapio;
}());



/***/ }),

/***/ "./src/app/models/pedido.ts":
/*!**********************************!*\
  !*** ./src/app/models/pedido.ts ***!
  \**********************************/
/*! exports provided: Pedido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pedido", function() { return Pedido; });
var Pedido = /** @class */ (function () {
    function Pedido() {
        this.produtos = [];
    }
    return Pedido;
}());



/***/ }),

/***/ "./src/app/models/produto.ts":
/*!***********************************!*\
  !*** ./src/app/models/produto.ts ***!
  \***********************************/
/*! exports provided: Produto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produto", function() { return Produto; });
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());



/***/ }),

/***/ "./src/app/pedido/dialog-adicionar-produto/dialog-adicionar-produto.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/pedido/dialog-adicionar-produto/dialog-adicionar-produto.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".obsProduto {\r\n    width: 100%;\r\n  }\r\n  .quantidadeProduto {\r\n    width: 40%;\r\n  }\r\n  .centralize{\r\n    text-align: center;\r\n  }\r\n \r\n"

/***/ }),

/***/ "./src/app/pedido/dialog-adicionar-produto/dialog-adicionar-produto.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pedido/dialog-adicionar-produto/dialog-adicionar-produto.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mat-typography\">\n  <h3 mat-dialog-title>Adicionar <b>{{data.nomeProduto}}</b></h3>\n  <div *ngIf=\"data.permite2Sabores == true\">\n      <mat-slide-toggle [(ngModel)]=\"checked\" (click)=\"iniciaRotina2Sabores()\">Deseja 2 sabores?</mat-slide-toggle>\n  </div>\n  <div mat-dialog-content >\n    <div *ngIf=\"checked == true\">   \n         \n      <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n        <mat-step [stepControl]=\"firstFormGroup\">\n          <form [formGroup]=\"firstFormGroup\">\n            <!-- <ng-template matStepLabel></ng-template> -->\n            <b class=\"centralize\">Escolha o 2º sabor!</b> \n            <BR>\n            <div *ngFor=\"let produtoCardapio of data.cardapio2Sabores\" >\n                <mat-grid-list cols=\"4\" rowHeight=\"2:1\" >\n                    <mat-grid-tile [colspan]=3><b>{{ produtoCardapio.nome }}</b></mat-grid-tile>\n                    <mat-grid-tile [colspan]=1>\n                      <button mat-icon-button color=\"accent\" (click)=\"onChooseSegundoSabor(produtoCardapio, stepper)\">                    \n                        <mat-icon>add_circle</mat-icon>\n                      </button>                                          \n                    </mat-grid-tile>\n                </mat-grid-list> \n                <mat-grid-list cols=\"1\" rowHeight=\"10:1\" >                   \n                    <mat-grid-tile [colspan]=1>{{ produtoCardapio.preco | currency:'BRL'}}</mat-grid-tile>                                                             \n                </mat-grid-list>   \n                <span>{{ produtoCardapio.descricao }} </span>\n                <hr>                            \n            </div>            \n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"secondFormGroup\">         \n            <ng-template matStepLabel></ng-template>\n            <mat-form-field class=\"obsProduto\">    \n              <textarea matInput [(ngModel)]=\"data.observacao\" placeholder=\"Observação:\"></textarea>\n            </mat-form-field>\n            <mat-form-field class=\"quantidadeProduto\">\n                <input matInput [(ngModel)]=\"data.quantidade\" (change)=\"onChangeQuantidade()\" placeholder=\"Quantidade\" type=\"number\">\n            </mat-form-field>            \n        </mat-step>        \n      </mat-horizontal-stepper>      \n         \n          \n        \n       \n    </div>\n    \n    <mat-form-field class=\"obsProduto\" *ngIf=\"!checked == true\">    \n      <textarea matInput [(ngModel)]=\"data.observacao\" placeholder=\"Observação:\"></textarea>\n    </mat-form-field>\n    <mat-form-field class=\"quantidadeProduto\" *ngIf=\"!checked == true\">\n        <input matInput [(ngModel)]=\"data.quantidade\" (change)=\"onChangeQuantidade()\" placeholder=\"Quantidade\" type=\"number\">\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onCancelClick()\">Cancelar</button>\n    <button mat-button (click)=\"onOkClick()\" cdkFocusInitial [disabled]=\"desabilitaBtnOK\">Ok</button>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/pedido/dialog-adicionar-produto/dialog-adicionar-produto.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pedido/dialog-adicionar-produto/dialog-adicionar-produto.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DialogAdicionarProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAdicionarProdutoComponent", function() { return DialogAdicionarProdutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DialogAdicionarProdutoComponent = /** @class */ (function () {
    function DialogAdicionarProdutoComponent(_formBuilder, snackBar, dialogRef, data) {
        this._formBuilder = _formBuilder;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.checked = false;
        this.isLinear = true;
        this.desabilitaBtnOK = false;
    }
    DialogAdicionarProdutoComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            //firstCtrl: ['', Validators.required]
            firstCtrl: ['']
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    DialogAdicionarProdutoComponent.prototype.onCancelClick = function () {
        this.dialogRef.close('cancel');
    };
    DialogAdicionarProdutoComponent.prototype.onOkClick = function () {
        this.data.adicionar = true;
        this.dialogRef.close(this.data);
    };
    DialogAdicionarProdutoComponent.prototype.onChooseSegundoSabor = function (segundoSaborEscolhido, stepper) {
        var nome = this.data.nomeProduto;
        this.data.nomeProduto = '1/2 ';
        this.data.nomeProduto += nome;
        this.data.nomeProduto += ' + 1/2 ';
        this.data.nomeProduto += segundoSaborEscolhido.nome;
        stepper.next();
        this.calcularPreco2Sabores(segundoSaborEscolhido.preco);
        this.desabilitaBtnOK = false;
    };
    DialogAdicionarProdutoComponent.prototype.onChangeQuantidade = function () {
        if (this.data.observacao != null) {
            this.openSnackBar('Atenção! A observação inserida servirá para todos os ' + this.data.quantidade + ' itens. \n' + '"' + this.data.observacao + '"');
        }
    };
    DialogAdicionarProdutoComponent.prototype.iniciaRotina2Sabores = function () {
        if (this.checked == true) {
            this.desabilitaBtnOK = false;
        }
        else {
            this.desabilitaBtnOK = true;
        }
    };
    DialogAdicionarProdutoComponent.prototype.calcularPreco2Sabores = function (precoSegundoSabor) {
        if (this.data.produto2Sabores.categoria.precoMedio2Sabores == true) {
            this.data.precoCalculado = Math.round(((this.data.produto2Sabores.preco + precoSegundoSabor) / 2) * 100) / 100;
        }
        else {
            if (this.data.produto2Sabores.preco > precoSegundoSabor) {
                this.data.precoCalculado = this.data.produto2Sabores.preco;
            }
            else {
                this.data.precoCalculado = precoSegundoSabor;
            }
        }
    };
    DialogAdicionarProdutoComponent.prototype.openSnackBar = function (message) {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        config.panelClass = ['custom-snackbar'];
        config.duration = 7000;
        this.snackBar.open(message, 'Ok', config);
    };
    DialogAdicionarProdutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-adicionar-produto',
            template: __webpack_require__(/*! ./dialog-adicionar-produto.component.html */ "./src/app/pedido/dialog-adicionar-produto/dialog-adicionar-produto.component.html"),
            styles: [__webpack_require__(/*! ./dialog-adicionar-produto.component.css */ "./src/app/pedido/dialog-adicionar-produto/dialog-adicionar-produto.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogAdicionarProdutoComponent);
    return DialogAdicionarProdutoComponent;
}());



/***/ }),

/***/ "./src/app/pedido/pedido.component.css":
/*!*********************************************!*\
  !*** ./src/app/pedido/pedido.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title, \r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#cardapio{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n}\r\n\r\n.mat-expansion-panel-header-description{\r\n  height: 50px;;\r\n}\r\n\r\n.mat-expansion-panel-header-title {\r\n  color: #e6ac00;\r\n} \r\n"

/***/ }),

/***/ "./src/app/pedido/pedido.component.html":
/*!**********************************************!*\
  !*** ./src/app/pedido/pedido.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui class=\"mat-typography\">   \n<!--  FORM NOME CLIENTE -->\n<mat-grid-list cols=\"1\" rowHeight=\"2:1\" *ngIf=\"nomeCliente == null\">\n  <mat-grid-tile>\n        <mat-form-field class=\"example-full-width\" layout-align=\"center center\">\n                <input matInput placeholder=\"Informe seu nome\" #nomeCliente required>\n        </mat-form-field>  \n        <button mat-icon-button color=\"primary\" type=\"submit\" (click)=\"salvarNomeCliente(nomeCliente.value)\">                    \n                <mat-icon>send</mat-icon>\n            </button>    \n  </mat-grid-tile>\n</mat-grid-list>\n<div *ngIf=\"nomeCliente != null\"> \n<!-- MEU PEDIDO -->\n<!-- <mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\"  hideToggle>\n    <mat-expansion-panel-header>      \n      <mat-panel-title>\n        <b>Meu pedido</b>\n      </mat-panel-title>\n      <mat-panel-description>\n          <p *ngIf=\"meusProdutos.length > 0\">Detalhes do pedido</p>\n          <p *ngIf=\"!meusProdutos.length > 0\">Adicione produtos do cardápio!</p>\n          <mat-icon *ngIf=\"meusProdutos.length > 0\" matBadge={{meusProdutos.length}} matBadgePosition=\"below after\" matBadgeColor=\"warn\"> shopping_cart</mat-icon> \n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    \n    <mat-grid-list cols=\"5\" rowHeight=\"5:1\" >\n            <mat-grid-tile [colspan]=2><b>Item</b></mat-grid-tile>\n            <mat-grid-tile [colspan]=1><b>Total</b></mat-grid-tile>\n            <mat-grid-tile [colspan]=1><b>Qtde.</b></mat-grid-tile>\n            <mat-grid-tile [colspan]=1></mat-grid-tile>\n          </mat-grid-list>  \n    <div *ngFor=\"let produto of meusProdutos\">\n        <mat-grid-list cols=\"5\" rowHeight=\"1:1\" >\n            <mat-grid-tile [colspan]=2>{{ produto.nome }}</mat-grid-tile>\n            <mat-grid-tile [colspan]=1>{{ produto.preco}}</mat-grid-tile>\n            <mat-grid-tile [colspan]=1>{{produto.quantidade }}</mat-grid-tile>\n            <mat-grid-tile>\n                <button mat-icon-button color=\"warn\" (click)=\"removerProduto(produto)\">                    \n                    <mat-icon>remove_circle</mat-icon>\n                </button>  \n            </mat-grid-tile>\n          </mat-grid-list>   \n          <mat-grid-list cols=\"5\" rowHeight=\"1:1\" *ngIf=\"produto.observacao  != null\">\n                <mat-grid-tile [colspan]=5><b>Obs:</b>{{ produto.observacao }}</mat-grid-tile>\n          </mat-grid-list>                 \n    </div>\n    <hr>\n    <div *ngIf=\"meusProdutos.length > 0\">\n      <mat-grid-list cols=\"4\" rowHeight=\"2:1\" >\n          <mat-grid-tile [colspan]=2>Total do Pedido</mat-grid-tile>\n          <mat-grid-tile [colspan]=2><b>{{ minhaConta | currency:'BRL'}}</b></mat-grid-tile>                  \n      </mat-grid-list> \n      <mat-grid-list cols=\"4\" rowHeight=\"2:1\" >\n          \n          <mat-grid-tile [colspan]=\"2\">\n              <button mat-raised-button color=\"accent\" (click)=\"enviarPedido()\">\n                  Enviar Pedido\n                  <mat-icon>send</mat-icon>\n              </button>  \n          </mat-grid-tile>    \n          <mat-grid-tile></mat-grid-tile>      \n          <mat-grid-tile><button mat-button color=\"primary\" (click)=\"closeStep()\">Esconder</button></mat-grid-tile>\n      </mat-grid-list>                 \n  </div>\n  </mat-expansion-panel>\n</mat-accordion> -->\n<!-- PEDIDOS ENVIADOS -->\n<mat-accordion class=\"example-headers-align\" *ngIf=\"pedidosEnviados?.produtos.length > 0\">\n        <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\"  hideToggle>\n          <mat-expansion-panel-header>      \n            <mat-panel-title>\n              <b>Minha Conta</b>\n            </mat-panel-title>\n            <mat-panel-description>\n                <p>Pedidos enviados</p>\n                <mat-icon  matBadge={{pedidosEnviados?.produtos.length}} matBadgeColor=\"primary\">local_pizza</mat-icon>\n              \n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          \n          <div *ngFor=\"let produto of pedidosEnviados?.produtos\">\n              <mat-grid-list cols=\"4\" rowHeight=\"2:1\" >\n                  <mat-grid-tile>{{ produto.nome }}</mat-grid-tile>\n                  <mat-grid-tile>{{ produto.preco | currency:'BRL'}}</mat-grid-tile>\n                  <mat-grid-tile></mat-grid-tile>\n                  <mat-grid-tile>\n                    \n                  </mat-grid-tile>\n                </mat-grid-list>                    \n          </div>\n          <mat-grid-list cols=\"4\" rowHeight=\"2:1\" >\n                <mat-grid-tile>Total: </mat-grid-tile>\n                <mat-grid-tile><b>{{ minhaConta | currency:'BRL'}}</b></mat-grid-tile>\n                <mat-grid-tile></mat-grid-tile>\n                <mat-grid-tile></mat-grid-tile>          \n            </mat-grid-list> \n          <mat-grid-list cols=\"4\" rowHeight=\"2:1\" >\n          \n                <mat-grid-tile [colspan]=\"2\">\n                    <button mat-raised-button color=\"accent\" (click)=\"fecharConta()\">\n                        Fechar Conta\n                        <mat-icon>payment</mat-icon>\n                    </button>  \n                </mat-grid-tile>    \n                <mat-grid-tile></mat-grid-tile>      \n                <mat-grid-tile><button mat-button color=\"accent\" (click)=\"closeStep()\">Esconder</button></mat-grid-tile>\n            </mat-grid-list>   \n        </mat-expansion-panel>\n    </mat-accordion>\n<!-- INICIO CARDAPIO -->\n<!-- <mat-card ></mat-card> -->\n<h2 id=\"cardapio\">  Cardápio</h2>\n<mat-accordion *ngFor=\"let  categoria of cardapio?.categorias\">\n  <mat-expansion-panel >\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <b> {{ categoria.nome }} </b>\n      </mat-panel-title>\n      <mat-panel-description>\n      \n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <div *ngFor=\"let produtoCardapio of cardapio.produtos\">\n        <div *ngIf=\"produtoCardapio.categoria.nome == categoria.nome\">\n        <mat-grid-list cols=\"4\" rowHeight=\"2:1\" >\n            <mat-grid-tile [colspan]=2><b>{{ produtoCardapio.nome }}</b></mat-grid-tile>\n            <mat-grid-tile [colspan]=1>{{ produtoCardapio.preco | currency:'BRL'}}</mat-grid-tile>            \n            <mat-grid-tile [colspan]=1>\n                <button mat-icon-button color=\"accent\" (click)=\"openDialog(produtoCardapio, categoria.nome)\">                    \n                    <mat-icon>add_circle</mat-icon>\n                </button>  \n            </mat-grid-tile>  \n                 \n          </mat-grid-list>  \n          <span>{{ produtoCardapio.descricao }} </span>\n          <hr>    \n        </div>             \n    </div>\n  </mat-expansion-panel>\n</mat-accordion>\n</div>\n</block-ui>\n"

/***/ }),

/***/ "./src/app/pedido/pedido.component.ts":
/*!********************************************!*\
  !*** ./src/app/pedido/pedido.component.ts ***!
  \********************************************/
/*! exports provided: PedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoComponent", function() { return PedidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pedidos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pedidos.service */ "./src/app/pedidos.service.ts");
/* harmony import */ var _models_produto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/produto */ "./src/app/models/produto.ts");
/* harmony import */ var _models_cardapio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/cardapio */ "./src/app/models/cardapio.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _models_pedido__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/pedido */ "./src/app/models/pedido.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_adicionar_produto_dialog_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-adicionar-produto/dialog-adicionar-produto.component */ "./src/app/pedido/dialog-adicionar-produto/dialog-adicionar-produto.component.ts");
/* harmony import */ var _services_pedido_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/pedido-data.service */ "./src/app/services/pedido-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PedidoComponent = /** @class */ (function () {
    function PedidoComponent(snackBar, dialog, pedidosService, pedidoDataService) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.pedidosService = pedidosService;
        this.pedidoDataService = pedidoDataService;
        this.pedidoBar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.meusProdutos = [];
        this.nomeCliente = null;
        this.step = 0;
        this.idInterno = 1;
        this.cardapio = new _models_cardapio__WEBPACK_IMPORTED_MODULE_3__["Cardapio"];
        this.meuPedido = new _models_pedido__WEBPACK_IMPORTED_MODULE_5__["Pedido"];
        this.cardapio2Sabores = [];
    }
    PedidoComponent.prototype.ngOnInit = function () {
    };
    PedidoComponent.prototype.buscarCardapio = function () {
        var _this = this;
        this.blockUI.start('Buscando cardápio, Aguarde...'); // Start blocking
        this.pedidosService.buscarCardapio().subscribe(function (dados) { return _this.cardapio = dados; }, function (error) { return _this.openSnackBar(error, '📴', 6000); });
        setTimeout(function () {
            _this.blockUI.stop(); // Stop blocking
        }, 1000);
    };
    PedidoComponent.prototype.salvarNomeCliente = function (apelido) {
        if (apelido.length > 0) {
            this.nomeCliente = apelido;
            this.buscarCardapio();
            this.openSnackBar('Olá ' + apelido + ', para fazer um pedido, adicione produtos do nosso Cardápio!', '🍻', 6000);
        }
        else {
            this.openSnackBar('Insira seu nome para continuar!', '✏️', 3000);
        }
    };
    PedidoComponent.prototype.openSnackBar = function (message, action, duracao) {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarConfig"]();
        config.panelClass = ['custom-snackbar'];
        config.duration = duracao;
        this.snackBar.open(message, action, config);
    };
    PedidoComponent.prototype.openDialog = function (produtoAberto, nomeCategoria) {
        var _this = this;
        console.log('Permite 2 sabores: ' + produtoAberto.categoria.permite2Sabores);
        console.log('Usar preco medio: ' + produtoAberto.categoria.precoMedio2Sabores);
        //Produto 2 Sabores ~~~~~~~~~~~~~~
        if (produtoAberto.categoria.permite2Sabores == true) {
            for (var _i = 0, _a = this.cardapio.produtos; _i < _a.length; _i++) {
                var produto = _a[_i];
                if (produto.id == produtoAberto.id) {
                    continue;
                }
                else if (produto.categoria.nome == nomeCategoria) {
                    this.cardapio2Sabores.push(produto);
                }
            }
            var dialogRef = this.dialog.open(_dialog_adicionar_produto_dialog_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_7__["DialogAdicionarProdutoComponent"], {
                width: '400px',
                data: { nomeProduto: produtoAberto.nome, quantidade: 1, permite2Sabores: true, produto2Sabores: produtoAberto, cardapio2Sabores: this.cardapio2Sabores }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result != null && result.adicionar == true) {
                    var prdAberto = new _models_produto__WEBPACK_IMPORTED_MODULE_2__["Produto"];
                    prdAberto.id = produtoAberto.id;
                    prdAberto.nome = result.nomeProduto;
                    if (result.precoCalculado != null) {
                        prdAberto.preco = result.precoCalculado * result.quantidade;
                    }
                    else {
                        prdAberto.preco = produtoAberto.preco * result.quantidade;
                    }
                    prdAberto.observacao = result.observacao;
                    prdAberto.quantidade = result.quantidade;
                    _this.adicionarProdutoAoPedido(prdAberto);
                }
                _this.cardapio2Sabores = [];
            });
            ///PRODUTO SIMPLES
        }
        else {
            var dialogRef = this.dialog.open(_dialog_adicionar_produto_dialog_adicionar_produto_component__WEBPACK_IMPORTED_MODULE_7__["DialogAdicionarProdutoComponent"], {
                width: '400px',
                data: { nomeProduto: produtoAberto.nome, quantidade: 1 }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result != null && result.adicionar == true) {
                    var prdAberto = new _models_produto__WEBPACK_IMPORTED_MODULE_2__["Produto"];
                    prdAberto.id = produtoAberto.id;
                    prdAberto.nome = produtoAberto.nome;
                    prdAberto.preco = produtoAberto.preco * result.quantidade;
                    prdAberto.observacao = result.observacao;
                    prdAberto.quantidade = result.quantidade;
                    _this.adicionarProdutoAoPedido(prdAberto);
                }
                //console.log('The dialog was closed');           
            });
        }
    };
    PedidoComponent.prototype.adicionarProdutoAoPedido = function (produtoAdicionado) {
        var prd = new _models_produto__WEBPACK_IMPORTED_MODULE_2__["Produto"];
        prd.id = produtoAdicionado.id;
        prd.nome = produtoAdicionado.nome;
        prd.preco = produtoAdicionado.preco;
        prd.quantidade = produtoAdicionado.quantidade;
        prd.observacao = produtoAdicionado.observacao;
        this.meusProdutos.push(prd);
        //Adiconar valor na conta
        this.pedidoDataService.changeContaAdd(produtoAdicionado.preco);
        this.meuPedido.produtos = this.meusProdutos;
        //ATRIBUI DADOS DO CARDAPIO AO PEDIDO
        if (this.meuPedido.cliente == null || this.meuPedido.mesa == null || this.meuPedido.status == null || this.meuPedido.apelido == null) {
            this.meuPedido.cliente = this.cardapio.cliente;
            this.meuPedido.mesa = this.cardapio.mesa;
            this.meuPedido.status = "Enviado";
            this.meuPedido.apelido = this.nomeCliente;
        }
        //ENVIANDO PEDIDO PARA NAV-BAR COMPONENT
        this.pedidoBar.emit(this.meuPedido);
        this.meuPedido = new _models_pedido__WEBPACK_IMPORTED_MODULE_5__["Pedido"];
        this.openSnackBar(produtoAdicionado.nome + " adicionado ao carrinho!", '🛒', 3000);
    };
    PedidoComponent.prototype.fecharConta = function () {
        alert('Sua conta foi fechada, dirija-se para realizar o pagamento.');
    };
    PedidoComponent.prototype.closeStep = function () {
        this.step = 0;
    };
    PedidoComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PedidoComponent.prototype, "pedidoBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PedidoComponent.prototype, "valorQrCode", void 0);
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["BlockUI"])(),
        __metadata("design:type", Object)
    ], PedidoComponent.prototype, "blockUI", void 0);
    PedidoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pedido',
            template: __webpack_require__(/*! ./pedido.component.html */ "./src/app/pedido/pedido.component.html"),
            styles: [__webpack_require__(/*! ./pedido.component.css */ "./src/app/pedido/pedido.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _pedidos_service__WEBPACK_IMPORTED_MODULE_1__["PedidosService"], _services_pedido_data_service__WEBPACK_IMPORTED_MODULE_8__["PedidoDataService"]])
    ], PedidoComponent);
    return PedidoComponent;
}());



/***/ }),

/***/ "./src/app/pedidos.service.ts":
/*!************************************!*\
  !*** ./src/app/pedidos.service.ts ***!
  \************************************/
/*! exports provided: PedidosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosService", function() { return PedidosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PedidosService = /** @class */ (function () {
    //cardapioUrl = 'https://epizza-demo.herokuapp.com/buscarCardapio?cliente=5ba83d9ac954ef000429345a&mesa=01';
    //enviarPedidoUrl = 'https://epizza-demo.herokuapp.com/enviarPedido';
    function PedidosService(http) {
        this.http = http;
        //cardapioUrl = 'http://192.168.1.113:8080/buscarCardapio?cliente=5ba717ae0cced02530cd403f&mesa=01';
        //enviarPedidoUrl = 'http://192.168.1.113:8080/enviarPedido';
        //PROD
        this.cardapioUrl = '/buscarCardapio?cliente=5ba83d9ac954ef000429345a&mesa=01';
        this.enviarPedidoUrl = '/enviarPedido';
    }
    PedidosService.prototype.buscarCardapio = function () {
        return this.http.get("" + this.cardapioUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PedidosService.prototype.enviarPedido = function (pedido) {
        return this.http.post(this.enviarPedidoUrl, pedido);
    };
    PedidosService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', error.error.message);
        }
        else {
            console.error('Server Side Error: ', error);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Não foi possível buscar o cardápio, verifique sua conexão com a internet e tente novamente.');
    };
    PedidosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PedidosService);
    return PedidosService;
}());



/***/ }),

/***/ "./src/app/scanner-qrcode/scanner-qrcode.component.css":
/*!*************************************************************!*\
  !*** ./src/app/scanner-qrcode/scanner-qrcode.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/scanner-qrcode/scanner-qrcode.component.html":
/*!**************************************************************!*\
  !*** ./src/app/scanner-qrcode/scanner-qrcode.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<mat-grid-list cols=\"1\" rowHeight=\"12:1\">\n  <mat-grid-tile>\n    <button mat-raised-button color=\"accent\" (click)=\"iniciaScan()\">Escanear</button>\n  </mat-grid-tile>\n</mat-grid-list>\n<br><br>\n<div *ngIf=\"availableDevices\">\n  <select (change)=\"onDeviceSelectChange($event.target.value)\">\n    <option value=\"\" [selected]=\"!selectedDevice\">Selecione uma câmera</option>\n    <option *ngFor=\"let device of availableDevices\" [value]=\"device.deviceId\" [selected]=\"selectedDevice && device.deviceId === selectedDevice.deviceId\">{{ device.label }}</option>\n  </select>\n</div>\n\n<div [hidden]=\"!hasCameras\">\n\n  <zxing-scanner #scanner class=\"test-class\" start=\"true\" [device]=\"selectedDevice\" (scanSuccess)=\"handleQrCodeResult($event)\"></zxing-scanner>\n\n  <h2 *ngIf=\"!this.selectedDevice\">Selecione uma câmera.</h2>\n\n  <p>\n    Resultado:\n    <strong>{{ qrResultString }}</strong>\n  </p>\n\n</div>\n\n<div *ngIf=\"!hasCameras && hasPermission === true\">\n\n  <h1>Estamos com problemas ao reconhecer a câmera do seu dispositivo. </h1>\n\n</div>\n\n<div *ngIf=\"hasPermission == undefined\">\n\n  <h2>Esperando permissão de acesso à câmera.</h2>\n\n  <blockquote>\n    <h3>Certifique-se de que seu dispositivo possui uma câmera.</h3>\n  </blockquote>\n\n</div>\n\n<div *ngIf=\"hasPermission === false\">\n\n  <h1>Você negou o acesso à sua câmera, não conseguimos escanear o QrCode sem ela. 😪</h1>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/scanner-qrcode/scanner-qrcode.component.ts":
/*!************************************************************!*\
  !*** ./src/app/scanner-qrcode/scanner-qrcode.component.ts ***!
  \************************************************************/
/*! exports provided: ScannerQrcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerQrcodeComponent", function() { return ScannerQrcodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScannerQrcodeComponent = /** @class */ (function () {
    function ScannerQrcodeComponent() {
        this.hasCameras = false;
        this.valorQrCode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ScannerQrcodeComponent.prototype.iniciaScan = function () {
        this.valorQrCode.emit("http://localhost:8080/buscarCardapio?cliente=5ba717ae0cced02530cd403f&mesa=01"); //comentar ao publicar
        this.hasCameras = !this.hasCameras;
    };
    ScannerQrcodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scanner.camerasFound.subscribe(function (devices) {
            //   this.hasCameras = true;
            console.log('Devices: ', devices);
            _this.availableDevices = devices;
            // selects the devices's back camera by default
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var device = devices_1[_i];
                if (/back|rear|environment/gi.test(device.label)) {
                    _this.scanner.changeDevice(device);
                    _this.selectedDevice = device;
                    break;
                }
            }
        });
        this.scanner.camerasNotFound.subscribe(function (devices) {
            console.log('Ocorreu um erro ao tentar inicializar sua câmera.');
        });
        this.scanner.permissionResponse.subscribe(function (answer) {
            _this.hasPermission = answer;
        });
    };
    ScannerQrcodeComponent.prototype.handleQrCodeResult = function (resultString) {
        alert('QRCODE ENCONTRADO!');
        this.qrResultString = resultString;
        this.valorQrCode.emit("http://localhost:8080/buscarCardapio?cliente=5ba717ae0cced02530cd403f&mesa=01");
    };
    ScannerQrcodeComponent.prototype.onDeviceSelectChange = function (selectedValue) {
        console.log('Selection changed: ', selectedValue);
        this.selectedDevice = this.scanner.getDeviceById(selectedValue);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scanner'),
        __metadata("design:type", Object)
    ], ScannerQrcodeComponent.prototype, "scanner", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ScannerQrcodeComponent.prototype, "valorQrCode", void 0);
    ScannerQrcodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scanner-qrcode',
            template: __webpack_require__(/*! ./scanner-qrcode.component.html */ "./src/app/scanner-qrcode/scanner-qrcode.component.html"),
            styles: [__webpack_require__(/*! ./scanner-qrcode.component.css */ "./src/app/scanner-qrcode/scanner-qrcode.component.css")]
        })
    ], ScannerQrcodeComponent);
    return ScannerQrcodeComponent;
}());



/***/ }),

/***/ "./src/app/services/pedido-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/pedido-data.service.ts ***!
  \*************************************************/
/*! exports provided: PedidoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoDataService", function() { return PedidoDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PedidoDataService = /** @class */ (function () {
    function PedidoDataService() {
        this.contaSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.currentConta = this.contaSource.asObservable();
    }
    PedidoDataService.prototype.changeContaAdd = function (valor) {
        var acumulate = this.contaSource.getValue();
        acumulate += valor;
        this.contaSource.next(acumulate);
    };
    PedidoDataService.prototype.changeContaRmv = function (valor) {
        var acumulate = this.contaSource.getValue();
        acumulate -= valor;
        this.contaSource.next(acumulate);
    };
    PedidoDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PedidoDataService);
    return PedidoDataService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jonatas\Documents\Angular\garcomfacil-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map