import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

const Hero = () => {
    return (
        <>
            <div className="flex flex-col px-10 mt-16 text-center text-[var(--app-text)] gap-y-5">
                <h1 className="text-3xl font-bold ">MAKE YOUR MONEY VISIBLE</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat ratione est deserunt eaque provident, velit odit
                    omnis sint at cumque veniam ipsa nostrum ea, deleniti eius
                    distinctio natus rem voluptates.
                </p>
            </div>
            <div className="flex items-center justify-center min-h-screen text-[var(--text)]">
                <div className="grid grid-cols-1 gap-4 p-4 bg-transparent sm:grid-cols-2">
                    <Card className="w-full max-w-sm bg-[var(--card)]">
                        <CardHeader>
                            <CardTitle>TRACK MONEY</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Mollitia, asperiores.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="w-full max-w-sm bg-[var(--app-card)]">
                        <CardHeader>
                            <CardTitle>MONTHLY SUMMARY</CardTitle>
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
                    <Card className="w-full max-w-sm bg-[var(--app-card)]">
                        <CardHeader>
                            <CardTitle>SAFE AND SECURE</CardTitle>
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
                    <Card className="w-full max-w-sm bg-[var(--app-card)]">
                        <CardHeader>
                            <CardTitle>EASY TO USE</CardTitle>
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
