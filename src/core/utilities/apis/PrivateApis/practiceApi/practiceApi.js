import { wrapper } from "../../wrapper";

export function getPractices(searchName, page, pageLimit) {
  return wrapper.get(`practice/get_practice_list?search=${searchName}&start=${page}&limit=${pageLimit}`);
}
export function addPractice(values) {
  return wrapper.post(`practice/add_practice`, values);
}
export function updatePractice(id, values) {
  return wrapper.put(`practice/update_practice?practice_id=${id}`, values);
}
export function DeleteRole(id) {
  return wrapper.remove(`accounts/delete_role?role_id=${id}`);
}
