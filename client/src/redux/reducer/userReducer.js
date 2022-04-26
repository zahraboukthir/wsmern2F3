import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILED,
  REGISTER_Sucsess,
  USER_FAIL,
  User_load,
  USER_SUCCESS,
} from "../actionstypes/userconst";

const initialState = {
  currentUser: {},
  loading: false,
  error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case User_load:
      return { ...state, loading: true };
    case REGISTER_Sucsess:
      return { ...state, loading: false, currentUser: payload.user };
    case REGISTER_FAILED:
      return { ...state, loading: false, error: payload };
      case LOGIN_SUCCESS:
        localStorage.setItem("token",payload.token)
            return { ...state, currentUser: payload.user, loading: false };
      case LOGIN_FAIL:
        return { ...state, errors: payload, loading: false };
        case USER_SUCCESS:
              return { ...state, currentUser: payload, loading: false };
        case USER_FAIL:
          return { ...state, errors: payload, loading: false };
          case LOGOUT:
          return { loading: false,
            currentUser: null,
            errors: null}
    default:
      return state;
  }
};
export default userReducer;
