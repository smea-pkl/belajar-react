import type { Result } from "./app-context"

export async function withRequest(
    fetchFn: () => Promise<any>,
    setterFunction: (state: Result<any>) => void,
) {
    try {
        setterFunction({ type: "pending" })
        const data = await fetchFn()
        setterFunction({ type: "success", data })
    } catch (error) {
        if (error instanceof Error) {
            return setterFunction({ type: "error", message: error.message })
        }

        setterFunction({ type: "error", message: "Unknown error occurred!" })
    }
}
