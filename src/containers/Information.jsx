import React, { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AppContext} from '../context/AppContext';
import { useForm } from "react-hook-form";
import '../styles/components/Information.css';

function Information() {
  const {state, addToBuyer} = useContext(AppContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const {cart} = state;
  const navigate = useNavigate();

  const onSubmit = (data) => {
    addToBuyer(data);
    navigate('/checkout/payment');
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nombre completo" {...register("name", { required: true })} />
            {errors.name && <span>This field is required</span>}

            <input type="text" placeholder="Correo Electronico" {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}

            <input type="text" placeholder="Direccion" {...register("address", { required: true })} />
            {errors.address && <span>This field is required</span>}

            <input type="text" placeholder="apto" {...register("apto", { required: true })} />
            {errors.apto && <span>This field is required</span>}

            <input type="text" placeholder="Ciudad" {...register("city", { required: true })} />
            {errors.city && <span>This field is required</span>}

            <input type="text" placeholder="Pais" {...register("country", { required: true })} />
            {errors.country && <span>This field is required</span>}

            <input type="text" placeholder="Estado" {...register("state", { required: true })} />
            {errors.state && <span>This field is required</span>}

            <input type="text" placeholder="Codigo postal" {...register("cp", { required: true })} />
            {errors.cp && <span>This field is required</span>}

            <input type="text" placeholder="Telefono" {...register("phone", { required: true })} />
            {errors.phone && <span>This field is required</span>}

            <div className="Information-buttons">
              <div className="Information-back"><Link to={'/checkout'}>Regresar</Link></div>
              <div className="Information-next">
                <button type="submit">Pagar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(item => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export {Information};