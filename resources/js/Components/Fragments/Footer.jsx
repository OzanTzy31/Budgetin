import { Link } from "@inertiajs/react";
import { Button } from "../ui/button";

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
                        <a href="#">Pricing</a>
                        <a href="#feature">Feature</a>
                    </div>
                </div>
            </div>
            <div className="flex px-4 pt-8 border-t border-slate-500">
                <div className="w-1/2">
                    <p>© 2025 Budgetin.</p>
                </div>
                <div className="flex w-1/2 gap-x-6">
                    <a href="">Kebijakan Privasi</a>
                    <a href="">Syarat & Ketentuan</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
