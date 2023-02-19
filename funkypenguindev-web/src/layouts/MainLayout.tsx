interface LayoutProps {
    darkModeEnabled?: boolean;
    children: JSX.Element | JSX.Element[];
}

const MainLayout: React.FC<LayoutProps> = ({ darkModeEnabled, children }) => {
    const darkModeClass = darkModeEnabled ? "" : "light-mode";
    return (
        <>
            <div>
                <header>Nav to go here</header>
                <main>{children}</main>
            </div>
        </>
    );
};

export default MainLayout;
