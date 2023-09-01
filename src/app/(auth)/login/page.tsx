import LoginForm from "@/forms/LoginForm"


async function Login() {

  return (
    <section className="grid place-content-center bg-black h-screen w-screen font-poppins">
      <LoginForm />
    </section>
  )
}

export default Login