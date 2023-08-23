import { wrapper } from "./wrapper";

export function getPatientDeviceData(Obj) {
  return wrapper.get(`patient/get_patient_device_data`, {
    patient_id: Obj?.patient_id,
    start_date: Obj?.start_date,
    end_date: Obj?.end_date,
  });
}
