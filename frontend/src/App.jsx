import { useState, useEffect } from 'react';
import axios from 'axios';
import './assets/fonts.css';
import './index.css';

import Header from './components/Header';
import WorkoutList from './components/WorkoutList';
import AddWorkoutForm from './components/AddWorkoutForm';
import EditWorkoutForm from './components/EditWorkoutForm';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    // newWorkout an object with three properties: title, reps, and load
    // that are initially set to empty strings.
    title: '',
    reps: '',
    load: '',
  });

  // console.log(newWorkout);
  const [editWorkout, setEditWorkout] = useState(null);

  const API_URL = 'https://mern-oh7u.onrender.com/api/workouts';
  // GET
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get(API_URL);
        setWorkouts(response.data.data);
      } catch (error) {
        console.error('Error fetching workouts:', error.message);
      }
    };
    fetchWorkouts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    // updating state immutably by spreading the existing object and replacing the field you want
    // creates a new object. leaving the orignal untouched.
    setNewWorkout({ ...newWorkout, [name]: value });
    // console.log(newWorkout, name, value);
  };

  // POST
  const addWorkout = async () => {
    try {
      const response = await axios.post(API_URL, newWorkout);
      setWorkouts([response.data.data, ...workouts]); // Adds the new workout to the beginning of the workouts array
      setNewWorkout({ title: '', reps: '', load: '' }); // Resets the newWorkout state to its initial values
    } catch (error) {
      console.error('Error adding workout!', error.message);
    }
  };

  // DELETE
  const deleteWorkout = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`); // Sends DELETE request to the backend
      setWorkouts(workouts.filter((workout) => workout._id !== id)); // Updates state to remove the deleted workout
    } catch (error) {
      console.error('Error deleting workout:', error.message);
    }
  };

  const startEditing = (workout) => {
    setEditWorkout(workout);
  };

  // UPDATE

  const updateWorkout = async () => {
    try {
      const response = await axios.put(
        `${API_URL}/${editWorkout._id}`, // editWorkout.id - the unique id of the workout that is to be updated
        // console.log(editWorkout._id),
        editWorkout
        // console.log(editWorkout)
      );
      setWorkouts(
        workouts.map((workout) =>
          workout._id === editWorkout._id ? response.data.data : workout
        )
      );
      setEditWorkout(null);
    } catch (error) {
      console.error('Error updating workout:', error.message);
    }
  };

  return (
    <>
      <div>
        <Header she={'Stef'} />
      </div>
      <div className="components">
        <div>
          <AddWorkoutForm
            newWorkout={newWorkout}
            handleInputChange={handleInputChange}
            addWorkout={addWorkout}
          />
          {editWorkout && (
            <EditWorkoutForm
              editWorkout={editWorkout}
              setEditWorkout={setEditWorkout}
              updateWorkout={updateWorkout}
            />
          )}
        </div>
        <div>
          <WorkoutList
            className="workout-details"
            workouts={workouts}
            deleteWorkout={deleteWorkout}
            startEditing={startEditing}
          />
        </div>
      </div>
    </>
  );
}
export default App;
