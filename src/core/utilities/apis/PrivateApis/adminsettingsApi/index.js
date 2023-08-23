import { wrapper } from "../../wrapper";

export function getSms() {
  return wrapper.get(`utilities/get_sms_template`);
}
export function getEmails() {
  return wrapper.get(`utilities/get_email_template`);
}
export function addSms(values) {
  return wrapper.post(`utilities/add_sms_template`, values);
}
export function addEmail(values) {
  return wrapper.post(`utilities/add_email_template`, values);
}
export function getTwillioNumbers() {
  return wrapper.get(`utilities/get_list_twillio_number`);
}
export function addTwillioNumber(values) {
  return wrapper.post(`utilities/add_twillio_number`, values);
}
export function getBpParams() {
  return wrapper.get(`utilities/get_bp_parameter`);
}
export function updateBpParams(values) {
  return wrapper.put(`utilities/add_or_update_bp_parameter`, values);
}
