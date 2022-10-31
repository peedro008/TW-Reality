import {
  USER,
  USER_ROLE,
  USER_NAME,
  USER_ID,
  GET_COMMISSION,
  LOGOUT,
GET_REALTORS,
GET_SELLS,
GET_USERS,
COMMISSION_VALUE,
GET_REFERRED

} from "./actions";

const initialState = {
  TotalDeposit: 0,
  User: null,
  userRole: null,
  UserId: null,
  userName: null,
  Realtors: [],
  Sells: [],
  Commissions:[],
  CommissionValue:null,
  Users:[],
  Referred:[],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER:
      return {
        ...state,
        User: action.payload,
      };
      case GET_COMMISSION:
        return {
          ...state,
          Commissions: action.payload,
        };
        case COMMISSION_VALUE:
          return {
            ...state,
            CommissionValue: action.payload,
          };
    case USER_ROLE:
      return {
        ...state,
        userRole: action.payload,
      };
    case USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case USER_ID:
      return {
        ...state,
        UserId: action.payload,
      };
    case LOGOUT:
      return {
       ...state,
       User: null,
       userRole: null,
       UserId: null,
       userName: null
      };

    case GET_REALTORS:
      return {
        ...state,
        Realtors: action.payload,
      };
      case GET_REFERRED:
        return {
          ...state,
          Referred: action.payload,
        };
      case GET_SELLS:
        return {
          ...state,
          Sells: action.payload,
        };
        case GET_USERS:
          return {
            ...state,
            Users: action.payload,
          };
    default:
      return state;
  }
}
