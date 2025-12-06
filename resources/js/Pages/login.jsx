import AuthLayout from "../Components/Layouts/AuthLayout";
import LoginForm from "../Components/Fragments/LoginForm";

const LoginPage = () => {
    return (
        <div>
            <AuthLayout title="Sign In" type="login">
                <LoginForm />
            </AuthLayout>
        </div>
    );
};

export default LoginPage;
