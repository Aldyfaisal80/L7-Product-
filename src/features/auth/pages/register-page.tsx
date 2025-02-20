import Link from "next/link";

export const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-8 rounded-lg shadow-lg max-w-md w-full border border-zinc-50">
                <h2 className="text-2xl font-bold mb-6 text-center">Register Form</h2>
                <form className="flex flex-col gap-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col gap-4 mt-6">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none"
                        >
                            Register
                        </button>
                        <Link href={"/dashboard"}>
                            <button className="w-full rounded-lg bg-black px-4 py-2 font-semibold text-white hover:bg-gray-800 focus:outline-none">
                                Back
                            </button>
                        </Link>
                    </div>
                </form>
                <p className="mt-4 text-center text-sm text-gray-700 dark:text-white">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};
