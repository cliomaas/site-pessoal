import useAxios from 'axios-hooks';

export function useUser() {

    function setNewUser(user) {
        localStorage.setItem(user.name, JSON.stringify(user));
    }
    function getNewUser(user) {
        return JSON.parse(localStorage.getItem(user.name))
    }

    return {
        setNewUser,
        getNewUser
    }
}