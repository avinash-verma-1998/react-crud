import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Loader from "../components/Loader";
import Post from "../components/Post";
import { getUserDetails, getUserPosts } from "../fetch";

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const history = useHistory();

  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getUserDetails(id)
      .then((data) => {
        setUser(data);
        getUserPosts(id).then((post) => {
          setPosts(post);
          setIsLoading(false);
        });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
      });
  }, []);
  const createPost = () =>{
      history.push(`/post/${id}`);
  }
  return (
    <>
      <div>
        <button
          onClick={() => {
            history.push("/");
          }}
          className="button is-primary is-light"
        >
          {" "}
          HOME
        </button>

        <Loader isLoading={isLoading} />
      </div>
      {isLoading ? null : (
        <>
          <div className="user-showcase">
            <h1 className="title has-text-centered">
              <span
                className={user.status === "active" ? "active" : "inactive"}
              ></span>{" "}
              {user.name}({user.status})
            </h1>
            <p className="ml-5 title">Email</p>
            <p className="ml-5 subtitle">{user.email}</p>
            <p className="ml-5 title">Gender</p>
            <p className="ml-5 subtitle">{user.gender}</p>
            <hr />
          </div>

          <div className="has-text-centered">
            <button
              onClick={createPost}
              className=" button is-primary is-large is-light"
            >
              Create Post
            </button>
          </div>
          <div className="posts">
            {isLoading
              ? null
              : posts.map((post) => (
                  <Post key={post.id} title={post.title} body={post.body} />
                ))}
          </div>
        </>
      )}
    </>
  );
};

export default UserProfile;
