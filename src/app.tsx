import { create } from "mutative"
import { useEffect, useState } from "react"
import { AppContextProvider, type AppState, type Result, type UserData } from "./app-context"
import { fetchUserData } from "./fetch-user-data"
import UserProfile from "./user-profile"
import { withRequest } from "./with-request"

export default function App() {
    const [appState, setAppState] = useState<AppState>({
        userData: { type: "idle" },
    })

    function changeUserData(userData: Result<UserData>) {
        setAppState((state) => {
            return create(state, (draft) => {
                draft.userData = userData
            })
        })
    }

    useEffect(() => {
        withRequest(fetchUserData, changeUserData)
    }, [])

    return (
        <AppContextProvider value={{ state: appState, changeState: { changeUserData } }}>
            <div className="flex h-dvh flex-col items-center justify-center gap-3 text-slate-800">
                <div className="rounded-md border border-slate-300 p-4">
                    {JSON.stringify(appState.userData)}
                </div>
                <UserProfile />
            </div>
        </AppContextProvider>
    )
}
