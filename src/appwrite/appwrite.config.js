// const projectId = import.meta.env.VITE_APP_WRITE_PROJECT_ID;

import { Client, Account } from "appwrite";
const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("6405c240f1c106cbc602");

export const account = new Account(client);
