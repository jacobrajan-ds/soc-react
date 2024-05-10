import "./OtpScreen.css";
import React, { useState, useEffect, useRef } from 'react';

function OtpScreen() {
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const otpInputRefs = useRef([]);
    const [timer, setTimer] = useState(180);
    const [timerExpired, setTimerExpired] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    clearInterval(interval);
                    setTimerExpired(true);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
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

        if (event.target.value !== '' && index < otp.length - 1 && otpInputRefs.current[index + 1]) {
            otpInputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace" && index > 0 && !otp[index] && otpInputRefs.current[index - 1]) {
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
                                autoFocus={index === 0}
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
