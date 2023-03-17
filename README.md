# Dielcom
Web app for electronic components distributor

## About the project
This project uses Next.JS for server-side rendering. It runs by Express server.
Documentation can be found at https://nextjs.org/docs/getting-started.

## Development

### How to run the project locally
1. Clone the repository:

```
git clone https://github.com/krastbiz/dielcom
```

2. run `cd dielcom`

3. run `npm ci` (or if there is no package-lock.json file, run `npm i`)

4. run `npm run dev`

### How to run the project in production mode
1. run `npm run build`
2. run `npm run start`

## Deployment

### How to deploy the project
1. copy all the content to the root, omitting `.next` and `.node_modules` folders
2. run `npm ci`
3. run `npm run build`
4. run `npm run start`

## Requirements
In order to run this project, you need node.js 16.17.1 or higher version 