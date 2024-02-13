import { Route, Routes } from "react-router-dom"

const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                <Route path="/sign-in" element={<SignInForm />}>

                </Route>
                <Route index element={<Home />}>

                </Route>
            </Routes>
        </main>
    )
}

export default App