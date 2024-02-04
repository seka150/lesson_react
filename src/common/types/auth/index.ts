import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

export interface IPropsLogin <TFieldVlues extends FieldValues = FieldValues, 
    TContext = any,>{
    navigate : (to : string) => void
    register: UseFormRegister<TFieldVlues>
    errors: FieldErrors<TFieldVlues>
}

export interface IPropsRegister {
    setEmail : (value : string) => void
    setPassword : (value : string) => void
    setRepeatPassword : (value : string) => void
    setFirstName : (value : string) => void
    setUsername : (value : string) => void
    navigate : (to : string) => void
}

export interface IAuthState {
    user: {
        user: IPublicUser
        token: string
    },
    isLogged: boolean
}

export interface IPublicUser {
    id: number | null
    firstName: string
    username: string
    email: string
    createdAt: string
    updatedAt: string
    watchlist: [IWatchlist]
}

interface IWatchlist {
    id: number | null,
    name: string,
    assetId: string,
    createdAt: string,
    updatedAt: string,
    user: number | null
}