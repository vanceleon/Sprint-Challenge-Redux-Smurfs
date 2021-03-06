/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from "axios";

export const ERROR = "ERROR";
export const GET_SMURFS = "GET_SMURFS";
export const GETTING_SMURFS = "GETTING_SMURFS";
export const CREATING_SMURFS = "CREATING_SMURFS";
export const CREATE_SMURFS = "CREATE_SMURFS";
export const EDITING_SMURFS = "EDITING_SMURFS";
// export const ERROR = "ERROR";
// export const ERROR = "ERROR";
// export const ERROR = "ERROR";

const URL = "http://localhost:3333/smurfs";

export const getSmurfs = () => {
  const smurfs = axios.get(URL);
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    smurfs
      .then(response => {
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const createSmurf = newSmurf => {
  const smurfs = axios.post(URL, newSmurf);
  return dispatch => {
    dispatch({ type: CREATING_SMURFS });
    smurfs
      .then(response => {
        dispatch({ type: CREATE_SMURFS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};


// put request
export const editSmurfs = editSmurf => {
  const smurfs = axios.put(URL, editSmurf);
  return dispatch => {
    dispatch({type: EDITING_SMURFS});
    smurfs.id
      .then(response => {
        dispatch({type: EDITING_SMURFS, payload: response.data});
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      });
  };
};


// export const deleteSmurf = deleteSmurf => {
//   const smurfs = axios.delete(URL, deleteSmurf);
//   return dispatch => {
//     dispatch({type: DELETE_SMURFS});
//     smurfs.id
//       .then(response => {
//         dispatch({type: CREATE_SMURFS, payload: response.data});
//       })
//       .catch(err => {
//         dispatch({type: ERROR, payload: err});
//       });
//   };
// };
