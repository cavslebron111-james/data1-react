import {GET_INFOS,ADD_INFO,DELETE_INFO, INFOS_LOADING,UPDATE_INFO,FETCHED_DATA_INFO} from '../actions/types';

const initialState = {
    infos: [],
    loading: false

};


export default function(state = initialState, action){
    switch(action.type) {
        case GET_INFOS:
            return {
                ...state,
                infos: action.payload,
                loading: false
            };

            case DELETE_INFO:
                    return {
                        ...state,
                        //note here the id must have underscore here because this id came from mongodb ok
                        items: state.infos.filter(info => info._id !== action.payload)
                    };
                    case ADD_INFO:
                            return {
                                ...state,
                                infos: [action.payload, ...state.infos]
                            };
                      
                            case FETCHED_DATA_INFO:
                              
                            return {
                                ...state,
                                //note here the id must have underscore here because this id came from mongodb ok
                                infos: state.infos.map(
                                    info => 
                                      info._id === action.payload._id
                                )
                            }
                           
                            case UPDATE_INFO: 
                                return {
                                    ...state,
                                    //note here the id must have underscore here because this id came from mongodb ok
                                    infos: state.infos.map(
                                        info => {
                                          if (info._id === action.payload._id) {
                                               return action.payload
                                          } else {
                                            return info
                                          }
                                         
                                           
                                         } )
                                   
                                        }   

                            case INFOS_LOADING:
                                return {
                                    ...state,
                                    loading: true
                                };

            default:
                return state;
    }
}