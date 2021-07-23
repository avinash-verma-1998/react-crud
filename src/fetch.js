const queryLink = "https://gorest.co.in/public/v1/";

export async function getUsers(page = 1) {
  try {
    const res = await fetch(`${queryLink}users?page=${page}`);
    const json_res = await res.json();
    return json_res.data;
  } catch (err) {
    return err;
  }
}

export async function getUserDetails(id) {
  try {
    const res = await fetch(`${queryLink}users/${id}`);
    const json_res = await res.json();
    return json_res.data;
  } catch (err) {
    return err;
  }
}
export async function getUserPosts(id) {
  try {
    const res = await fetch(`${queryLink}users/${id}/posts`);
    const json_res = await res.json();
    return json_res.data;
  } catch (err) {
    return err;
  }
}
export async function createUserPost(id, data) {
  const response = await fetch(`${queryLink}/users/${id}/posts`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer f010717d9d8729c0246007453f877573feb29f95c1439223a12e762495ab03a8",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json();
}
