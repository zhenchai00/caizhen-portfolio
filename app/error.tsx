/**
 * Error UI Boundary for route segments 
 * refer to https://nextjs.org/docs/app/api-reference/file-conventions/error
 */

"use client"; // Error components must be Client Components

import Image from "next/image";
import { useEffect } from "react";
import catError from "../public/cat-error.png"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Image src={catError} alt="error cat" />
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    );
}
