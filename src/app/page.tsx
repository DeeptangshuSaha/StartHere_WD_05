'use client';
import Fetch from "@/app/apiCall";

export default function Home() {
    return (
        <>
            <div className="quote flex-col text-center my-56 mx-auto w-3/4">
                <div className="text-center text-xl p-3.5">A quote for the day</div>
                <Fetch />
            </div>
        </>
    );
}
