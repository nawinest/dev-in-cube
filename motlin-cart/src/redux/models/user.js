// import request from '../../utils/request'

export const user = {
    state: {
        isAuthenticate: false,
        token: ''
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        setAuthenticated(state, payload) {
            return {
                ...state,
                isAuthenticate: payload
            }
        },
        setToken(state, payload){
            return {
                ...state,
                token : payload
            }
        }
    },
    effects: (dispatch) => ({
        async login(payload, rootState) {
            const token = 'sadwqeawdad_324wfsavscq_A342@'
            if (payload.username === 'demo' && payload.password === 'password') {
                return dispatch.user.setToken(token)
            }
            return Promise.reject('Username or password not found')
        },
        async logout(payload, rootState) {
            dispatch.user.setToken(null)
        }
    }),
    selectors : {
        isAuthenticate(){
            return (rootState , props) => rootState.user.token !== null
        }
    }
}