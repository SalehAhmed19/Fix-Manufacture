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
    // const getOrder = async () => {
    //   const url = `http://localhost:4000/orders?email=${user.email}`;
    //   try {
    //     const { data } = await axios.get(url);
    //     setOrders(data);
    //   } catch (error) {
    //     if (error) {
    //       signOut(auth);
    //       navigate("/login");
    //     }
    //   }
    // };
    // getOrder();
    fetch(`http://localhost:4000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  return [orders, setOrders];
};
export default useOrders;
