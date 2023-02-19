import { Accordion, Container } from "react-bootstrap";
import Elevens from "../components/policies/elevens";
import Latlong from "../components/policies/latlong";
import Escape from "../components/policies/escape";
import CountyCamp from "../components/policies/countycamp";

import {useLocation} from 'react-router-dom';

export default function Policies() {
    const location = useLocation();
    const policyMap = setUpPolicyMap();
    
    let activeKey;
    if(location.hash.length > 0)
        activeKey = policyMap.get(location.hash);

    return (
        <div style={{ marginTop: "2em" }}>
            <Container>
                <Accordion defaultActiveKey={activeKey}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Lat/long to OS Grid Policy</Accordion.Header>
                        <Accordion.Body>
                            <Latlong />              
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Elevens mobile app Policy</Accordion.Header>
                        <Accordion.Body>
                            <Elevens />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Escape App Policy</Accordion.Header>
                        <Accordion.Body>
                            <Escape />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>NYS Events Policy</Accordion.Header>
                        <Accordion.Body>
                            <CountyCamp />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
}


const setUpPolicyMap = (): Map<string, string> => {
    let policyMap = new Map();
    policyMap.set('#latlong', "0");
    policyMap.set('#elevens', "1");
    policyMap.set('#escape', "2");
    policyMap.set('#nys-events', "3");

    return policyMap;
}