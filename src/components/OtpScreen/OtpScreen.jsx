import "./OtpScreen.css";
import React, { useState, useEffect, useRef } from 'react';

function OtpScreen() {
    const [otp, setOtp] = useState(['', '', '', '', '']); // Array to store OTP digits
    const otpInputRefs = useRef([]); // Refs for OTP input fields
    const [timer, setTimer] = useState(180);
    const [timerExpired, setTimerExpired] = useState(false); // State to track if timer has expired

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    clearInterval(interval); // Clear the interval when timer reaches 0
                    setTimerExpired(true); // Set timerExpired to true when timer reaches 0
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Focus the first OTP input field when the component mounts
        if (otpInputRefs.current[0]) {
            otpInputRefs.current[0].focus();
        }
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleInputChange = (index, event) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = event.target.value;
        setOtp(updatedOtp);
    
        // Move to the next input field if available
        if (event.target.value !== '' && index < otp.length - 1 && otpInputRefs.current[index + 1]) {
            otpInputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace" && index > 0 && !otp[index] && otpInputRefs.current[index - 1]) {
            // Move focus to the previous input field on backspace
            const previousInput = otpInputRefs.current[index - 1];
            previousInput.focus();
        }
    };

    return (
        <div className="otp-container-main">
            <div className="otp-main">
                <h2>Verify Account</h2>
                <div>
                    <p>Enter the six-digit code we sent to your email address to verify your SOC360 Account.</p>
                </div>
                <div>
                    <p>Verification code</p>
                    <div className="otp-inputs">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(ref) => otpInputRefs.current[index] = ref}
                                type="text"
                                value={digit}
                                onChange={(event) => handleInputChange(index, event)}
                                onKeyDown={(event) => handleKeyDown(index, event)}
                                maxLength={1}
                                autoFocus={index === 0} // Focus the first input field initially
                                className="otp-input"
                            />
                        ))}
                    </div>
                    <div className="otp-timer">
                        <div className="timer">
                            {formatTime(timer)}
                        </div>
                    </div>
                </div>
                <span className="forget">Didn’t you receive the OTP?{' '}
                    <span className={timerExpired ? 'resendTextEnable' : 'resendTextDisable'}>
                        <b>Resend OTP</b>
                    </span>
                </span>
            </div>
        </div>
    );
}

export default OtpScreen;
