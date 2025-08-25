"use client"
import { useEffect, useState } from "react";

const CountDownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!targetDate) {
      console.error("CountdownTimer: targetDate prop is required.");
      return;
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Run immediately on mount
    const timer = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [targetDate]);


  return (
    <div className="timer-container">
      {/* Days Left */}
      <div className="timer-box">
        <h5>{timeLeft.days}</h5>
        <p>Days</p>
      </div>
      <span className="colon">:</span>
      {/* Hours Left */}
      <div className="timer-box">
        <h5>{timeLeft.hours}</h5>
        <p>Hrs</p>
      </div>
      <span className="colon">:</span>
      {/* Minutes Left */}
      <div className="timer-box">
        <h5>{timeLeft.minutes}</h5>
        <p>Mins</p>
      </div>
      <span className="colon">:</span>
      {/* Seconds Left */}
      <div className="timer-box">
        <h5>{timeLeft.seconds}</h5>
        <p>Secs</p>
      </div>
    </div>
  );
};

export default CountDownTimer;