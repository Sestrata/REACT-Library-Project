import { useRef, useState, useEffect } from 'react';

export const TypeWriter = ({ text }) => {
    const index = useRef(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setCurrentText((value) => value + text.charAt(index.current));
            index.current += 1;
        }, 50);
    }, [currentText]);

    return (
        <h1>{currentText}</h1>
        
    );
};







