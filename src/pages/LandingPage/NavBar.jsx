
import { useNavigate } from "react-router-dom"
import DefaultButton from "../../components/Modules/LandingPage/DefaultButton"
import { OptionLanguage } from "../../components/Modules/LandingPage/OptionLanguange"





function NavBar() {

    const navigate = useNavigate()

    return (
        <header className="relative z-20">
            <nav className="flex flex-wrap justify-between items-center pr-10 pl-7 py-4">
                <div>
                    <img src="netflix-logo-icon.png" alt="Netflix-Logo" width={105} height={45} ></img>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <OptionLanguage />
                    <DefaultButton text={"Sign In"} onClick={() => { navigate("/login") }} />
                </div>
            </nav>
        </header>
    )
}

export default NavBar

