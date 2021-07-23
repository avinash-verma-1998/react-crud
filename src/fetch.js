const queryLink = "https://gorest.co.in/public/v1/"

export async function getUsers(page = 1) {
    try{
        const res = await fetch(`${queryLink}users?page=${page}`);
        const json_res = await res.json();
        return json_res.data;
    }
    catch(err){
        return err;
    }
}
