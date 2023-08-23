import { wrapper } from "../../wrapper";


export function getCountries() {
  return wrapper.get(`utilities/get_countries`);
}
export function getStates(country) {
  return wrapper.get(`utilities/get_states?country=${country}`);
}
export function getCities(state) {
  return wrapper.get(`utilities/get_cities?state=${state}`);
}
export function getTimezones() {
  return wrapper.get(`utilities/get_timezone_list`);
}
export function getPractices() {
  return wrapper.get(`utilities/get_practice_and_clinics`);
}
export function getPracticeClinics(id) {
  return wrapper.get(`utilities/get_clinics_of_practice?practice_id=${id}`);
}
export function getDoctors( page, pageLimit,clinic) {
  return wrapper.get(`doctor/get_doctor_list?start=${page}&limit=${pageLimit}&clinic_id=${clinic}`);
}