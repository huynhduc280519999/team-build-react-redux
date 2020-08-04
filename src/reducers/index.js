import { combineReducers } from "redux"
import authReducer from './auth'
import meReducer from './me'
import groupReducer from "./group"
import userReducer from "./user"

const rootReducer = combineReducers({
  auth: authReducer,
  me: meReducer,
  group: groupReducer,
  user: userReducer
})
export default rootReducer