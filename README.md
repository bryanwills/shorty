### This is a Next.js project bootstrapped with `create-next-app`.


### Tech Stack Used
NextJS<br/>
TypeScript<br/>
Prettier<br/>
TailwindCSS<br/>
PostCSS<br/>
Autoprefixer<br/>

## Code Louisville Project for Front End Web Development Session 2 (JavaScript)

### This is a URL shortener project created using TypeScript, NextJS, and TailwindCSS. I wanted to be able to deploy this app without using a port number, but was unable to get this done in time. The project does work completely! I tried to deploy to Vercel with some assistance from Issac during class the second to last session and while I was able to build/deploy it, the URL shortening feature did not work. I then attempted to build/deploy to my personal VPS and I ran into the same issue. To ensure complete funcationality, I am going to run a TMUX session and run an `npm run dev` and leave it up for the next few weeks. I am running into issues running `next export` because I am using `getServerSideProps` in the [linkId.tsx] file and have not found a fix yet.

### This project also works by cloning the repo and running `npm run dev` and it will run locally.

## To run this project locally on your computer follow the steps below.

```
git clone https://github.com/bryanwills/shorty
cd shorty
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) using your browser.

### I will continue to attempt to complete the build/deploy process so that everything is functional without the port number and will push another commit once that has been completed.
