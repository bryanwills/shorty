import { useForm } from "react-hook-form";

export default function Home() {

  const { register, handleSubmit } = useForm();

  const onFormSubmit = async (values) => {
    console.log(values);
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-indigo-700">
      <div className="max-w-2xl bg-white rounded-lg w-full">
        <div className="px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-bold text-4xl text-gray-900">Shorty - URL Shortener</h1>
        <h2 className="mt-4 text-l text-gray-900">URL Shortener built with NextJS, TypeScript, Prisma, MySQL and TailwindCSS</h2>
        <form onSubmit={handleSubmit(onFormSubmit)}>
        <input
          {...register("link")}
          type="text"
          className="bg-gray-200 w-full px-2 h-12 placeholder-gray-600 mt-8 focus:outline-none focus:ring-2 focus:ring-indigo-900 rounded-lg"
          placeholder="Enter URL to shorten" />
        <button type="submit" className="mt-6 px-4 text-xl py-2 bg-indigo-700 hover:bg-indigo-500 text-white rounded-lg w-full h-12">Shrink</button>
        </form>
        </div>
      </div>
    </div>
  )
}
