import MobileDropdown from "./mobileDropdown"

const MobileNav = () => {
    return (
        <nav>
            <div className="max-w-7xl md:px-0 bg-white flex m-auto justify-between items-center w-min float-right rounded-full py-3.5">
                <div className="">
                    <a href="/"><img className="hidden lg:flex w-20 mobile-logo" src="/images/ben-vertical-alt.svg" /></a>
                </div>
                <div className="">
                    <MobileDropdown />
                </div>
            </div>
        </nav>
    )
}

export default MobileNav
