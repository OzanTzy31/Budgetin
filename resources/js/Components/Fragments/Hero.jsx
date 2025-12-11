import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

const Hero = () => {
    return (
        <>
            <div className="flex flex-col gap-8 text-center mt-14 text-[var(--app-text)]">
                <h1 className="text-4xl font-extrabold">
                    <span className="bg-gradient-to-r from-[var(--app-primary)] to-[var(--income)] text-transparent bg-clip-text animate-fade-up">
                        MAKE YOUR MONEY VISIBLE
                    </span>
                </h1>
                <p
                    className="px-24 animate-fade-up"
                    style={{ animationDelay: "0.3s" }}
                >
                    Budgetin helps you track expenses, manage your budget, and
                    achieve your financial goals in a simple and fun way.
                </p>
                <p
                    className="mt-6 text-sm text-muted-foreground animate-fade-up"
                    style={{ animationDelay: "0.4s" }}
                >
                    ✓ Free Forever &nbsp; ✓ No Need Credit Card &nbsp; ✓ Quick
                    Setup
                </p>
            </div>
            <div
                className="flex flex-col items-center justify-center min-h-screen text-[var(--text)] animate-fade-up mt-40"
                style={{ animationDelay: "0.8" }}
                id="feature"
            >
                <div className="flex flex-col text-center gap-y-4">
                    <h1 className="text-xl font-bold text-[var(--app-primary)]">
                        Our Key Features
                    </h1>
                    <h2 className="text-3xl font-bold">
                        Everything You Need to Manage Your Finances
                    </h2>
                    <p>
                        Comprehensive features designed to help you achieve
                        financial freedom.
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 gap-10 p-20 text-center bg-transparent sm:grid-cols-2 animate-fade-up"
                    style={{ animationDelay: "0.8" }}
                >
                    <Card className="w-full max-w-sm bg-[var(--card)] hover:scale-110 hover:shadow-md hover:shadow-[var(--income)] duration-300">
                        <CardHeader>
                            <CardTitle className="text-[var(--app-primary)] font-extrabold">
                                TRACK MONEY
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Mollitia, asperiores.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="w-full max-w-sm bg-[var(--app-card)] hover:scale-110 hover:shadow-md hover:shadow-[var(--income)] duration-300">
                        <CardHeader>
                            <CardTitle className="text-[var(--app-primary)] font-extrabold">
                                MONTHLY SUMMARY
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Libero saepe soluta temporibus
                                quod rem architecto est incidunt aspernatur
                                quasi nam.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="w-full max-w-sm bg-[var(--app-card)] hover:scale-110 hover:shadow-md hover:shadow-[var(--income)] duration-300">
                        <CardHeader>
                            <CardTitle className="text-[var(--app-primary)] font-extrabold">
                                SAFE AND SECURE
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Libero saepe soluta temporibus
                                quod rem architecto est incidunt aspernatur
                                quasi nam.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="w-full max-w-sm bg-[var(--app-card)] hover:scale-110 hover:shadow-md hover:shadow-[var(--income)] duration-300">
                        <CardHeader>
                            <CardTitle className="text-[var(--app-primary)] font-extrabold">
                                EASY TO USE
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Libero saepe soluta temporibus
                                quod rem architecto est incidunt aspernatur
                                quasi nam.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Hero;
