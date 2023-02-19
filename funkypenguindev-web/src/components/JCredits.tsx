import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const JCredits = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="6">
                        <div style={{ marginTop: "2em" }}>
                            <p>
                                This website was scaffolded together by
                                @youugotssponged Jordan McCann and special
                                thanks to him for providing the free, open
                                source and easy to use QR code generator which
                                can be found{" "}
                                <a
                                    href="https://github.com/youugotssponged/SpongeQR"
                                    target="_blank"
                                >
                                    here
                                </a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default JCredits;
