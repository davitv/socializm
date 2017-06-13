import Cookies from 'js-cookie';
import axios from 'axios';

export function isLoggedIn() {
    const token = Cookies.get('token');
    if(!!token) return true;
    return false;
}

export function logIn(token) {
    Cookies.set('token', token);
}

export function logOut(token) {
    Cookies.remove('token');
    axios.defaults.headers.common['Authorization'] = '';
}

export function getToken() {
    return Cookies.get('token', false);
}

export function requireAuth(nextState, replace) {

    if(!isLoggedIn()) {
        replace({
            pathname: '/automanage/login/'
        });
    }
    else {
        const token = getToken();
        if(token)
            axios.defaults.headers.common['Authorization'] = 'Token ' + token;
    }
}