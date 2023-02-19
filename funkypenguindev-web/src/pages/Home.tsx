import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            Home
            <div>
                <Link to="about">About Us</Link>
            </div>
        </>
    );
}
