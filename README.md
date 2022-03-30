## Shorty - A URL shortener.

### This is a Next.js project bootstrapped with `create-next-app`.


### Tech Stack Used
NextJS<br/>
TypeScript<br/>
Prettier<br/>
TailwindCSS<br/>
PostCSS<br/>
Autoprefixer<br/>

## Code Louisville Project for Front End Web Development Session 2 (JavaScript)

### This is a URL shortener project created using TypeScript, NextJS, and TailwindCSS. In this project, I ask the user to input a valid long URL that they want to shorten. The user inputs a URL of their choice, then I have a regex expression that runs validation against the URL inputted, then I use a generateId function to create a unique linkId for the user. My app will check to see if the shortened URL already exists and if it does exist, the app will return the linkId already used. If not, it will generate a new one and it will store this information in the Prisma database that I am using to store the generated linkId IDs which consists of 8 characters from the generateId function. I use a dyanmic route with [linkId].tsx to reroute the user from the shortened URL to the long URL they wanted to shorten. <br/><br/>
### I tried to deploy to Vercel with some assistance from Issac during class the second to last session and while I was able to build/deploy it, the URL shortening feature did not work. I then attempted to build/deploy to my personal VPS and I ran into the same issue. <br/><br/>To ensure complete funcationality, I am going to run a TMUX session and run an `npm run dev` and leave it up for the next few weeks. I am running into issues running `next export` because I am using `getServerSideProps` in the [linkId.tsx] file and have not found a fix yet.

### Update: 3-30-2022 running `npm run build && npm run export` fails and the error states that  `next export` disables API routes which will break the funcationality of my site/app. I am going to leave `npm run dev` in a tmux session on my VPS for grading purposes.

### This project also works by cloning the repo and running `npm run dev` and it will run locally.

## To run this project locally on your computer follow the steps below in a terminal window.

```
git clone https://github.com/bryanwills/shorty
cd shorty
npm install
npm run dev
```

### Then navigate to [http://localhost:3000](http://localhost:3000) using your browser.

## Additional information.
### Running `npx prisma studio` will start a session on http://localhost:5555 will show all the database entries from the generation of a linkId. This can also be accessed on bryanwills.xyz:5555 .

### Features that this project meets for the final project requirements.

* Retrieve data from an API and display this data in your app. This was completed by taking a valid URL and creating a linkId to shorten the URL and display a new URL that is shortened and has the linkId for the user to click on.
* Implement a regex function  to validate a URL is in the correct format.
* Create a form and save the values. I take a valid URL and shorten it using a database and display the shortened URL back for the user to click on which redirects them to the site they shortened.
* Develop your project using a common JavaScript framework. I used NextJS and TypeScript to create this project which does use React. I also used TailwindCSS to style the pages!
* Create a web server with at least one route. I have built a dynamic route using [linkId].js will show the same information for any URL that is shortened. Used axios package to complete this.

### Side note: I did ask second to last class if my project met all the requirements from Isaac, Alan and even Don chimed in and said it passed :smiley: