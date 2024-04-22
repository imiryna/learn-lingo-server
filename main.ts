import { App } from "./src/infra/App";
import { firebase } from "./firebase";

console.log(firebase);

const app = new App();

app.init();
