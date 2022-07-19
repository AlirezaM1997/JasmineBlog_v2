//components
import EditBlog from "../../../../../components/editBlog";

const EditBlogPage = (props) => {
  console.log(props);
  return (
    <>
      <EditBlog data={props} />
    </>
  );
};

export default EditBlogPage;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/blog");
  const posts = await res.json();
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
  const blog = await responseBlog.json();
  return {
    props: { blog },
  };
}
