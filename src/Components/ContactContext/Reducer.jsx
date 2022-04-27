import {makeUniqueId} from "../data";

export const Reducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case "handleDeleteUsers" :
            return (
                state.filter(item => item.id !== payload.id)
            )
        case "HandleEdit" :
            return (
                state.map(oldUser => payload.user.id === oldUser.id ? payload.user : oldUser)
            )
        case "HandleAdd" :
            return (
                [...state, {id: makeUniqueId(), ...payload.user}]
            )
        default: return state
    }
}