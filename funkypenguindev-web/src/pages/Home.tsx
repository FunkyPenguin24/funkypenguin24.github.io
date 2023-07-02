import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Home() {
    return (
        <>
            <div>
                <Container style={{ textAlign: "center" }}>
                    <h1 style={{ margin: "1.5em" }}>Niall's portfolio</h1>
                    <div>
                        <Row className="justify-content-md-center">
                            <Col lg="8">
                                <h5>
                                    This website is used to show off <a href="/projects/overview">my projects</a>.
                                    I have developed these apps in my spare time in an effort to expand my knowledge of different programming languages and frameworks outside of my job.
                                    Some of the applications I have developer on behalf of the North Yorkshire Scouting Association and are for use of their county events.
                                    Please browse and download anything you'd like, they're all free! Any reviews or bits of feedback are greatly appreciated.
                                    You can also access the source code on some of them if you'd like to see what's behind the magic.
                                    If you have any queries, please do not hesitate to contact me at <a href="mailto:nialldev9@gmail.com">nialldev9@gmail.com</a>
                                </h5>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}
