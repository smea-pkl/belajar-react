import { useAppContext } from "./app-context"

export default function UserProfile() {
    const appContext = useAppContext()
    const userData = appContext.state.userData

    if (userData.type === "idle") {
        return
    }

    if (userData.type === "pending") {
        return <div className="size-4 animate-ping rounded-full border border-slate-400"></div>
    }

    if (userData.type === "error") {
        return (
            <div className="rounded-md border border-rose-300 bg-rose-50 px-3 py-1.5 text-rose-500">
                Error: {userData.message}!
            </div>
        )
    }

    return <>{JSON.stringify(userData.data)}</>
}
