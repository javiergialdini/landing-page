import * as React from 'react';
import './Nosotros.css'

export const Nosotros = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className="nosotros">
            <div>
                <p className="textTituloNosotros">NOSOTROS</p>
                <p className="textSubtituloNosotros">En cualquier lugar, en cualquier momento</p>
            </div>
        </div>
    )
})