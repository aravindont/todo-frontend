// const projectId = import.meta.env.VITE_APP_WRITE_PROJECT_ID;

import { Client, Account } from "appwrite";
const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("63fce42d0c7cb9ac29a2");

export const account = new Account(client);
