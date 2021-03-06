import React from 'react'
import "./Alert.css"
import { ExclamationCircleFill } from "react-bootstrap-icons";
import { CheckCircleFill } from "react-bootstrap-icons";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import { InfoCircleFill } from "react-bootstrap-icons";


const Alert = ({ status, mensaje }) => {

    let icon = null;
    switch (status) {
        case 'danger':
            icon = <ExclamationCircleFill />
            break;
        case 'success':
            icon = <CheckCircleFill />
            break;
        case 'warning':
            icon = <ExclamationTriangleFill />
            break;
        case 'info':
            icon = <InfoCircleFill />
            break;
        default:
            icon = <InfoCircleFill />
    }

    return (
        <div className={`container ${status}`}>
            <span className='icon'>
                {icon}
            </span>
            <span className='message'>
                {mensaje}
            </span>

        </div>
    )
}
export default Alert 