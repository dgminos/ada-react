import { api } from "../../../utils";
import { objectToArray } from "../../../helpers";

const get = async () => {
    const response = await api.get("/users.json");
    console.log(objectToArray(response.data))
    return objectToArray(response.data);
};

const post = () => {
    return null;
};

const like = () => { };

export const usersApi = { get, post, like };