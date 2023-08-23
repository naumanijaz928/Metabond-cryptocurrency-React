import { wrapper } from "../../wrapper";

export function getDoctors(searchName, page, pageLimit,practice,clinic) {
  return wrapper.get(`doctor/get_doctor_list?search=${searchName}&start=${page}&limit=${pageLimit}&practice_id${practice}&clinic_id=${clinic}`);
}
export function addDoctor(values) {
  return wrapper.post(`doctor/add_doctor`, values);
}
export function updateDoctor(id, values) {
  return wrapper.put(`doctor/update_doctor?doctor_id=${id}`, values);
}
export function DeleteRole(id) {
  return wrapper.remove(`accounts/delete_role?role_id=${id}`);
}
