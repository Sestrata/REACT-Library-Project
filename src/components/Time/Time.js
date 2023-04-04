import { useEffect, useState } from "react";

export const Time = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setTime(new Date(), 1000))
    }, [])

    return (
        <div className="currentTime">
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
};


