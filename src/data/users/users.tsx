import doctorOne from "./doctor-one.jpg";
import doctorTwo from "./doctor-two.jpg";
import doctorThree from "./doctor-three.jpg";

export interface User {
    name: string;
    image: string;
    password: string;
}

export const users: User[] = [
    { name: "Doctor Mike", image: doctorOne, password: "1234" },
    { name: "Evil Gerard", image: doctorTwo, password: "4321" },
    { name: "Pamplinas", image: doctorThree, password: "1221" }
];
