import React from 'react';
import './styles.scss';


type Props = {
    text:string;
}
const BlueButton = ({text}:Props) => (
    <button >
        <h5>{text}</h5>
    </button>


)

export default BlueButton;