const MainLayout = (props) => {
    const { children } = props;

    return <div className="flex flex-col min-h-screen pt-36">{children}</div>;
};

export default MainLayout;
