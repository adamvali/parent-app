import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

class Child1Component {
}
Child1Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Child1Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
Child1Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: Child1Component, selector: "lib-child1", ngImport: i0, template: "<div class=\"child1-container\">\r\n  <h1 class=\"child1-header\">Child App 1</h1>\r\n  <p>This is some content specific to Child App 1.</p>\r\n  <a class=\"child1-link\" routerLink=\"/dashboard\">Back to Dashboard</a>\r\n</div>\r\n", styles: [".child1-container{background-color:#f0f8ff;padding:20px;border-radius:10px;box-shadow:0 0 15px #0000001a}.child1-header{color:#333;font-size:2rem;font-weight:700}.child1-link{color:#007acc;text-decoration:none;font-size:1.2rem;margin-top:20px;display:inline-block}.child1-link:hover{text-decoration:underline}\n"], dependencies: [{ kind: "directive", type: i1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Child1Component, decorators: [{
            type: Component,
            args: [{ selector: 'lib-child1', template: "<div class=\"child1-container\">\r\n  <h1 class=\"child1-header\">Child App 1</h1>\r\n  <p>This is some content specific to Child App 1.</p>\r\n  <a class=\"child1-link\" routerLink=\"/dashboard\">Back to Dashboard</a>\r\n</div>\r\n", styles: [".child1-container{background-color:#f0f8ff;padding:20px;border-radius:10px;box-shadow:0 0 15px #0000001a}.child1-header{color:#333;font-size:2rem;font-weight:700}.child1-link{color:#007acc;text-decoration:none;font-size:1.2rem;margin-top:20px;display:inline-block}.child1-link:hover{text-decoration:underline}\n"] }]
        }] });

const routes = [{ path: '', component: Child1Component }];
class Child1Module {
}
Child1Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Child1Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
Child1Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: Child1Module, declarations: [Child1Component], imports: [CommonModule, i1.RouterModule], exports: [Child1Component] });
Child1Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Child1Module, imports: [CommonModule, RouterModule.forChild(routes)] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Child1Module, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [Child1Component],
                    imports: [CommonModule, RouterModule.forChild(routes)],
                    exports: [Child1Component],
                }]
        }] });

/*
 * Public API Surface of child1
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Child1Component, Child1Module };
//# sourceMappingURL=child1.mjs.map
