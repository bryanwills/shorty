import { useForm } from "react-hook-form";
import axios, { AxiosRequestConfig } from "axios";

type Link = {
  link: string;
}

const AddLinkForm = ({ setLinkId }) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Link>();

  const onFormSubmit = async (values: Link) => { //used example from react-hook-form package website
    // console.log(values);
    // setup API to allow data to be sent through
    const config: AxiosRequestConfig = {
      url: "/api/addLink",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
      method: "post",
    };

    const res = await axios(config);
    if(res.status === 200) {
      setLinkId(res.data.link);
    }
    //console.log(res); //log the response
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
        <input
        // Do not allow empty input, output a message to the user
          {...register("link", {
            required: {
              value: true,
              message: "You must provide a URL",
            }
          })}
          type="text"
          className="bg-gray-200 w-full px-2 h-12 placeholder-gray-600 mt-6 focus:outline-none focus:ring-2 focus:ring-indigo-900 rounded-lg"
          placeholder="Enter URL to shorten" />
          <div>
            {errors?.link?.message}
          </div>
        <button
        type="submit"
        className="mt-6 px-4 text-xl py-2 bg-indigo-700 hover:bg-indigo-500 text-white rounded-lg w-full h-12">
          Shrink
          </button>
        </form>
  );
};

export default AddLinkForm;