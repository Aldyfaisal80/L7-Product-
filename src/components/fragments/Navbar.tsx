import { DarkWhiteToggle } from "./DarkWhiteToggle"

export const Navbar = () => {
    return (
        <nav className="block w-full max-w-full bg-transparent text-gray-900 dark:text-white shadow-none rounded-xl transition-all px-0 py-1">
            <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
                <div className="capitalize">
                    <nav aria-label="breadcrumb" className="w-max">
                        <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                            <li className="flex items-center text-gray-900 dark:text-white text-sm font-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
                                <a href="#">
                                    <p className="block text-sm font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">dashboard</p>
                                </a>
                                <span className="text-gray-500 text-sm mx-2">/</span>
                            </li>
                            <li className="flex items-center text-gray-900 dark:text-white text-sm font-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
                                <p className="block text-sm font-normal">home</p>
                            </li>
                        </ol>
                    </nav>
                    <h6 className="block text-base font-semibold leading-relaxed text-gray-900 dark:text-white">home</h6>
                </div>
                <div className="flex items-center">
                    <div className="mr-auto md:mr-4 md:w-56">
                        <div className="relative w-full min-w-[200px] h-10">
                            <input className="peer w-full h-full bg-transparent text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2.5 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-500 dark:placeholder-gray-400" placeholder="Type here" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <DarkWhiteToggle />
                        <button className="flex justify-center items-center w-10 h-10 border border-zinc-200 rounded-lg text-gray-500 dark:text-white hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav >
    )
}
