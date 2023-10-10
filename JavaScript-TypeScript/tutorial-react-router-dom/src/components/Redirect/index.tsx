import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Redirect = () => {
  const [time, setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if(time < 0){
      navigate('/', {
        state: `Isso é o estado: ${Math.random()}`,
      });
    }

    return () => {
      clearTimeout(timeout.current);
    }
  }, [navigate, time]);

  return (
    <div>
      <h1>Você vai ser direcionado ao HOME em: {time}</h1>
    </div>
  );
};
