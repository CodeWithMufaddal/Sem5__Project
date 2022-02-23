import React from 'react';
import { Link, useNavigate } from 'react-router-dom'


const OrderHistory = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem('token')
  return !token ? navigate("/login") : <div>

    This is order history for user
  </div>;
};

export default OrderHistory;
