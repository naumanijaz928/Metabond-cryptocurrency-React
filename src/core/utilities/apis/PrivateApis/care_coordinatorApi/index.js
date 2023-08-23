import { wrapper } from "../../wrapper";

export function getCarecoordinators() {
  return wrapper.get(`care_coordinator/get_all_care_coordinators`);
}
export function getCoordinator(id) {
  return wrapper.get(
    `care_coordinator/get_detail_care_coordinators?care_coordinator_id=${id}`
  );
}
export function getPatientsOfClinic(page, pageLimit, clinic, care_coordinator) {
  return wrapper.get(
    `care_coordinator/get_patients_of_clinic?start=${page}&limit=${pageLimit}&clinic_id=${clinic}&care_coordinator_id=${care_coordinator}`
  );
}
export function getAssignedPatients(clinic, care_coordinator) {
  return wrapper.get(
    `care_coordinator/get_assigned_patients_against_clinic?clinic_id=${clinic}&care_coordinator_id=${care_coordinator}`
  );
}
export function assignCoordinatorPatients(values) {
  return wrapper.post(
    `care_coordinator/add_clinic_against_care_coordinator`,
    values
  );
}
export function unassignCoordinatorPatients(values) {
  return wrapper.post(
    `care_coordinator/unassigned_clinic_patients_from_care_coordinator`,
    values
  );
}
export function DeleteRole(id) {
  return wrapper.remove(`accounts/delete_role?role_id=${id}`);
}
