import { Link } from "@inertiajs/react";

const AuthLayout = (props) => {
    const { children, title, type } = props;
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-xs">
                <h1 className="text-2xl font-bold text-blue-800">{title}</h1>
                <p>Welcome, please enter your details</p>
                {children}
                <AuthSwitch type={type} />
            </div>
        </div>
    );
};

const AuthSwitch = ({ type }) => {
    if (type === "login") {
        return (
            <p>
                Don't have an account?{" "}
                <Link href="/register" className="font-bold text-blue-800">
                    Sign up
                </Link>
            </p>
        );
    } else {
        return (
            <p>
                Already have an account?{" "}
                <Link href="/login" className="font-bold text-blue-800">
                    Sign in
                </Link>
            </p>
        );
    }
};

export default AuthLayout;
