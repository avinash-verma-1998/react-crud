import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { createUserPost } from "../fetch";

const CreatePost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();
  const createPost = () => {
    const data = {
      user_id: id,
      title,
      body,
    };
    createUserPost(id, data)
      .then((res) => {
        history.push(`/users/${id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="field mt-5 mb-5">
        <label className="label">Title</label>
        <div className="control">
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="input"
            type="text"
            placeholder="title for your post"
          />
        </div>
      </div>
      <div className="field mt-5 mb-5">
        <label className="label">Body</label>
        <div className="control">
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            className="textarea"
            type="text"
            placeholder="Body of your post"
          ></textarea>
        </div>
        <button
          onClick={createPost}
          className="mt-5 button is-primary is-large is-light"
        >
          Create Post
        </button>
      </div>
    </>
  );
};
export default CreatePost;
