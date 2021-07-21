const trainersLoaded = (newTrainers) => {
    return {
      type: 'FETCH_TRAINERS_SUCCESS',
      payload: newTrainers
    };
};
const trainersRequested = () => {
  return {
    type: 'FETCH_TRAINERS_REQUEST'
  }
};
const trainersError = (error) => {
  return {
    type: 'FETCH_TRAINERS_FAILURE',
    payload: error
  };
};


const fetchTrainers = (trainersstoreService, dispatch) => () => {
  dispatch(trainersRequested());
  trainersstoreService.getTrainers()
    .then((data) => dispatch(trainersLoaded(data)))
    .catch((err) => dispatch(trainersError(err)));
};

export {
  fetchTrainers
};