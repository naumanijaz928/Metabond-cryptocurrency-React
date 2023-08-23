import { wrapper } from "../../wrapper";

export function getClinics(searchName, page, pageLimit,practice) {
  if (searchName) {
    return wrapper.get(`clinic/get_clinic_list?search=${searchName}&start=${page}&limit=${pageLimit}&practice_id=${practice}`);
  } else {
    return wrapper.get(`clinic/get_clinic_list?start=${page}&limit=${pageLimit}&practice_id=${practice}`);
  }
}
export function addClinic(values) {
  return wrapper.post(`clinic/add_clinic`, values);
}
export function updateClinic(id, values) {
  return wrapper.put(`clinic/update_clinic?clinic_id=${id}`, values);
}
export function DeleteRole(id) {
  return wrapper.remove(`accounts/delete_role?role_id=${id}`);
}
