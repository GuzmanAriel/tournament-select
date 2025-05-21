
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Label, Button } from "reactstrap";
import { useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { validateCreateTournamentForm } from "../utils/tournaments/validateCreateTournamentForm";
import PlaceAutocompleteComponent from "../components/google/PlacesAutoComplete";
import { TIMES } from "../app/shared/TIMES";
import { postTournament } from "../features/tournaments/tournamentsSlice";

const CreateATournament = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  
  const handleSubmit = async(values, { resetForm }) => {
  
      const tournament = {
          id: values.id,
          name: values.name,
          date_utc: values.date,
          start_time: values.time,
          location: values.location,
          total_teams: parseInt(values.totalTeams),
          tournament_type: values.tournamentType,
          playoff_elimination_type: values.playoffType,
          pool_number: parseInt(values.poolNumber),
          playoffBracketNumber: parseInt(values.playoffBracketNumber),
          prizes: values.prizes,
          first_place_prize: values.firstPlacePrize,
          second_place_prize: values.secondPlacePrize,
          third_place_prize: values.thirdPlacePrize,
          additionalNotes: values.additionalNotes,
      };

      try {
        await dispatch(postTournament(tournament)).unwrap();
        resetForm();
        navigate('/dashboard', { state: { tab: "2" } });
    } catch (error) {
      console.error("Error creating tournament:", error);
  }
      dispatch(postTournament(tournament));
  };

  return (
    <div className="ts-form">
      <h1 className="mb-5">Create A Tournament</h1>
      <Formik
        initialValues={{
          name: "",
          date: new Date(),
          time: "",
          location: "",
          tournamentType: "",
          totalTeams: "",
          playoffType: "",
          playoffBracketNumber: "",
          poolNumber: "",
          prizes: false,
          firstPlacePrize: "",
          secondPlacePrize: "",
          thirdPlacePrize: "",
          additionalNotes: "",
        }}
        validate={validateCreateTournamentForm} // Use the function here
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => {

          return (
            <Form>
              {/* Tournament Name */}
              <FormGroup>
                <Label htmlFor="name">Tournament Name</Label>
                <Field name="name" className="form-control bg-transparent text-white" />
                <ErrorMessage name="name">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              {/* Date Picker */}
              <FormGroup className="mt-5">
                <Label htmlFor="date">Date</Label>
                <DatePicker
                  showIcon
                  selected={values.date}
                  onChange={(date) => setFieldValue("date", date)}
                  className="form-control bg-transparent text-white"
                />
                <ErrorMessage name="date">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              {/* Time Selection */}
              <FormGroup className="mt-5">
                <Label htmlFor="time">Start Time</Label>
                <Field name="time" as="select" className="form-control bg-transparent text-white">
                  <option value="">Select Time</option>
                  {TIMES.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
                </Field>
                <ErrorMessage name="time">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              {/* Google Places Autocomplete Input */}
              <FormGroup className="mt-5">
                <Label htmlFor="location">Address</Label>
                <PlaceAutocompleteComponent setFieldValue={setFieldValue}/>
                <ErrorMessage name="location">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              <FormGroup className="mt-5">
                <Label htmlFor="tournamentType">Tournament Type</Label>
                <Field name="tournamentType" className="form-control bg-transparent text-white" placeholder="Example: 3V3, BYO4 etc."/>
                <ErrorMessage name="tournamentType">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              <FormGroup className="mt-5">
                <Label htmlFor="totalTeams">Total Teams</Label>
                <Field name="totalTeams" className="form-control bg-transparent text-white"/>
                <ErrorMessage name="totalTeams">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              <FormGroup className="mt-5">
                <Label htmlFor="poolNumber">How many pools?</Label>
                <Field name="poolNumber" className="form-control bg-transparent text-white"/>
                <ErrorMessage name="poolNumber">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              <FormGroup className="mt-5">
                <Label htmlFor="playoffType">Playoff Type</Label>
                <Field name="playoffType" as="select" className="form-control bg-transparent text-white">
                  <option value="">Select Type</option>
                  <option value="Single Elimination">Single Elimination</option>
                  <option value="Double Elimination">Double Elimination</option>
                </Field>
                <ErrorMessage name="playoffType">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              <FormGroup className="mt-5">
                <Label htmlFor="playoffBracketNumber">How many playoff brackets?</Label>
                <Field name="playoffBracketNumber" className="form-control bg-transparent text-white"/>
                <ErrorMessage name="playoffBracketNumber">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>

              <FormGroup className="mt-5">
                <label className="form-prizes">
                    <div id="prizes" className="form-label">Will there Be Prizes</div>
                    <div role="group" aria-labelledby="prizes">
                        <label className="form-prizes-yes">
                            <Field type="radio" name="prizes" value={true} checked={values.prizes === true} onChange={() => setFieldValue("prizes", true)}/>
                                <span>Yes</span>
                        </label>
                        <label>
                            <Field type="radio" name="prizes" value={false} checked={values.prizes === false} onChange={() => setFieldValue("prizes", false)}/>
                            <span>No</span>
                        </label>
                    </div>
                </label>

              </FormGroup>

              {values.prizes && (
                <div className="form-prizes-list">
                    <FormGroup>
                        <Label htmlFor="firstPlacePrize">First Place Prize</Label>
                        <Field name="firstPlacePrize" className="form-control bg-transparent text-white" />
                        <ErrorMessage name="firstPlacePrize">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="secondPlacePrize">Second Place Prize</Label>
                        <Field name="secondPlacePrize" className="form-control bg-transparent text-white" />
                        <ErrorMessage name="secondPlacePrize">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="thirdPlacePrize">Third Place Prize</Label>
                        <Field name="thirdPlacePrize" className="form-control bg-transparent text-white" />
                        <ErrorMessage name="thirdPlacePrize">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
                    </FormGroup>
                </div>
                
              )}

              <FormGroup className="mt-5">
                <Label htmlFor="additionalNotes">Additional Notes:</Label>
                <Field name="additionalNotes" component="textarea" className="form-control bg-transparent text-white" placeholder="Example: parking instructions, notes, etc."/>
                <ErrorMessage name="additionalNotes">{(msg) => <p className="text-danger">{msg}</p>}</ErrorMessage>
              </FormGroup>
              {/* Submit Button */}
              <FormGroup className="mt-3 float-end" color="primary">
                <Button type="submit" color="primary">
                  Create Tournament
                </Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateATournament;