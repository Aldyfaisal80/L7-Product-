'use client';
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
            <button
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={() => router.back()}
            >
                Go Back Home
            </button>
        </div>
    );
}

export default NotFound;