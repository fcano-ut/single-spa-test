# single-spa example

To run, open two tabs side-by-side and run these two commands:

```
npm run start --workspace=angular-host
```

Starts the angular host at http://localhost:4200/

```
npm run start --workspace=react-microfrontend
```

Starts the react microfrontend, using Module Federation, whose entrypoint is at http://localhost:8080/remoteEntry.js