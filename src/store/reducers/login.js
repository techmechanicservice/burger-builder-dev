import * as actions from "../actions/actions"

const initialState = {
	idToken: null,
	userId: null,
	userData: {},
	conflictMessage: null,
	errorMessage: null,
	loading: false,
	timerExpired: false
}

function deepClone(object) {
	return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.LOGIN_START: {
			const _ = deepClone(initialState)
			_.loading = true
			return _
		}

		case actions.LOGIN_STORE: {
			const _ = deepClone(state)
			_.idToken = action.idToken
			_.userId = action.userId
			return _
		}

		case actions.PROFILE_STORE: {
			const _ = deepClone(state)
			_.userData = action.userData
			_.loading = false
			return _
		}

		case actions.PROFILE_FAIL: {
			const _ = deepClone(state)
			_.errorMessage = action.errorMessage
			_.loading = false
			return _
		}

		case actions.LOGIN_FAIL: {
			const _ = deepClone(state)
			_.conflictMessage = action.conflictMessage
			_.loading = false
			return _
		}

		// case actions.LOGIN_EXPIRED:{
		//     const _ = deepClone(state);
		//     _.timerExpired = true;
		//     return _;
		// }

		case actions.LOGIN_EXPIRED_ACK: {
			const _ = deepClone(state)
			_.timerExpired = false
			return _
		}

		case actions.LOGOUT: {
			const _ = deepClone(state)

			if (action.method === "auto") {
				_.timerExpired = true
			}
			_.idToken = null
			_.userId = null
			return _
		}

		default:
			return state
	}
}

export default reducer
