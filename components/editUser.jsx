//next
import { useRouter } from "next/router";

//other
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from "cookies-next";

export default function EditUser(props) {
  const [name, setName] = useState(props.dataFromStaticProps.user.name);
  console.log('name',name);
  const [bio, setBio] = useState(props.dataFromStaticProps.user.bio);
  const [bioLength, setBioLength] = useState(
    props.dataFromStaticProps.user.bioLength
      ? props.dataFromStaticProps.user.bioLength
      : 0
  );
  const [imgurl, setImgurl] = useState(props.dataFromStaticProps.user.imgurl);

  useEffect(() => {}, []);

  const router = useRouter();

  const editUser = () => {
    fetch("http://localhost:4000/user/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: `ut ${getCookie("token")}`,
      },
      body: JSON.stringify({
        name: name,
        bio: bio,
        bioLength: bioLength,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          toast.info("Your information was successfully changed");
          setTimeout(() => router.push("/user/dashboard"), 3000);
        }
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const [file, setFile] = useState(null);
  const submitAvatar = async () => {
    try {
      if (!file) return;

      const formData = new FormData();
      formData.append("avatar", file);

      fetch("http://localhost:4000/user/update-avatar", {
        method: "POST",
        headers: {
          auth: `ut ${cookies.get("token")}`,
        },
        body: formData,
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((res) => console.log(res));
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <div className="my-5">
        <div className="block md:flex justify-center flex-col items-center iphone:px-4">
          <div className="w-full fablet:w-3/4 makbook:w-[60%] p-8 shadow-md bg-[#eee] rounded">
            <div className="rounded shadow p-6 bg-white border border-[#607027]">
              <div className="flex items-end justify-center">
                <div
                  className="wrapperPicture"
                  id="wrapperPictureId"
                  style={{
                    background: `url(${imgurl})`,
                  }}
                >
                  <input
                    placeholder="هیچ فایلی انتخاب نشده است"
                    accept="image/*"
                    type="file"
                    id="picture"
                    defaultValue={file}
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                      console.log(e.target.files);
                    }}
                    className="pictureFile cursor-pointer"
                  />
                </div>
                <div>
                  <button
                    className="px-2 py-1 bg-[#607027] text-white text-[0.7rem] rounded outline-0 focus:outline-none"
                    onClick={() => submitAvatar()}
                  >
                    Apply Avatar
                  </button>
                </div>
              </div>
              <div className="pb-6">
                <label
                  for="name"
                  className="font-semibold text-sm text-gray-700 block pb-1"
                >
                  Name
                </label>
                <div className="flex">
                  <input
                    id="username"
                    className="border rounded p-2 w-full focus:bg-inherit outline-none"
                    autoComplete="off"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className="pb-4">
                <div className="flex justify-between">
                  <label
                    for="bio"
                    className="font-semibold text-sm text-gray-700 block pb-1"
                  >
                    Bio
                  </label>
                  <span className="text-gray-400 text-sm">{bioLength}/200</span>
                </div>
                <textarea
                  maxLength={200}
                  id="bio"
                  className="border rounded p-2 w-full focus:bg-inherit outline-none h-[5rem] text-sm"
                  autoComplete="off"
                  value={bio}
                  spellCheck="false"
                  onChange={(e) => {
                    setBio(e.target.value);
                    setBioLength(e.target.value.length);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <button
              className="ml-3 mt-5 px-4 py-2 bg-[#607027] text-white text-sm rounded outline-0 focus:outline-none"
              onClick={() => editUser()}
              id="saveEdit"
            >
              Apply Changes
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
