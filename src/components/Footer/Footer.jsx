import React from 'react';
import s from './Footer.module.css';


const Header = (props) => {
    return (
        <div className={s.footer}>
            <div className={s.content}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiTw2MT6LqX52c7quNm2lfZCwYQkRBMyrxQ&usqp=CAU' />
            </div>
        </div>
    )
}

export default Header;