export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-500">
      <div className="max-w-2xl bg-white rounded-lg w-full">
        <div className="px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-bold text-4xl text-gray-900">URL Shortener</h1>
        <form>
        <input type="text" className="bg-gray-100 w-full px-2 h-12 placeholder-gray-600 mt-8 focus:outline-none focus:ring-2 focus:rong-indigo-900 rounded-lg"
        placeholder="Enter URL to shorten" />
        <button className="mt-8 px-4 text-xl py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg">Shrink</button>
        </form>
        </div>
      </div>
    </div>
  )
}
