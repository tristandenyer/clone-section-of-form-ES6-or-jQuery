# Demp app using Rollup.js + Bootstrap 4

This demo is a basic proof-of-concept using Rollup, including importing the `clone-form` module from `node_modules` and converting it from CommonJS.

## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/tristandenyer/clone-section-of-form-ES6-or-jQuery.git
cd clone-section-of-form-ES6-or-jQuery/clone-demo-rollup-js
npm install
npm run build
npm run dev
```

### Optional

`npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:5000](http://localhost:5000).

`npm run watch` will continually rebuild the application as your source files change.

`npm run dev` will run `npm start` and `npm run watch` in parallel.

## The bundle

You can verify the bundled JS at http://localhost:5000/bundle.js.

## License

[MIT](LICENSE).

## Resources

[Clone Form JS on GitHub](https://github.com/tristandenyer/clone-section-of-form-ES6-or-jQuery)

[Clone Form JS on npm](https://www.npmjs.com/package/@tristandenyer/clone-form)

[Rollup.js documentation](https://rollupjs.org/)

[Rollup.js Starter App](https://github.com/rollup/rollup-starter-app)
