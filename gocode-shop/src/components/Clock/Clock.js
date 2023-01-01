import {useEffect, useState} from 'react'

const Clock = () => {
    const [clock, setClock] = useState(new Date().toLocaleTimeString());
    
    useEffect(() => {
        let id = setInterval(() => {
          setClock(new Date().toLocaleTimeString());
        }, 1000);
        
      return () => clearInterval(id);
    }, []);
  
    return <h1>{clock}</h1>;
}

export default Clock