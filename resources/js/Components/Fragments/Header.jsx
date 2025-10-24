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

const Header = () => {
    const { auth } = usePage().props;
    const user = auth?.user;

    const handleLogout = (e) => {
        e?.preventDefault?.();
        router.post("/logout");
    };

    if (!user) {
        return (
            <nav className="flex flex-row justify-between w-full p-4 text-[var(--app-text)] bg-[var(--app-bg-surface)] fixed top-0 border border-b-black">
                <div>
                    <Link href="#" className="text-2xl font-bold text-black">
                        BUDGETIN
                    </Link>
                </div>
                <div className="flex gap-x-3">
                    <Button asChild size="sm" variant="secondary">
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild size="sm" variant="secondary">
                        <Link href="/register">Register</Link>
                    </Button>
                </div>
            </nav>
        );
    }

    return (
        <nav className="flex flex-row justify-between w-full p-4 text-[var(--text)] bg-[var(--app-bg-surface)] fixed top-0 border border-transparent border-b-black">
            <div>
                <Link href="#" className="text-2xl font-bold text-black">
                    BUDGETIN
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

export default Header;
