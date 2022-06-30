//next
import { useRouter } from "next/router";
import Link from "next/link";
import Error from "next/error";
import Head from "next/head";
import Image from "next/image";

//components
import Loading from "../../../components/loading";

//other
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import dashboardAuth from "../../../feature/dashboardAuth";

const Dashboard = (props) => {
  const [myBlogs, setMyBlogs] = useState();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  console.log("%c props", "background:yellow", props);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`http://localhost:4000/blog/my-blogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        auth: `ut ${getCookie("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return <Error />;
        }
      })
      .then((result) => {
        setMyBlogs(result);
        // console.log(myBlogs);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      {/* <div className="w-full bg-white relative flex" onClick={hideMenu}> */}
      <div className="w-full bg-white relative flex">
        <div className="w-full h-full flex flex-col justify-between">
          {router.pathname === "/user/dashboard" ? (
            <main className="max-w-full h-full flex flex-col pt-3 min-h-screen fablet:mx-10 tablap:px-14 LCD:px-20">
              <div className="h-full w-full flex flex-wrap justify-center mb-[55px]">
                {loading ? (
                  <Loading />
                ) : myBlogs.length === 0 ? (
                  <div className="flex flex-col items-center">
                    <div className="text-lg w-[200px] h-[200px] bg-gray-800 p-4 rounded-full text-white mb-4 flex justify-center items-center ">
                      <p className="text-center text-[1.4rem]">
                        You have not created any post
                      </p>
                    </div>
                    <Link href={"/user/dashboard/createblog"}>
                      <a className="bg-[#607027] text-sm font-medium px-3 py-2 rounded text-white hover:text-white  w-fit">
                        + Add The First Blog
                      </a>
                    </Link>
                  </div>
                ) : (
                  <section className="text-gray-600 body-font w-full iphone:px-4">
                    <div className="container mx-auto py-10 px-0">
                      <div className="mb-3 text-right">
                        <Link href={"/user/dashboard/createblog"}>
                          <a className="bg-[#607027] text-sm font-medium px-3 py-2 rounded text-white hover:text-white ">
                            + Add a New Blog
                          </a>
                        </Link>
                      </div>
                      <div className="flex flex-wrap -m-4">
                        {myBlogs.map((item, i) => (
                          <div
                            key={i}
                            className="p-4 sm:w-full w-full md:min-w-[50%] md:max-w-[50%] animate-scaleShow"
                          >
                            <div className="h-full shadow rounded overflow-hidden">
                              <div className="w-full h-[15rem] relative">
                                <Image
                                  loader={() => item.imgurl}
                                  src={item.imgurl}
                                  alt="blog"
                                  layout="fill"
                                  objectFit="cover"
                                />
                              </div>

                              <div className="py-3 px-4">
                                <h2 className="text-xs tracking-wide title-font font-medium text-gray-400 mb-1">
                                  {/* {parsIsoDate(item.updatedAt)} */}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-600 mb-1">
                                  {item.title}
                                </h1>
                                <p
                                  className="summeryContentInDashboard leading-relaxed mb-3 text-sm overflow-hidden truncate whitespace-nowrap"
                                  dangerouslySetInnerHTML={{
                                    __html: item.content,
                                  }}
                                ></p>
                                <div className="flex items-center justify-center flex-wrap ">
                                  <Link
                                    href={`/user/dashboard/editblog/${item._id}`}
                                  >
                                    <a className="px-8 py-2 w-2/6 text-center bg-[#607027] text-white hover:text-white transition-all duration-300 rounded">
                                      Edit
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </main>
          ) : (
            ""
          )}
        </div>
      </div>
      <style jsx>
        {`
          .summeryContentInDashboard {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        `}
      </style>
    </>
  );
};


// export async function getStaticProps() {
//   console.log('1111111111111111111111111111');
//   const res = await fetch(`http://localhost:4000/blog/my-blogs`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       auth: `ut ${getCookie("token")}`,
//     },
//   });
//   const blogs = await res.json();
//   console.log('%c blogs','background:orange',blogs);

//   return {
//     props: {
//       blogs,
//     },
//   };
// }

export default dashboardAuth(Dashboard);

