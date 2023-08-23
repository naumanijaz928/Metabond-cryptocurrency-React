import { wrapper } from "../../wrapper";

export function getUsers(searchName, page, pageLimit,role) {
  return wrapper.get(`accounts/get_list_user?search=${searchName}&start=${page}&limit=${pageLimit}&role=${role}`);
}
export function addUser(values) {
  return wrapper.post(`accounts/add_user`, values);
}
export function updateUser(id, values) {
  return wrapper.put(`accounts/update_user?user_id=${id}`, values);
}
export function DeleteUser(id) {
  return wrapper.remove(`accounts/delete_role?role_id=${id}`);
}
