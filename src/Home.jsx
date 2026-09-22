import { useState } from "react";
import './Home.css';

function base2_8(number) {
    return parseInt(number, 2).toString(8);
}

function base2_10(number) {
    return parseInt(number, 2).toString(10);
}

function base2_16(number) {
    return parseInt(number, 2).toString(16).toUpperCase();
}

function base8_2(number) {
    return parseInt(number, 8).toString(2);
}

function base8_10(number) {
    return parseInt(number, 8).toString(10);
}

function base8_16(number) {
    return parseInt(number, 8).toString(16).toUpperCase();
}

function base10_2(number) {
    return parseInt(number, 10).toString(2);
}

function base10_8(number) {
    return parseInt(number, 10).toString(8);
}

function base10_16(number) {
    return parseInt(number, 10).toString(16).toUpperCase();
}

function base16_2(number) {
    return parseInt(number, 16).toString(2);
}

function base16_8(number) {
    return parseInt(number, 16).toString(8);
}

function base16_10(number) {
    return parseInt(number, 16).toString(10);
}

export default function Home() {
    const [currentBase, setCurrentBase] = useState('base10');
    const [finalBase, setFinalBase] = useState('base10');
    const [inputValue, setInputValue] = useState('');

    const handleConversion = () => {
        if (!inputValue) return '';
        if (currentBase === finalBase) return inputValue;

        const functionName = `${currentBase}_${finalBase.replace('base', '')}`;
        
        try {
            const conversionFunctions = {
                base2_8, base2_10, base2_16,
                base8_2, base8_10, base8_16,
                base10_2, base10_8, base10_16,
                base16_2, base16_8, base16_10
            };

            const result = conversionFunctions[functionName](inputValue);
            return isNaN(result) || result.includes('NaN') ? 'Invalid Input' : result;
        } catch {
            return 'Invalid Input';
        }
    };

    return (
        <>
            <div className="userinputs">
                <label htmlFor="currentbase">Select Your current Base</label>
                <select id="currentbase" value={currentBase} onChange={(e) => setCurrentBase(e.target.value)}>
                    <option value="base2">Base 2 (Binary)</option>
                    <option value="base8">Base 8 (Octal)</option>
                    <option value="base10">Base 10 (Decimal)</option>
                    <option value="base16">Base 16 (Hexadecimal)</option>
                </select>

                <label htmlFor='finalbase'>Select Where you want to convert to.</label>
                <select id="finalbase" value={finalBase} onChange={(e) => setFinalBase(e.target.value)}>
                    <option value="base2">Base 2 (Binary)</option>
                    <option value="base8">Base 8 (Octal)</option>
                    <option value="base10">Base 10 (Decimal)</option>
                    <option value="base16">Base 16 (Hexadecimal)</option>
                </select>

                <label htmlFor="userInput">Enter Your value:</label>
                <input 
                    id="userInput"
                    placeholder="e.g 5" 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <div className="output">
                <h3>Result: {handleConversion()}</h3>
            </div>
        </>
    );
}
