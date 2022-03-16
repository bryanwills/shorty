import AddLinkForm from "../components/AddLinkForm";
import { useState } from "react";

export default function Home() {
  const [linkId, setLinkId] = useState(null);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-indigo-700">
      <div className="max-w-2xl bg-white rounded-lg w-full">
        <div className="px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-bold text-4xl text-gray-900">Shorty - A URL Shortener</h1>
        <h2 className="mt-4 text-l text-gray-900">URL Shortener built with NextJS, TypeScript, Prisma, MySQL and TailwindCSS</h2>
        <h3 className="mt-4 text-xs text-gray-900">Enter in a link with the following format: https://www.example.com</h3>
        <AddLinkForm setLinkId={setLinkId} />
        {linkId && (
          <div className="w-full rounded-full items-center">
              <div className="bg-indigo-600 px-4 py-4 mt-4 text-center w-1/2 rounded-lg text-white">
                <a href={`http://bryanwills.xyz:3000/${linkId}`}>{`http://bryanwills.xyz:3000/${linkId}`}</a>
              </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}