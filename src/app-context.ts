import { createContext, useContext } from "react"

export type Result<T> =
    | {
          type: "idle"
      }
    | {
          type: "pending"
      }
    | {
          type: "success"
          data: T
      }
    | {
          type: "error"
          message: string
      }

export type UserData = {
    username: string
    email: string
}

export type AppState = {
    userData: Result<UserData>
}

export type IAppContext = {
    state: AppState
    changeState: {
        changeUserData: ChangeUserData
    }
}

export type ChangeUserData = (userData: Result<UserData>) => void

export const AppContext = createContext<IAppContext | null>(null)

export function useAppContext() {
    const ctx = useContext(AppContext)

    if (!ctx) {
        throw Error("useAppContext must be called within Provider")
    }

    return ctx
}

export const AppContextProvider = AppContext.Provider
