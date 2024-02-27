import { createSlice } from "@reduxjs/toolkit"
import { IAuthState, IPublicUser} from '../../../common/types/auth'
import { loginUser, registerUser } from "../../thunks/auth"

const initialState: IAuthState = {
    user: {
        token: '',
        user: {} as IPublicUser,
    },
    isLogged: false,
    isLoading: false
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state)=> {
            state.isLogged = false
            state.isLoading = true
        })
        builder.addCase(loginUser.fulfilled, (state, action)=> {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        builder.addCase(loginUser.rejected, (state)=> {
            state.isLogged = false
            state.isLoading = false
        })
        builder.addCase(registerUser.pending, (state)=> {
            state.isLogged = false
            state.isLoading = true
        })
        builder.addCase(registerUser.fulfilled, (state, action)=> {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        builder.addCase(registerUser.rejected, (state)=> {
            state.isLogged = false
            state.isLoading = false
        })
    }
})

export default authSlice.reducer