import nysBanner from "/nysBanner.png";
import nysEventsIcon from "/nysEventsIcon.png";
import loginPageImg from "/screenshots/nysevents/loginpage.jpg";
import reportListImg from "/screenshots/nysevents/reportlist.jpg";
import newReportImg from "/screenshots/nysevents/newreport.jpg";
import campInfoImg from "/screenshots/nysevents/campinfo.jpg";

import { FaGooglePlay, FaApple } from "react-icons/fa";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function NYSEventsOverviewBody() {
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <img
                    src={nysEventsIcon}
                    width="10%"
                    height="10%"
                    alt="NYS Events icon"
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
                    src={reportListImg}
                    style={{ marginRight: "2rem" }}
                    width="15%"
                    height="15%"
                    alt="NYS Events report list"
                ></img>
                <img 
                    src={newReportImg}
                    style={{ marginRight: "2rem" }}
                    width="15%"
                    height="15%"
                    alt="NYS Events new report page"
                ></img>
                <img 
                    src={campInfoImg}
                    width="15%"
                    height="15%"
                    alt="NYS Events camp info page"
                ></img>
                <Row className="justify-content-md-center" style={{ marginTop: "1rem" }}>
                    <Col lg="8">
                        <div>
                            The NYS Events app is part of an event management system used during North Yorkshire Scouts County events.
                            This app allows Scout leaders on events, such as county camps, to access camp information easily.
                            This includes details like catering timetables, risk assessments, site maps and more.
                            It also allows the event team to send out notifications to leaders which helps spread important information quickly.
                        </div>
                        <br />
                        <div>
                            The app also allows leaders to report any incidents straight to event staff.
                            This means staff are able to quickly triage reports that come in to do with first aid, safeguarding, etc and allocate them to the relevant team to deal with.
                        </div>
                        <br />
                        <div>
                            One aspect of the app that I am particularly proud of is lost property. As lost property is handed in, a member of staff can take a picture and add it to the system.
                            This means any leader will be able to see lost property that has not got a name on, and any lost property that does have a name on and belongs to a member of their group.
                        </div>
                        <br />
                        <div>
                            When a piece of lost property is added to the system and its owner has been identified, the leader of that scout's group will get a notification informing them that the lost property has been handed in.
                            This is especially handy as it results in less lost property clogging up the welcome desk on event.
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
            <Container style={{ textAlign: "center" }}>
                <a
                    href="https://play.google.com/store/apps/details?id=com.nys.nys_incidents"
                    target="_blank"
                >
                <h1>
                    <FaGooglePlay />
                </h1>
                </a>
                <a
                    href="https://apps.apple.com/us/app/nys-events/id1624918272"
                    target="_blank"
                >
                <h1>
                    <FaApple />
                </h1>
                </a>
                <a href="/projects/policies#nys-events">
                    <h3>Privacy Policy</h3>
                </a>
            </Container>
        </div>
    );
}