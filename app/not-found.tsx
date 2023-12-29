/**
 * Render UI when not found 
 * Refer to https://nextjs.org/docs/app/api-reference/file-conventions/not-found
 */
import catLagging from "../public/cat-brain-lag.gif";
import Image from "next/image";
import { Button } from "@mui/material";

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h2 className="text-4xl">404 Not Found</h2>
            <Image
                src={catLagging}
                alt="loading gif"
                className="p-2"
            />
            <h3>Could not find requested resource</h3>
            <Button
                variant="contained"
                href="/"
            >
                Return Home
            </Button>
        </div>
    );
}
