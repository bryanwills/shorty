// import { exists } from "fs";
// import { idText } from "typescript";
import prisma from "../../client";

export default async (req, res) => {

    const {link} = req.body;
    // console.log(url); // Displays the URL that the user inputs from the input field on the app.
    // console.log(req.body); //log the request to the console
    // res.status(200).json(req.body) // server response is 200 (Good)
    // Opened Dev Tools and entered a URL, received the status 200, Object { link: "google.com" } and statusText of "OK" in JSON format which verifies that the API is sending back a valid response from the URL: http://bryanwills.xyz:3000/api/addLink verifying the route is working. Also verified with Postman API software and { link: 'google.com' } appeared in the terminal window where npm run dev is running

    // check for existingLink
    const existingLink = await prisma.link.findUnique({
        where: {
            url: link,
        }
    })
    console.log(existingLink);

    // make a const generateId (how long(length), how many characters sent back)


    const generateId = (n,l) => {
        return Math.random().toString(n).substring(2,l)
    }

    if(existingLink) {
        return res.status(200).json({ link: existingLink.linkId });
        // if the linkid exists, display the linkid on the page
    }
    // if not, then create a linkId
    //total shortened URLs from db
    //checker reads db,
    const id = generateId(36,8)
    //const id = Math.random().toString(36).substring(2,8);
    try {
        await prisma.link.create({
            data: {
                url: link,
                linkId: id, //generate link ID
                //tested with dev tools, received  2 responses in console. { link: 'google.com' } and { id: 1, url: 'google.com', linkID 'ujo9ptr4'}. linkId works!!
            },
        });
        // console.log(addLink);
    } catch (err) {
        console.log(err) //log error if there is one
        return res.status(500) //send a 500 response to the console if there is an error
    }
    //res.status(200).json("Link ID works!");
    res.status(200).json({ link: id }); //send linkId to console
};