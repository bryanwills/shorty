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

### This is a URL shortener project created using TypeScript, NextJS, and TailwindCSS. I wanted to be able to deploy this app without using a port number, but was unable to get this done in time. <br/><br/> I tried to deploy to Vercel with some assistance from Issac during class the second to last session and while I was able to build/deploy it, the URL shortening feature did not work. I then attempted to build/deploy to my personal VPS and I ran into the same issue. <br/><br/>To ensure complete funcationality, I am going to run a TMUX session and run an `npm run dev` and leave it up for the next few weeks. I am running into issues running `next export` because I am using `getServerSideProps` in the [linkId.tsx] file and have not found a fix yet.

### Update: 3-30-2022 running `npm run build && npm run export` fails and the error states that  `next export` disables API routes which will break the funcationality of my site/app. I am going to leave `npm run dev` in a tmux session on my VPS for grading purposes.

### This project also works by cloning the repo and running `npm run dev` and it will run locally.

## To run this project locally on your computer follow the steps below in a terminal window.

```
git clone https://github.com/bryanwills/shorty
cd shorty
npm install
npm run dev
```

## Additional information.
### Running `npx prisma studio` will start a session on http://localhost:5555 will show all the database entries from the generation of a linkId.
### You can also access this from bryanwills.xyz:5555 as well.

Open [http://localhost:3000](http://localhost:3000) using your browser.

### I will continue to attempt to complete the build/deploy process so that everything is functional without the port number and will push another commit once that has been completed.
