import { useState } from "react";

export function useCounter(valorInicial, set){
    const [quantity, setQuantity] = useState(valorInicial);

    const somar = ()=> setQuantity(quantity + set)
    const subtrair = ()=> setQuantity(quantity - set)
    const resetar = ()=> setQuantity(0)

    return {quantity, somar, subtrair, resetar}

}

