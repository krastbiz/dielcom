import { AppFooter } from "../../Common/AppFooter"
import { AppHeader } from "../../Common/AppHeader"

export const MainLayout = ({ children }) => {

    return (
        <>
            <AppHeader />
            <main>{children}</main>
            <AppFooter />
        </>
    )
}
