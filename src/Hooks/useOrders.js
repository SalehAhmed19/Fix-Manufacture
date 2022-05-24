import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  //   const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://stark-basin-47833.herokuapp.com/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  return [orders, setOrders];
};
export default useOrders;
