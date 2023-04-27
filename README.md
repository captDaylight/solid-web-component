# Solid JS Lib Reactivity

There are two packages, `packages/solid-components` and `packages/app`. The latter imports components from `solid-components`. Both packages have a near identical `App.tsx` that uses the two components `Counter` and `Dialog`.

To run them, first `npm i` then

```
cd packages/solid-components
npm run build
```

Then run the app that uses the components:
```
cd packages/app
npm run start
```

The counter's reactivity works, but the dialog isn't working. If I set 
