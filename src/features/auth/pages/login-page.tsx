import Link from "next/link";

export const LoginPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-md rounded-lg p-8 shadow-lg border border-zinc-50">
                <h2 className="mb-6 text-center text-2xl font-bold">Login Form</h2>
                <form className="flex flex-col gap-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-white">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col gap-4 mt-6">
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-black px-4 py-2 font-semibold text-white hover:bg-gray-800 focus:outline-none"
                        >
                            Login
                        </button>
                        <Link href={"/dashboard"}>
                            <button className="w-full rounded-lg bg-black px-4 py-2 font-semibold text-white hover:bg-gray-800 focus:outline-none">
                                Back
                            </button>
                        </Link>
                    </div>
                </form>
                <p className="mt-4 text-center text-sm text-gray-700 dark:text-white">
                    Dont have an account?{" "}
                    <Link href="/register" className="text-blue-500 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}
