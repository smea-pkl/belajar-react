export function fetchUserData(): Promise<{ username: string; email: string }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({ email: "email@gmail.com", username: "username" })
            reject(Error("Auuuuuu"))
        }, 2000)
    })
}
