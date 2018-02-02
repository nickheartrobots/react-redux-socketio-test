export const USER_INFO_UPDATE_LAST_NAME = "USER_INFO_UPDATE_LAST_NAME";
export const USER_INFO_UPDATE_FIRST_NAME = "USER_INFO_UPDATE_FIRST_NAME";


const UserInfo = (state={}, action) => {
    switch(action.type){
        case USER_INFO_UPDATE_LAST_NAME:
            return {...state, lastName: action.payload }
        case USER_INFO_UPDATE_FIRST_NAME:
            return {...state, firstName: action.payload }
        default:
            return state;
    }
}

export default UserInfo;