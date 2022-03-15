import prisma from "../../client";

export default (req, res) => {

    const {url} = req.body;
    console.log(url); // Displays the URL that the user inputs from the input field on the app.

}