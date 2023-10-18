# single-spa example

To run, open different terminal tabs and run these commands:


Start the angular host at http://localhost:4200/:

```
npm run start --workspace=angular-host
```


Start the react host at http://localhost:4201/:

```
npm run start --workspace=react-host
```

Start the react microfrontend, using SystemJS, whose entrypoint is at http://localhost:8080/remoteEntry.js:

```
npm run start --workspace=react-microfrontend
```
