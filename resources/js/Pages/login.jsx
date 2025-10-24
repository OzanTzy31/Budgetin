import AuthLayout from "../components/Layouts/Authlayout";
import LoginForm from "../Components/Fragments/LoginForm";

const LoginPage = () => {
    return (
        <div>
            <AuthLayout title="Login" type="login">
                <LoginForm />
            </AuthLayout>
        </div>
    );
};

export default LoginPage;
