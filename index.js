import { argv } from "node:process";
import { addPatient, readAppointment } from "./operation.js";


const [operation, name, age, type, color, illness]= argv.slice(2);

/* To add a new patient to the appointments you must write: 
   node index.js add "name" "age" "type" "color" "illnes"   */

if(operation === "add"){
    addPatient(name, age, type, color, illness);
}
/*To read the list of appointments you must write: 
  node index.js read    */

if(operation === "read"){
    readAppointment()
}


/*Try adding these two patients:
  node index.js add Benito "1año" perro negro otitis
  node index.js add Juelita "6 años" gato mostaza moquillo*/

 /*now read the list with the following command:
   node index.js read */