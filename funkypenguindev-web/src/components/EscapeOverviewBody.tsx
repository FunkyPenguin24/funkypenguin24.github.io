import { FaGooglePlay, FaApple } from "react-icons/fa";
import nysBanner from "/nysBanner.png";
import escapeIcon from "/escapeIcon.png";
import loginPageImg from "/screenshots/escape/loginpage.jpg";
import catchListImg from "/screenshots/escape/catchlist.jpg";
import newCatchImg from "/screenshots/escape/newcatch.jpg";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function EscapeOverviewBody() {
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <img
                    src={escapeIcon}
                    width="10%"
                    height="10%"
                    alt="Escape icon"
                ></img>
                <img
                    src={nysBanner}
                    width="20%"
                    height="20%"
                    alt="North Yorkshire Scouts banner"
                ></img>
            </div>
            <Container style={{ textAlign: "center" }}>
                <img 
                    src={loginPageImg}
                    style={{ marginRight: "2rem" }}
                    width="15%"
                    height="15%"
                    alt="NYS Events login page"
                ></img>
                <img 
                    src={newCatchImg}
                    style={{ marginRight: "2rem" }}
                    width="15%"
                    height="15%"
                    alt="NYS Events report list"
                ></img>
                <img 
                    src={catchListImg}
                    style={{ marginRight: "2rem" }}
                    width="15%"
                    height="15%"
                    alt="NYS Events new report page"
                ></img>
                <Row className="justify-content-md-center" style={{ marginTop: "1rem" }}>
                    <Col lg="8">
                        <div>
                            Escape is a catch and evade style wide-game across the North Yorkshire countryside.
                            Teams of between four and seven Explorers - 'Escapers' - are given 24 hours to navigate between set checkpoints.
                            Simultaneously, they are evading teams of Catchers, who comprise Network and adult Scouting Leaders.
                        </div>
                        <br />
                        <div>
                            When an Escaper team has been caught, they generate a QR code through the app that their Catchers scan which allows them to submit the details of their catch.
                            Manual catch entry is also available in case there is a problem with the QR code/the Escapers' phones.
                            Details that are submitted include the group's location and their conditions (Good, Okay, Needs watching, Dropped out)
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
            <Container style={{ textAlign: "center" }}>
                <a
                    href="https://play.google.com/store/apps/details?id=escape.york.escapeapp"
                    target="_blank"
                >
                <h1>
                    <FaGooglePlay />
                </h1>
                </a>
                <a
                    href="https://apps.apple.com/us/app/escape-york/id1589279406"
                    target="_blank"
                >
                <h1>
                    <FaApple />
                </h1>
                </a>
                <a href="/projects/policies#escape">
                    <h3>Privacy Policy</h3>
                </a>
            </Container>
        </div>
    );
}