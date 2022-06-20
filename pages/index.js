//next
import Head from "next/head";

//components
import HomePage from "../components/home";

//other
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home(props) {
  return (
    <>
      <HomePage props={props} />
    </>
  );
}

export async function getStaticProps() {
  const [res1, res2, res3] = await Promise.all([
    fetch("http://localhost:4000/blog"),
    fetch("http://localhost:4000/blog/top-blogs"),
    fetch("http://localhost:4000/user/top-users"),
  ]);

  const [data1, data2, data3] = await Promise.all([
    res1.json(),
    res2.json(),
    res3.json(),
  ]);
  return {
    props: {data1, data2, data3}
  }
}
