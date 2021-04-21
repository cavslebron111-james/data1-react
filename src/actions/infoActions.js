import axios from 'axios';
import { GET_INFOS,ADD_INFO,DELETE_INFO, INFOS_LOADING,UPDATE_INFO,FETCHED_DATA_INFO } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getInfos = () => dispatch => {
  dispatch(setInfosLoading());
  axios
    .get('/api/infos')
    .then(res =>
      dispatch({
        type: GET_INFOS,
        payload: res.data
      })
    )
   // .catch(err =>
    //  dispatch(returnErrors(err.response.data, err.response.status))
   // );
};

export const addInfo = info => (dispatch, getState) => {
  console.log('this is the info',info);
  axios
    .post('/api/infos', info, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_INFO,
        payload: res.data
      })
    )
    // .catch(err =>
    //  dispatch(returnErrors(err.response.data, err.response.status))
    // );
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status)
      );
      // dispatch({
      //   type: GET_ERRORS
      // });
    });

  };

export const deleteInfo = id => (dispatch, getState) => {
  axios
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_INFO,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};



 


    
    
export const getInfoId = id => (dispatch, getState) => {
  console.log('thisaydi', id)
  
    axios
    .get(`/api/infos/${id}`, tokenConfig(getState))
      .then(res => {
        dispatch({
          type: FETCHED_DATA_INFO,
          payload: res.data
        })
    console.log('getid', res.data)
      })
      
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
    
    
    
    }
        


 




export const editInfo = info =>  (dispatch, getState) => {
 //console.log('d', item);
// console.log('c',item._id)
  axios
  .put(`/api/infos/${info._id}`,info, tokenConfig(getState))
  
  .then( res => {
    dispatch( {
      type: UPDATE_INFO,
      payload: res.data
    })
 //console.log('mydata221',item)
  })  
 
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status, 'GET_ERRORS'))
  );
};



export const setInfosLoading = () => {
  return {
    type: INFOS_LOADING
  };
};