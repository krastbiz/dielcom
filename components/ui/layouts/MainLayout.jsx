import { AppHeader } from "../../Common/AppHeader"

export const MainLayout = ({ children }) => {

    return (
        <>
            <AppHeader />
            <main>{children}</main>
        </>
    )
}
