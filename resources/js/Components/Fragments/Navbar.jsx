import { usePage, router, Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
    const { auth } = usePage().props;
    const user = auth?.user;

    const handleLogout = (e) => {
        e.preventDefault();
        router.post("/logout");
    };

    if (!user) {
        return (
            <nav className="fixed top-0 flex flex-row justify-between w-full p-4 bg-transparent border backdrop-blur-md">
                <div>
                    <Link href="#" className="text-2xl font-bold text-black">
                        Budget{" "}
                        <span className="text-[var(--app-primary)]">In</span>
                    </Link>
                </div>
                <div className="flex gap-x-3">
                    <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-transparent hover:scale-95"
                    >
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button
                        asChild
                        size="sm"
                        variant="default"
                        className="bg-[var(--app-primary)] text-white hover:bg-[var(--app-primary)] hover:scale-95"
                    >
                        <Link href="/register">Register</Link>
                    </Button>
                </div>
            </nav>
        );
    }

    return (
        <nav className="fixed top-0 z-50 flex flex-row justify-between w-full p-4 border bg-white/50 backdrop-blur-md">
            <div>
                <Link href="#" className="text-2xl font-bold text-black">
                    Budget <span className="text-[var(--app-primary)]">In</span>
                </Link>
            </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger className="px-3 py-1 rounded bg-white/10 hover:bg-white/20">
                        {user.name}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="text-red-600"
                            onSelect={handleLogout}
                        >
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};

export default Navbar;
