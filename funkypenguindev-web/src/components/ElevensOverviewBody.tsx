import elevens from "/elevens.png";
import elevensIcon from "/elevensIcon.png";
import elevensQR from "/elevensQR.png";

import { IoLogoGithub } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function EleventsOverviewBody() {
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <img
                    src={elevensIcon}
                    width="10%"
                    height="10%"
                    alt="Elevens icon"
                ></img>
                <img
                    src={elevens}
                    width="20%"
                    height="20%"
                    alt="Elevens banner text"
                ></img>
            </div>
            <Container style={{ textAlign: "center" }}>
                <Row className="justify-content-md-center">
                    <Col lg="8">
                        <p>
                            Elevens is a fun single-player card game that
                            involves choosing two non face cards that add up to
                            eleven, or a Jack, a Queen and a King.
                        </p>
                        <p>
                            The aim of the game is to get rid of all the cards
                            in the deck. You start with two cards face up and
                            seven face down. From then, you can tap the deal
                            button or a face down card to deal a new card. You
                            may have a maximum of nine cards face up at once.
                        </p>
                        <p>
                            Tap cards to select them and try to make pairs from
                            non-face cards that add up to eleven, with Aces
                            counting as ones. Examples include 7/4, 6/5, 8/3.
                        </p>
                        <p>
                            Face cards are unique as they can't be paired with
                            non-face cards, but can be selected as a group of
                            three unique face cards (a Jack, Queen and King).
                        </p>
                        <p>
                            When you select a successful pair or trilogy of
                            cards, they will be replaced with cards from the
                            deck. Try to empty the deck but don't run out of
                            options, if there are no more moves to make then you
                            lose the game.
                        </p>
                        <p>And be quick, the timer is running!</p>
                    </Col>
                </Row>
            </Container>
            <br />
            <Container style={{ textAlign: "center" }}>
                <p>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.elpackage.elevens"
                        target="_blank"
                    >
                        <h1>
                            <FaGooglePlay />
                        </h1>
                    </a>
                </p>
                <p>
                    <a
                        href="https://github.com/FunkyPenguin24/elevensapp"
                        target="_blank"
                    >
                        <h1>
                            <IoLogoGithub />
                        </h1>
                    </a>
                </p>
                <p>
                    <a href="/projects/policies#elevens"><h3>Privacy Policy</h3></a>
                </p>
            </Container>
            <div style={{ textAlign: "center" }}>
                <img src={elevensQR} width="10%" height="10%"></img>
            </div>
        </div>
    );
}
