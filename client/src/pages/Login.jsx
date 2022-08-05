import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

// components
import { Page } from '../App';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Page>
      <Helmet>
        <title>Rainmap | {t("login.login")}</title>
      </Helmet>
      <section className="grid grid-rows-1 grid-cols-7 grid-flow-row-dense gap-6 px-8 w-full mb-6">
        <Image />
        <Form 
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          register={register}
        />
      </section>
    </Page>
  )
}


const Image = () => (
  <div className="row-span-1 col-start-2 col-end-4 p-5 text-white h-[26rem] bg-[url('https://live.staticflickr.com/6205/6135740904_988084a60a_b.jpg')] bg-bottom bg-cover bg-no-repeat rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"/>
)

const Form = ({onSubmit, handleSubmit, register}) => (
  <form onSubmit={handleSubmit(onSubmit)} className="row-span-1 col-span-3 flex flex-col gap-4">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      {t("login.email")}
    </label>
    <input {
      ...register('email', 
      { required: true })
      }
      type="email"
      id="email"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    />
    <label 
      for="password" 
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {t("login.password")}
    </label>
    <input {
      ...register('password', 
      { required: true })
      }
      type="password"
      id="password"
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    />
    <section className="flex flex-row justify-between">
      <Link
        to="/register"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {t("login.create")}
      </Link>
      <button 
        type="submit" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {t("login.sign-in")}
      </button>
    </section>
  </form>
)