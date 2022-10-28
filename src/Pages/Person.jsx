import { Outlet, Navigate } from 'react-router-dom';
import { useState } from 'react';



const Person = () => {
    const [login, setLogin] = useState(false);
    const [git, setGit] = useState(false);
  return (
    <>
    <button className="btn btn-primary" onClick={()=> setLogin(!login)}>Person detay getir</button>
    <button className="btn btn-primary" onClick={()=> setGit(!git)}>Anasayfa Navigate component kullanımı</button>
    <div>Person</div>
    { login && <Outlet />  }
    { git && <Navigate to="/" />  }
    </>
  )
}

export default Person