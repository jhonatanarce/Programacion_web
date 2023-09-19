import React, { useState, useEffect } from "react";
import "../Styles/productos.css";
import ProductItem from "./ProductItem";
import axios from "axios";

function Dashboard() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    axios
      .get("http://89.116.25.43:3500/api/productos/listar", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProductos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de productos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-list">
          {productos.length > 0 ? (
            productos.map((producto) => (
              <ProductItem key={producto.id} producto={producto} />
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Dashboard;


