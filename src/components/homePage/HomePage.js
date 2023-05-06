import * as React from 'react';
import './HomePage.css'

export const HomePage = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className="homePage">
            <div>
                <p className="textTitulo">Nomadas Digitales</p>
                <p className="textSubtitulo">En cualquier lugar, en cualquier momento</p>
            </div>
        </div>
    )
})