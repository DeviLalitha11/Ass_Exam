import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useWindowSize from 'react-use/lib/useWindowSize'
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

function Exam() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const { width, height } = useWindowSize()

  useEffect(() => {
    const handleCopy = (e) => {
      e.preventDefault();
      toast.error("Copy Detected!!!");
    };

    const handlePaste = (e) => {
      e.preventDefault();
      toast.error('Paste Detected!!!');
    };

    const handleVisibilityChange = (e) => {
      if (document.hidden) {
        toast.error('Exam cancelled');
      } else {
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    };

    window.addEventListener('copy', handleCopy);
    window.addEventListener('paste', handlePaste);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('copy', handleCopy);
      window.removeEventListener('paste', handlePaste);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [navigate]);

  const checkAnswer = (e) => {
    e.preventDefault();
    if (answer === 'Laptop') {
      toast.success('Yeah, Correct Answer');
      Conf.call()
    } else {
      toast.error('Wrong Answer, Try Again');
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse mt-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Exam Time!</h1>
            <p className="text-2xl font-bold mt-4">
              Que: What is the thing in front of you?
            </p>
            <input
              type="text"
              placeholder="Type your answer"
              className="input input-bordered input-accent w-full max-w-xs mt-4"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button
              className="btn btn-primary mt-4 p-3 font-semibold text-2xl ml-20"
              onClick={checkAnswer}
            >
              Submit
            </button>
            
          </div>
        </div>
      </div>
      <Confetti 
       width={width}
       height={height}
      />
    </>
  );
}

export default Exam;
