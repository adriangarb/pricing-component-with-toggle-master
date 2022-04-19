import React from 'react'

export default function Componente(props) {
    const { plan,price,storage,users,send } = props
    return (
        <div className="componente__container">
            <div className="componenete__container__texts">
                <h2>{plan}</h2>
                <h1 align="center"><span>$</span>{price}</h1>
            </div>
            <div className="componenete__container__info">
                <h3>{storage} Storage</h3>
                <h3>{users} Users Allowed</h3>
                <h3>Send up to {send}</h3>
            </div>
            <button>LEARN MORE</button>
        </div>
    )
}
