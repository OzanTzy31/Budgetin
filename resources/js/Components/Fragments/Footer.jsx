import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="bg-[#12211c] text-white py-10">
            <div className="container">
                <div className="flex flex-row pb-4">
                    <div className="flex flex-col w-1/2 px-4 gap-y-4">
                        <Link href="#" className="text-2xl font-bold">
                            Budget{" "}
                            <span className="text-[var(--app-primary)]">
                                In
                            </span>
                        </Link>
                        <p>
                            A personal finance management app that helps you
                            achieve financial freedom in a simple and fun way.
                        </p>
                    </div>
                    <div className="flex flex-col w-1/2 px-4 gap-y-4">
                        <h1>kocak</h1>
                    </div>
                </div>
            </div>
            <div className="pt-8 border-t border-slate-500">test</div>
        </footer>
    );
};

export default Footer;
