import { wrapper } from "../../wrapper";

export function getPatients(
  searchName,
  page,
  pageLimit,
  practice_id,
  clinic_id,
  doctor_id
) {
  return wrapper.get(
    `patient/get_patient_list?search=${searchName}&start=${page}&limit=${pageLimit}&practice_id=${practice_id}&clinic_id=${clinic_id}&doctor_id=${doctor_id}`
  );
}
export function getPatientDetail(id) {
  return wrapper.get(`patient/get_patient_detail?patient_id=${id}`);
}
export function getPatientDetailDashboard() {
  return wrapper.get(`patient/get_patient_device_dashboard_data`);
}

export function getReadingsData(year, month) {
  return wrapper.get(
    `patient/get_reading_list_based_on_year_and_month?year=${year}${
      month ? "&month=" + month : ``
    }`
  );
}
export function addPatient(values) {
  return wrapper.post(`patient/add_patient`, values);
}
export function bulkPatientUpload(values) {
  return wrapper.post(`patient/import_patients`, values);
}
export function updatePatient(id, values) {
  return wrapper.put(`patient/update_patient?patient_id=${id}`, values);
}
export function DeleteRole(id) {
  return wrapper.remove(`accounts/delete_role?role_id=${id}`);
}

export function changePassword(password) {
  return wrapper.post(`accounts/change_password`, password);
}
