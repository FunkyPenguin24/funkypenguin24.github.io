import Navigation from "../components/Navigation";
import Container from 'react-bootstrap/Container';

interface LayoutProps {
    darkModeEnabled?: boolean;
    children: JSX.Element | JSX.Element[];
}

const MainLayout: React.FC<LayoutProps> = ({ darkModeEnabled, children }) => {
    const darkModeClass = darkModeEnabled ? "" : "light-mode";
    return (
        <>
            <div>
                <header>
                    <Navigation darkmode={darkModeEnabled} />
                </header>
                <main>
                    {children}
                </main>
            </div>
        </>
    );
};

export default MainLayout;
