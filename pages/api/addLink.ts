import prisma from "../../client";

export default async (req, res) => {

    const {link} = req.body;
    // console.log(url); // Displays the URL that the user inputs from the input field on the app.
    console.log(req.body); //log the request to the console
    res.status(200).json(req.body) // server response is 200 (Good)
    // Opened Dev Tools and entered a URL, received the status 200, Object { link: "google.com" } and statusText of "OK" in JSON format which verifies that the API is sending back a valid response from the URL: http://bryanwills.xyz:3000/api/addLink verifying the route is working. Also verified with Postman API software and { link: 'google.com' } appeared in the terminal window where npm run dev is running

    try {
        const addLink = await prisma.link.create({
            data: {
                url: link,
                linkId: Math.random().toString(36).substr(2,8) //generate link ID

            },
        });
        console.log(addLink);
    } catch (err) {
        console.log(err) //log error if there is one
        return res.status(500) //send a 500 response to the console if there is an error
    }

    res.status(200).json("Link ID works!");
    res.status(200).json(link);
};