import React, { useState } from "react";

//next
import { useRouter } from "next/router";

//components
import Blog from "../../../components/blog";

export default function BlogPage(props) {
  console.log(props);
  return (
    <>
      <Blog dataFromStaticProps={props} />
    </>
  );
}

export async function getStaticPaths() {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:4000/blog");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));
  console.log('paths',paths)

  return { paths, fallback: false };
}

// const router = useRouter();
// const { id } = router.query;

export async function getStaticProps({ params }) {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

//   const [blogInfo, setBlogInfo] = useState();

  const responseBlog = await fetch(
    `http://localhost:4000/blog/single-blog/${params.id}`
  );
  console.log(params.id)
  const thisBlog = await responseBlog.json();
  const blogInfo = thisBlog


  const [res1, res2] = await Promise.all([
    fetch(`http://localhost:4000/comment/by-blog/${thisBlog._id}`),
    fetch(`http://localhost:4000/blog/by-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: thisBlog.creatorId,
      }),
    }),
  ]);

  const [comments, userAllBlog] = await Promise.all([res1.json(), res2.json()]);

  return {
    props: {  blogInfo, comments, userAllBlog },
  };
}
