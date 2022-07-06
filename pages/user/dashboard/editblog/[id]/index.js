//components
import EditBlog from "../../../../../components/editBlog";

//other
import dashboardAuth from "../../../../../feature/dashboardAuth";

const EditBlogPage = (props) => {
  console.log(props);
  return (
    <>
      <EditBlog dataFromStaticProps={props} />
    </>
  );
};

export default dashboardAuth(EditBlogPage);

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:4000/blog");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));
  console.log("paths", paths);
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const responseBlog = await fetch(
    `http://localhost:4000/blog/single-blog/${params.id}`
  );
  console.log(params.id);
  const blog = await responseBlog.json();

  return {
    props: { blog },
  };
}
