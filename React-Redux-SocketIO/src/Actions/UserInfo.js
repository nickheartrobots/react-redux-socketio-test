import {
    USER_INFO_UPDATE_FIRST_NAME,
    USER_INFO_UPDATE_LAST_NAME
} from '../Reducers/UserInfo';

export const updateUserFirstName = (firstName) => {
    return {
        type: USER_INFO_UPDATE_FIRST_NAME,
        payload: firstName
    };
}

export const updateUserLastName = (lastName) => {
    return {
        type: USER_INFO_UPDATE_LAST_NAME,
        payload: lastName
    };
}



