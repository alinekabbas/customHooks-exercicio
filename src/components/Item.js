import { ItemContainer } from "./style"

export function Item(props) {
    return (
        <ItemContainer>
            <span>{props.label}</span>
            <div className="itens">
                <span>Quantidade: {props.quantity}</span>
                <button onClick={props.onDecrement}>-</button>
                <button onClick={props.onReset}>Resetar</button>
                <button onClick={props.onIncrement}>+</button>
            </div>
        </ItemContainer>
    )
}