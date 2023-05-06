import * as React from 'react';
import './Footer.css'

export const Footer = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className="footer">
            <div>
                <p className="textTitulo">CONTACTO</p>
                <p className="textSubtitulo">En cualquier lugar, en cualquier momento</p>
            </div>
        </div>
    )
})