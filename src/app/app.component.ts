import { Component, Renderer2, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadStyles();
      });
  }

  loadStyles() {
    // Clear previous styles
    const existingLink = document.getElementById('dynamic-styles');
    if (existingLink) {
      this.renderer.removeChild(document.head, existingLink);
    }

    // Dynamically load new stylesheet based on the route
    const link = this.renderer.createElement('link');
    link.id = 'dynamic-styles';
    link.rel = 'stylesheet';
    if (this.router.url.includes('child-app1')) {
      link.href = 'child-app1/styles.css';
    } else if (this.router.url.includes('child-app2')) {
      link.href = 'child-app2/styles.css';
    }
    this.renderer.appendChild(document.head, link);
  }
}
