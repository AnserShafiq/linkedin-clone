import React,{ useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feeds from "./components/Feeds";
import {useSelector,useDispatch} from "react-redux";
import {selectUser} from "./features/userSlice";
import {login,logout} from "./features/userSlice";
import Login from "./components/Login";
import {auth} from "./firestore";

function App() {
  const user=useSelector(selectUser);

  const dispatch=useDispatch();
  
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      // If user got Logged In
      if(userAuth){
        dispatch(
          login({
            Email:userAuth.email,
            FullName:userAuth.displayName,
            ProfileURL:userAuth.photoURL,
          })
        );
      }
      // User not logged In
      else{
        dispatch(logout());
      }
    });
  },[]);

  return (
    <>
      {!user ? (<Login />) :
      (<div className="app">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Feeds />
        </div>
      </div>
      )}
    </>
  );
}

export default App;