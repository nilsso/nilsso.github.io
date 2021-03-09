import React, { useState, useEffect } from 'react';
import { Accordion, Button, Card, Container, InputGroup, FormControl, Table } from 'react-bootstrap';
import './App.scss';

/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */

class Gas {
    moles: number;
    formula: string;
    specificHeat: number;

    constructor(moles: number, formula: string, specificHeat: number) {
        this.moles = moles;
        this.formula = formula;
        this.specificHeat = specificHeat;
    }
}

function App() {
    const [ H2,  setH2] = useState( new Gas(0,  "H₂", 20.4) );
    const [ N2,  setN2] = useState( new Gas(0,  "N₂", 20.6) );
    const [ O2,  setO2] = useState( new Gas(0,  "O₂", 21.1) );
    const [  X,   setX] = useState( new Gas(0,   "X", 24.8) );
    const [CO2, setCO2] = useState( new Gas(0, "CO₂", 28.2) );
    const [H2O, setH2O] = useState( new Gas(0, "H₂O", 72.0) );
    const [N2O, setN2O] = useState( new Gas(0, "N₂O", 23.0) );

    const gases = [H2, N2, O2, X, CO2, H2O, N2O];

    return (
        <Container id='main'>
            <Card>
                <Card.Body>
                    <div id="joules">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Temperature</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            />
                        </InputGroup>
                        <div>Test</div>
                        {
                            gases.map(gas => {
                                return (
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Moles {gas.formula}</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                        />
                                    </InputGroup>
                                );
                            })
                        }
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default App;
