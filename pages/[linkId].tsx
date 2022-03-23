import React from "react";

import prisma from "../client";

export const getServerSideProps = async ({ params }) => {
    try {
        const url = await prisma.link.findUnique({
            where: {
                linkId: params.linkId,
            },
        });
        // if there is a valid URL in the database, redirect to that site.
        if(url) {
            return {
                redirect: {
                    destination: url.url,
                },
            };
        }
        //if there is no valid URL, redirect to the homepage to shrink a URL
        if(!url) {
            return {
                redirect: {
                    destination: "http://bryanwills.xyz:3000",
                },
            };
        }
    }   catch (err) {
            console.log(err);
            return {
                redirect: {
                    destination: "http://bryanwills.xyz:3000",
            },
        };
    }
};

const Link = () => {
  return (
    <div>
        <h1>Hello</h1>
    </div>
  );
};

export default Link;