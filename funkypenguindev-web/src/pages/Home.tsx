import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Home() {
    return (
        <>
            <div>
                <Container style={{ textAlign: "center" }}>
                    <h1 style={{ margin: "1.5em" }}>Niall's projects</h1>
                    <div>
                        <Row className="justify-content-md-center">
                            <Col lg="8">
                                <h5>
                                    This website is used to show off my
                                    projects. Feel free to browse and download
                                    anything you'd like, they're all free! You
                                    can also access the source code on some of
                                    them if you'd like to see what's behind the
                                    magic.
                                </h5>
                                <br />
                                <p>
                                    Note: mobile applications are currently only
                                    available on the Google Play Store. This is
                                    because it costs me $99/year to host apps on
                                    the Apple store, a cost which I can't
                                    justify for something that's just a hobby.
                                    If you are on an iOS device and would like
                                    any apps listed below, or for any other
                                    enquiries, please do not hesitate to contact
                                    me at
                                    <a href="mailto:nialldev9@gmail.com">
                                        nialldev9@gmail.com
                                    </a>
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}
