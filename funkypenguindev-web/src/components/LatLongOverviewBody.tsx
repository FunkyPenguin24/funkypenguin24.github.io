import coord from "/coord.png";
import coordIcon from "/coordIcon.png";
import coordQR from "/coordQR.png";

import { IoLogoGithub } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function LatLongOverviewBody() {
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <img
                    src={coordIcon}
                    width="10%"
                    height="10%"
                    alt="Lat Long to OS Grid icon"
                ></img>
                <img
                    src={coord}
                    width="20%"
                    height="20%"
                    alt="Lat Long to OS Grid banner text"
                ></img>
            </div>
            <Container style={{ textAlign: "center" }}>
                <Row className="justify-content-md-center">
                    <Col lg="8">
                        <div>
                            This app takes a given Latitude and Longitude
                            coordinate, in either degree or decimal format, and
                            converts it into an Ordnance Survey grid reference,
                            in either numerical or letter format.
                        </div>
                        <br />
                        <div>
                            The app also translates backwards, meaning it can
                            convert an OS grid reference to a Latitude and
                            Longitude.
                        </div>
                        <br />
                        <div>
                            If you have your location enabled, the app can get
                            your smartphone's current Latitude and Longitude
                            coordinate and tell you where in the Ordnance Survey
                            grid you are!
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
            <Container style={{ textAlign: "center" }}>
                <a
                    href="https://play.google.com/store/apps/details?id=com.latlonpackage.coord_translator"
                    target="_blank"
                >
                    <h1>
                        <FaGooglePlay />
                    </h1>
                </a>

                <a
                    href="https://github.com/FunkyPenguin24/CoordinateTranslator"
                    target="_blank"
                >
                    <h1>
                        <IoLogoGithub />
                    </h1>
                </a>
                <a href="/projects/policies#latlong">
                    <h3>Privacy Policy</h3>
                </a>
            </Container>
            <div style={{ textAlign: "center" }}>
                <img src={coordQR} width="10%" height="10%"></img>
            </div>
        </div>
    );
}
