import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

class Child2Component {
}
Child2Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Child2Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
Child2Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: Child2Component, selector: "lib-child2", ngImport: i0, template: "<div class=\"child2-container\">\r\n  <h1 class=\"child2-header\">Child App 2</h1>\r\n  <p>This is some content specific to Child App 2.</p>\r\n  <a class=\"child2-link\" routerLink=\"/dashboard\">Back to Dashboard</a>\r\n</div>\r\n", styles: [".child2-container{background-color:#fff8e1;padding:20px;border-radius:10px;box-shadow:0 0 15px #0000001a}.child2-header{color:#ff5722;font-size:2rem;font-weight:700}.child2-link{color:#673ab7;text-decoration:none;font-size:1.2rem;margin-top:20px;display:inline-block}.child2-link:hover{text-decoration:underline}\n"], dependencies: [{ kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Child2Component, decorators: [{
            type: Component,
            args: [{ selector: 'lib-child2', template: "<div class=\"child2-container\">\r\n  <h1 class=\"child2-header\">Child App 2</h1>\r\n  <p>This is some content specific to Child App 2.</p>\r\n  <a class=\"child2-link\" routerLink=\"/dashboard\">Back to Dashboard</a>\r\n</div>\r\n", styles: [".child2-container{background-color:#fff8e1;padding:20px;border-radius:10px;box-shadow:0 0 15px #0000001a}.child2-header{color:#ff5722;font-size:2rem;font-weight:700}.child2-link{color:#673ab7;text-decoration:none;font-size:1.2rem;margin-top:20px;display:inline-block}.child2-link:hover{text-decoration:underline}\n"] }]
        }] });

const routes = [{ path: '', component: Child2Component }];
class Child2Module {
}
Child2Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Child2Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
Child2Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: Child2Module, declarations: [Child2Component], imports: [CommonModule, i1.RouterModule], exports: [Child2Component] });
Child2Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Child2Module, imports: [CommonModule, RouterModule.forChild(routes)] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Child2Module, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [Child2Component],
                    imports: [CommonModule, RouterModule.forChild(routes)],
                    exports: [Child2Component],
                }]
        }] });

/*
 * Public API Surface of child2
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Child2Component, Child2Module };
//# sourceMappingURL=child2.mjs.map
