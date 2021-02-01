# Ngx-Demo-Tour

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Summary of Work

- Library chosen for compatibility with the ngx-bootstrap dependency
- Versioned Angular, angular-cli and TypeScript to be the same or very near the versions to be used in production.
- Custom service to ensure any tour steps do not appear out of the viewport, and there is a smooth scroll
- The Tour is app-wide, and will always boot like this, but has been split into mini-tours for a few pages (/docs, /checkout, /blog and root). This functionality was not really provided OOTB, but it was adapted to fit the need.
- Tour steps can be fetched by anchorId; makes the addition of tour steps fairly straightforward
- Tour steps can be added in a modular fashion and bundled together in app-tours.ts
- Tour steps can be configured to look ahead for currently hidden DOM elements (e.g. in complex forms), and virtually click the button to show this DOM element before stepping to it.

## Known Bugs

1) Elements at the top of the page cannot be toured as position 'top'. This will partially render off screen. There is no real need to alter this.

## Todo

1) The primary changes at this point are cosmetic; this will be best achieved once ported into production.
2) It may be wise, given that this is an out-dated version of Angular, angular-cli, ngx-boostrap and ngx-tour, to provide some basic tests.
3) There may be room to write some tests to ensure correct inter-op with the production code.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `docs/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
