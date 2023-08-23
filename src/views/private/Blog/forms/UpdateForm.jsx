import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

///// user Apis
import { updateUser } from "../../../../core/utilities/apis/PrivateApis/userApi";
import {
  getCities,
  getCountries,
  getStates,
  getTimezones,
} from "../../../../core/utilities/apis/PrivateApis/utilitiesApi";


///// dropdown values 
import { statuses, languages, roles, genders } from '../../../../components/values';

///// import Formik and Yup 
import { Formik, Form } from "formik";
import * as Yup from "yup";

////// third Party imports 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import {
  FormControl,
  Grid,
  InputLabel,
  Typography,
  MenuItem,
  Select as MuiSelect,

} from "@mui/material";
//////// MUI local Validation Form 
import Textfield from "../../../../components/FormsUI/Textfield";
import Button from "../../../../components/FormsUI/Button";
import Select from "../../../../components/FormsUI/Select";
import TimezoneSelect from "../../../../components/FormsUI/Select/TimezoneSelect";
import DataTimePicker from "../../../../components/FormsUI/DataTimePicker";


toast.configure();
const UpdateForm = ({ data, showModal }) => {

  const address = data?.address ? data?.address : {}
  const [userId, setUserId] = useState(data.id)
  const [open, setOpen] = showModal;
  /////// filter states 


  //////// pagination states 
  const [page, setPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10000);

  /////// apis data states

  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [timezones, setTimezones] = useState([]);

  ///// local states 
  const [phone_number, setPhone_number] = useState(data.phone_number);
  const [image, setImage] = useState("");
  // const [date_of_birth, setDate_of_birth] = useState(new Date());

  const [city, setCity] = useState(address?.city);
  const [state, setState] = useState(address?.state)
  const [country, setCountry] = useState(address?.country)

  const navigate = useNavigate();
  //// initial Values 
  const initialValues = {
    first_name: data.first_name,
    last_name: data.last_name,
    username: data.username,
    email: data.email,
    password: "",

    // phone_number: data.phone_number,
    role: data.role,
    status: data.status,
    gender: data.gender,

    language: data.language,
    timezone: data.timezone,
    zip_code: address.zip_code,
    address_line1: address.address_line1,
    address_line2: address.address_line2,
  };
  //// yup validation schema 
  const validationSchema = Yup.object({
    first_name: Yup.string().required("firstname is required!"),
    last_name: Yup.string().required("last_name is required!"),
    username: Yup.string().required("username is required!"),
    email: Yup.string().email("invalid format").required("email is required!"),
    password: Yup.string(),
    //   .min(8, 'minimum 8 digits'),
    // phone_number: Yup.string()
    //   // .integer()
    //   // .positive()
    //   // .typeError("Please enter a valid phone number")
    //   .matches(/^[0-9]+$/, "Must be only digits")
    //   .min(9, 'minimum 9 digits')
    //   // .max(8, 'Must be exactly 5 digits')
    //   .required("phone number is Required minimum 8"),
    role: Yup.string().required("role is required!"),
    status: Yup.string().required("status is required!"),
    language: Yup.string().required("language is required!"),
    gender: Yup.string().required("Gender is required!"),
    timezone: Yup.string().required("timezone is required!"),
    zip_code: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(5, 'minimum 5 digits')
      .max(5, 'maximum 5 numbers')
      .required("Zip Code is required"),
    address_line1: Yup.string().required("address_line1 is required!"),
    address_line2: Yup.string().required("address_line2 is required!"),
  });

  //// submit method 
  const onSubmit = (values) => {
    const addData = () => {
      const _user = {
        first_name: values.first_name,
        last_name: values.last_name,
        username: values.username,
        email: values.email,
        password: values.password,
        phone_number: "+" + phone_number,
        status: values.status,
        gender: values.gender,
        image,
        timezone: values.timezone,
        role: values.role,
        language: values.language,
        address: {
          address_line1: values.address_line1,
          address_line2: values.address_line2,
          zip_code: values.zip_code,
          city,
          state,
          country,
        },
      };
      //// api call
      updateUser(userId, _user)
        .then(res => {
          if (res.status === 200 || res.status === 201) {
            notify();
            navigate("/userdetails");
            setOpen(false)
          }
          else {
            notifyError();
          }
        })
        .catch(err => {
          console.log(err)
        })

    };
    addData();
  };

  //// alert method 
  const notify = () =>
    toast.success("Added successfully!", { autoClose: 5000 });
  const notifyError = () =>
    toast.error("Something Wrong!", { autoClose: 3000 });

  //// address api calls 
  const adressApis = async () => {
    let tzone = await getTimezones();
    setTimezones(tzone.response.data);
    let count = await getCountries();
    setCountries(count.response.data);
    let stat = await getStates(country);
    setStates(stat.response.data);
    let cit = await getCities(state);
    setCities(cit.response.data);
  };


  useEffect(() => {
    adressApis();
  }, [country, state, city])

  return (
    <>
      <Typography variant="h5" sx={{ padding: '10px', textAlign: 'center' }}>Update User</Typography>
      <Formik
        initialValues={{
          ...initialValues,
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>User details</Typography>
            </Grid>

            <Grid item xs={4}>
              <Textfield
                name="first_name"
                label="First Name"
              />
            </Grid>

            <Grid item xs={4}>
              <Textfield name="last_name" label="Last Name" />
            </Grid>
            <Grid item xs={4}>
              <Textfield name="username" label="Username" />
            </Grid>

            <Grid item xs={4}>
              <Textfield name="email" label="Email" />
            </Grid>
            <Grid item xs={4}>
              <Textfield
                required
                name="password"
                label="Password"
                type="password"
                inputProps={{ minLength: 8 }}
              />
            </Grid>

            <Grid item xs={4}>

              <PhoneInput

                isValid={phone_number.length < 9 ? false : true}
                name="phone_number"
                value={phone_number}
                prefix="+"
                containerStyle={{
                  margin: "0px",
                  width: "100%",
                }}
                country="us"
                placeholder="phone number"
                inputProps={{
                  prefix: "+",
                  required: true,
                  minLength: 9,
                  error: true
                }}
                onChange={(phone) =>
                  setPhone_number(phone)
                }
              />

            </Grid>
            <Grid item xs={4}>
              <Select
                name="role"
                label="Role"
                options={roles}
              />
            </Grid>
            <Grid item xs={4}>
              <Select
                name="status"
                label="Status"
                options={statuses}
              />
            </Grid>
            <Grid item xs={4}>
              <Select
                name="gender"
                label="Gender"
                options={genders}
              />
            </Grid>
            <Grid item xs={4}>
              <Select
                name="language"
                label="Language"
                options={languages}
              />
            </Grid>
            <Grid item xs={12}>
              <TimezoneSelect
                name="timezone"
                label="Timezone"
                options={timezones}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Address</Typography>
            </Grid>

            <Grid item xs={12}>
              <Textfield
                name="address_line1"
                label="Address Line 1"
              />
            </Grid>

            <Grid item xs={12}>
              <Textfield
                name="address_line2"
                label="Address Line 2"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel required>Country</InputLabel>
                <MuiSelect
                  label="Country*"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <MenuItem value="">
                    <em>Country</em>
                  </MenuItem>
                  {countries.map((coun) => (
                    <MenuItem value={coun.id}>
                      {coun.name}
                    </MenuItem>
                  ))}
                </MuiSelect>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel required>State</InputLabel>
                <MuiSelect
                  label="State*"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <MenuItem value="">
                    <em>State</em>
                  </MenuItem>
                  {states.map((sta) => (
                    <MenuItem value={sta.id}>
                      {sta.name}
                    </MenuItem>
                  ))}
                </MuiSelect>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel required>City</InputLabel>
                <MuiSelect
                  label="City*"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <MenuItem value="">
                    <em>City</em>
                  </MenuItem>
                  {cities.map((citi) => (
                    <MenuItem value={citi.id}>
                      {citi.name}
                    </MenuItem>
                  ))}
                </MuiSelect>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Textfield name="zip_code" label="Zip Code" />
            </Grid>

            <Grid item xs={12} className="pb-5">
              <Button>Update User</Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>

    </>
  )
}

export default UpdateForm