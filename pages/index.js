//components
import Home from "../components/home";
//other
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function HomePage(props) {
  return (
    <>
      <Home props={props} />
    </>
  );
}

export async function getStaticProps() {
  const endpoints = [
    "http://localhost:4000/blog",
    "http://localhost:4000/blog/top-blogs",
    "http://localhost:4000/user/top-users",
  ];
  try {
    const result = await axios.all(
      endpoints.map((endpoint) => axios.get(endpoint))
    );
    const [data1, data2, data3] = [
      result[0].data,
      result[1].data,
      result[2].data,
    ];
    return {
      props: { data1, data2, data3 },
    };
  } catch (error) {
    console.log(error);
  }
}
