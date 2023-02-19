import { Accordion, Container } from "react-bootstrap";
import EleventsOverviewBody from "../components/ElevensOverviewBody";
import LatLongOverviewBody from "../components/LatLongOverviewBody";

function Overview() {
    return (
        <div style={{ marginTop: "2em" }}>
            <Container>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Lat/long to OS Grid</Accordion.Header>
                        <Accordion.Body>
                            <LatLongOverviewBody />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Elevens mobile app</Accordion.Header>
                        <Accordion.Body>
                            <EleventsOverviewBody />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
}

export default Overview;
