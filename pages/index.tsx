import { useState } from "react";

import AddLinkForm from "../components/AddLinkForm";

export default function Home() {
  const [linkId, setLinkId] = useState(null);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-indigo-700">
      <div className="max-w-xl bg-white rounded-lg w-full lg:w-128 md:w-100 sm:w-70">
        <div className="px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-bold lg:text-4xl text-gray-900 md:text-2xl sm:text-lg">Shorty - A URL Shortener</h1>
        <h2 className="mt-4 text-l text-gray-900 md:text-lg sm:text-sm">URL Shortener built with NextJS, TypeScript, Prisma, and TailwindCSS</h2>
        <h3 className="mt-4 text-xs text-gray-900">Enter in a link with the following format: https://www.example.com</h3>
        <AddLinkForm setLinkId={setLinkId} />
        {linkId && (
          <div className="w-full rounded-full items-center">
              <div className="bg-indigo-600 px-4 py-4 mt-4 text-center w-2/3 rounded-lg text-white sm:max-w-xl">
                <a href={`http://bryanwills.xyz:3000/${linkId}`}>{`http://bryanwills.xyz:3000/${linkId}`}</a>
              </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}