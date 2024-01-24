import { Link } from "react-router-dom";
import InputField from "../../Components/inputField";
const Login = ( ) => {
const handleSubmit = (e) => {
    e.preventDefault()

   const form = new FormData(e.target)
  const user = Object.fromEntries(form.entries())

  console.log(user)
}

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div  className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                Flow    
            </div>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Hesabınıza Giriş Yapın
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <InputField
                label={"İsim"}
                holder={"Örn: Ahmet"}
                name={"name"}
                type={"text"}
              />

              <InputField
                label={"Şifre"}
                holder={"••••••••"}
                name={"password"}
                type={"password"}
              />
                        <button type="submit" className="bg-blue-500 w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800">Giriş Yap</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Hesabınız Yokmu?{' '}
                       <Link href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Kaydol</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>



    )
}

export default Login;