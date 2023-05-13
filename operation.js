import { nanoid } from "nanoid";
import { writeFile, readFile } from "node:fs/promises";


/*Function to add patients */

export const addPatient = async (name, age, type, color, illness) => {
    try {
        const appointments = JSON.parse(await readFile("appointments.json"));
        const patient = {
            id: nanoid(),
            name: name,
            age: age,
            type: type,
            color: color, 
            illness: illness,
        };
        appointments.push(patient)
        await writeFile("appointments.json", JSON.stringify(appointments));
        console.log("The patient was added successfully")
    } catch (error) {
        console.log(error);
    }
};

/* Function to read the list of appointments*/ 

export const readAppointment = async () => {
    try {
        const appointments = JSON.parse(await readFile("appointments.json"));
        console.log(appointments);
    } catch (error){
        console.log(error);
    }
};