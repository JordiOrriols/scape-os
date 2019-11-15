import doctorOne from "./doctor-one.jpg";
import doctorTwo from "./doctor-two.jpg";
import doctorThree from "./doctor-three.jpg";
import { App, appsWithSecurity, appsWithFiles, appsWithContacts } from "../apps/apps";

export interface User {
    name: string;
    image: string;
    password: string;
    apps: App[];
}

export const users: User[] = [
    { name: "Admin", image: doctorOne, password: "0000", apps: appsWithFiles },
    { name: "Vera Gedroitz", image: doctorOne, password: "12051968", apps: appsWithContacts },
    { name: "Max Eitingon", image: doctorTwo, password: "27061965", apps: appsWithFiles },
    { name: "Alexis Labhart", image: doctorThree, password: "11121959", apps: appsWithSecurity }
];
