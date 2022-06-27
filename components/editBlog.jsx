//next
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

//component
import Loading from "./loading";

//other
import { Editor } from "@tinymce/tinymce-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef, useState } from "react";
import { getCookie } from "cookies-next";

export default function EditBlog(props) {
  const queryRouter = useRouter();
  const { id } = queryRouter.query;

  const router = useRouter();

  const [hintTitle, setHintTitle] = useState(false);
  const [hintContent, setHintContent] = useState(false);

  const [postTitle, setPostTitle] = useState("");
  const [postImgUrl, setPostImgUrl] = useState("");
  const [postText, setPostText] = useState("");
  const [postCat, setPostCat] = useState("");
  const [postHashtag, setPostHashtag] = useState([]);

  const [loadingForEditPost, setLoadingForEditPost] = useState(true);

  const [hashtags, setHashtags] = useState("");

  useEffect(() => {
    setPostTitle(props.dataFromStaticProps.blog.title);
    setPostImgUrl(props.dataFromStaticProps.blog.imgurl);
    setPostText(props.dataFromStaticProps.blog.content);
    setPostCat(props.dataFromStaticProps.blog.cat);
    setPostHashtag(
      props.dataFromStaticProps.blog.hashtag
        ? props.dataFromStaticProps.blog.hashtag
        : []
    );
    setLoadingForEditPost(false);
  }, []);

  const UID = () => {
    return new Date().getTime() + String(Math.random()).slice(3, 9);
  };

  const addHashtag = () => {
    console.log(postHashtag);
    if (hashtags !== "") {
      const arr = [...postHashtag];
      arr.push({ name: hashtags, id: UID() });
      setPostHashtag(arr);
      setHashtags("");
    }
  };

  const getIndexById = (id) => {
    return postHashtag.findIndex((item) => item.id === id);
  };

  const deleteHashtag = (id) => {
    const arr = [...postHashtag];
    const p = getIndexById(id);
    arr.splice(p, 1);
    setPostHashtag(arr);
  };

  const editorRef = useRef(null);

  const submitBLogChange = async () => {
    if (postTitle === "") {
      setHintTitle(true);
    } else {
      setHintTitle(false);
    }
    if (editorRef.current.getContent() === "") {
      setHintContent(true);
    } else {
      setHintContent(false);
    }
    if (postTitle !== "") {
      fetch("http://localhost:4000/blog/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          auth: `ut ${getCookie("token")}`,
        },
        body: JSON.stringify({
          blogId: id,
          data: {
            cat: postCat,
            hashtag: postHashtag,
            title: postTitle,
            content: editorRef.current.getContent(),
            imgurl:
              postImgUrl === ""
                ? "https://www.bootdey.com/app/webroot/img/Content/bg1.jpg"
                : postImgUrl,
          },
        }),
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.info("Your post was successfully editted!");
          setTimeout(() => router.push("/"), 3000);
        }
      });
    }
  };
  return (
    <>
      {loadingForEditPost ? (
        <Loading />
      ) : (
        <>
          <Head>
            <title>{postTitle}</title>
          </Head>
          <div className="w-full h-full flex flex-col my-5 justify-center items-center">
            <div className="w-[95%]">
              <div>
                <label className="text-2xl iphone:text-base font-semibold">
                  Title
                </label>
                <input
                  className="w-full my-1 mb-3 p-2 focus:bg-white focus:outline-none border border-blue-600 rounded-lg"
                  type="text"
                  placeholder="title"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                />
                <div
                  className={`text-red-600 mb-3 pl-2 ${
                    hintTitle ? "" : "hidden"
                  }`}
                >
                  Please type some title
                </div>
              </div>
              <div className="flex justify-start items-center my-1 mb-3 iphone:flex-col ">
                <div className="text-2xl iphone:text-base w-fit font-semibold mr-3">
                  Select Category
                </div>
                <div className="w-1/2">
                  <select
                    value={postCat}
                    onChange={(e) => setPostCat(e.target.value)}
                    className="w-full p-2 focus:bg-white focus:outline-none border border-blue-600 rounded-lg"
                  >
                    <option value="Public">Public</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Health">Health</option>
                  </select>
                </div>
              </div>
              <div>
                <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue={postText}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "a11ychecker",
                      "advlist",
                      "advcode",
                      "advtable",
                      "autolink",
                      "checklist",
                      "export",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "powerpaste",
                      "fullscreen",
                      "formatpainter",
                      "insertdatetime",
                      "media",
                      "table",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | casechange blocks | bold italic backcolor | " +
                      "alignleft aligncenter alignright alignjustify | " +
                      "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
                <div
                  className={`text-red-600 mb-3 ${hintContent ? "" : "hidden"}`}
                >
                  Please type some content
                </div>
              </div>
              <div className="mt-3">
                <label className="text-2xl iphone:text-base font-semibold">
                  Image
                </label>
                <input
                  className="w-full my-3 p-2 focus:bg-white focus:outline-none border border-blue-600 rounded-lg"
                  type="text"
                  placeholder="image url"
                  value={postImgUrl}
                  onChange={(e) => setPostImgUrl(e.target.value)}
                />
              </div>
              <div className="mt-3 flex iphone:flex-col items-center">
                <div className="text-xl whitespace-nowrap iphone:text-base font-semibold iphone:text-left w-fit iphone:w-full">
                  Add Some Hashtag
                </div>
                <div className="flex iphone:justify-between iphone:mt-4 w-full">
                  <input
                    className="w-1/2 iphone:w-full md:mx-4 p-2 focus:bg-white focus:outline-none border border-blue-600 rounded-lg"
                    value={hashtags}
                    onChange={(e) => setHashtags(e.target.value)}
                    placeholder=""
                  ></input>
                  <button
                    className="px-6 py-[0.5rem] bg-[#607027] text-white font-medium text-md leading-tight rounded shadow-md"
                    onClick={() => addHashtag()}
                  >
                    Add
                  </button>
                </div>
              </div>
              <div className="mt-3 ">
                {postHashtag?.map((item, i) => (
                  <div
                    key={i}
                    className="px-2 py-1 ml-1 w-fit inline-block items-center border text-sm border-gray-500 text-black rounded transition-colors hover:bg-red-500"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold"># {item.name}</span>
                      <i
                        className="fa fa-times ml-1 p-2 cursor-pointer hover:text-white"
                        onClick={() => deleteHashtag(item.id)}
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-end">
                <button
                  className="mt-3 px-8 py-[0.75rem] bg-[#607027] text-white font-medium text-md leading-tight rounded shadow-md"
                  onClick={submitBLogChange}
                >
                  Submit Changes
                </button>
                <Link href={"/user/dashboard"}>
                  <a className="mt-3 px-8 py-[0.75rem] bg-red-600 ml-6 text-white font-medium text-md leading-tight rounded shadow-md">
                    Cancel
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </>
  );
}
