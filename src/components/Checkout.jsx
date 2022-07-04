import React from 'react'
import {useState, useContext} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {CarritoContext} from '../context/CartContext';
import {Link} from 'react-router-dom';
import CartTable from './CartTable';
import { addDoc, collection, getFirestore } from "firebase/firestore";

function Checkout() {
    const { carrito, setCarrito, mostrarItemCount, setMostrarItemCount, clear, resultado } = useContext(CarritoContext);
    const [sendedForm, setSendedForm] = useState(false);
    const [orderId, setorderId] = useState('');
        
    const db = getFirestore();
    let orderCollection = collection(db, 'orders');

  return (
    <div className='container'>
        <div className='row pt-5 pb-2'>
            { orderId ? <div className='col-md-12 p-5 text-center'><div className="alert alert-success mt-2" role="alert"><h2>Gracias por comprar con nosotros</h2><p>El id de tu compra es: {orderId}</p><br /><Link type="button" to="/" className="btn btn-primary m-1">REGRESAR A LA TIENDA</Link> </div></div> :
                <>
                    <div className='col-lg-6 pb-5'>
                        <h1>Checkout</h1>
                        <p>Llena el formulario para completar tu pedido</p>
                        <Formik
                            initialValues={{
                                nombre: '',
                                email: '',
                                celular: ''
                            }}
                            validate={(valores)=>{
                                let errores = {};

                                //Validacion Nombre
                                if(!valores.nombre){
                                    errores.nombre = 'Por favor llena el campo con tu nombre completo'
                                }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                                    errores.nombre = 'El campo solo acepta letras y espacios'
                                }

                                //Validacion Email
                                if(!valores.email){
                                    errores.email = 'Por favor ingresa un correo válido'
                                }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                                    errores.email = 'El formato del correo no es correcto'
                                }

                                //Validacion Celular
                                if(!valores.celular){
                                    errores.celular = 'Por favor ingresa tu número celular'
                                }else if(!/^\+?([0-9]{2})\)?[-. ]?([0-9]{2})[-. ]?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(valores.celular)){
                                    errores.celular = 'Ingresa un número de 12 dígitos con clave lada ej. +52-55-9999-0000'
                                }

                                return errores;
                            }}
                            onSubmit={(valores, actions) => {
                                setSendedForm(true);
                                const order={
                                    buyer: {name: valores.nombre, email:valores.email, celular:valores.celular},
                                    items: carrito,
                                    total: resultado
                                };
                                console.log(order);
                                addDoc(orderCollection, order).then(({id})=>{                                    
                                    setTimeout(() => {
                                        actions.setSubmitting(false);
                                        actions.resetForm();
                                        setorderId(id);
                                        clear();
                                    }, 5000);
                                });
                            }}
                        >
                            {({isSubmitting, errors})=>(
                                <Form>
                                    <div className="form-group mb-3">
                                        <label htmlFor="nombre">Nombre</label>
                                        <Field
                                            className="form-control" 
                                            type="text" 
                                            id='nombre' 
                                            name='nombre' 
                                            placeholder='Juan Pablo Gutierrez Fierro' 
                                        />
                                        <ErrorMessage name="nombre" component={()=>(
                                            <div className="invalid-feedback" style={{display:'block'}}>{errors.nombre}</div>
                                        )} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email">Email</label>
                                        <Field 
                                            className="form-control" 
                                            type="email" 
                                            id='email' 
                                            name='email' 
                                            placeholder='correo@correo.com' 
                                        />
                                        <ErrorMessage name="email" component={()=>(
                                            <div className="invalid-feedback" style={{display:'block'}}>{errors.email}</div>
                                        )} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="celular">Celular</label>
                                        <Field 
                                            className="form-control" 
                                            type="text" 
                                            id='celular' 
                                            name='celular' 
                                            placeholder='+52-55-9999-0000'
                                        />
                                        <ErrorMessage name="celular" component={()=>(
                                            <div className="invalid-feedback" style={{display:'block'}}>{errors.celular}</div>
                                        )} />
                                    </div>
                                    <button type='submit' className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Por favor espera..." : "Comprar Ahora"}</button>
                                    {sendedForm && 
                                        <div className="alert alert-info mt-2" role="alert">
                                            Tu compra se está procesando...
                                        </div>
                                    }
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className='col-lg-6'>
                        <h1>Tu carrito de compras</h1>
                        <hr />
                        <CartTable />
                    </div>
                </>
            }
        </div>
    </div>
  )
}

export default Checkout