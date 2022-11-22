import {Item} from "../components/Item"
import { useCounter } from "../hooks/useCounter";

export function Cart() {
    const quantity = useCounter(0, 1);
  
    return (
      <div className="Cart">
        <h1>Meu Carrinho</h1>
        <Item
          label="Meu produto massa"
          quantity={quantity.quantity}
          onIncrement={quantity.somar}
          onDecrement={quantity.subtrair}
          onReset={quantity.resetar}
        />
      </div>
    );
  }