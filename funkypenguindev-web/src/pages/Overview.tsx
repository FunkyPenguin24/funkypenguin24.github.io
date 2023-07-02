import { Accordion, Container } from "react-bootstrap";
import EleventsOverviewBody from "../components/ElevensOverviewBody";
import LatLongOverviewBody from "../components/LatLongOverviewBody";
import NYSEventsOverviewBody from "../components/NYSEventsOverviewBody";
import EscapeOverviewBody from "../components/EscapeOverviewBody";

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
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>NYS Events</Accordion.Header>
                        <Accordion.Body>
                            <NYSEventsOverviewBody />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Escape</Accordion.Header>
                        <Accordion.Body>
                            <EscapeOverviewBody />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
}

export default Overview;
