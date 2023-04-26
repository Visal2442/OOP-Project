import { Address } from "./Address";
import { Gate } from "./Gate";

export class Airport {
    private gates: Gate[] = [];  
    constructor(private name: string, 
                private letterCode: string, 
                private address: Address){}

    addGate(gate: Gate) {
        this.gates.push(gate);
    }
}

// let add = new Address('371', 'Phnom Penh', 'Cambodia')
// let airport = new Airport("Ronan", "RON", add);

// let gate1 = new Gate('A1')
// let gate2 = new Gate('A2')
// let gate3 = new Gate('A3')
// let gate4 = new Gate('A4')
// let gate5 = new Gate('A5')

// airport.addGate(gate1);
// airport.addGate(gate2);
// airport.addGate(gate3);
// airport.addGate(gate4);
// airport.addGate(gate5);

// console.log(airport);
