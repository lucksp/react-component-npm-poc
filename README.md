# Description

Make a POC for building a React component that gets bundled for NPM package.

Will utilize:

- React
- TypeScript
- StyledComponents
- Storybook
- Rollup

# To Run

- Get started by running `npm install` so that dependencies are loaded.

### For Development:

All development will be done inside Storybook so components can be built in isolation.

- Run `npm run storybook:dev` and await the browser to open [http://localhost:6006/](http://localhost:6006/). All changes will be hot-reloaded under the hood.

### To prepare for NPM

- Using rollup to bundle the asssets before shipping to NPM as package.
- Run `npm run build`
- You should see a `build` directory at the root level. This is what will be pacakged & shipped (todo)
