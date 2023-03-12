import deleteDatabase from "../database/deleteDatabase";
import { deleteAllLocalStorage, deleteLocalStorage } from "../LocalStorage/deleteLocalStorage";

function clearStorage() {
    deleteAllLocalStorage();
    deleteDatabase();
}

export default clearStorage;