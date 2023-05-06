import * as React from 'react';
import './ProductContainer.css'

export const ProductContainer = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className="product">
            <div>
                <p className="textTitulo">Productos</p>
                <p className="textSubtitulo">En cualquier lugar, en cualquier momento</p>
            </div>
        </div>
    )
})