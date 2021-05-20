import React from "react";
import "./index.css";

const Modal = ({ data, show, onHide }) => {
    return (
        <div className="modal" style={show ? ({"display":"flex"}) : ({"display":"none"})}>
            <div className="modal-content">
            <div className="modal-header">
                <span className="close" onClick={onHide}>×</span>
                <h2>{data.fname} {data.name}</h2>
            </div>
            <div className="modal-body">
                <p>{data.name}</p>
                <p>{data.fname}</p>
                <p>{data.mname}</p>
                <p>{(data.status === 0) ? "Заблокирован" : (data.status === 1) ? "Подписка активна" : "Приостановлена"}</p>
            </div>
        </div>
        </div>
    );
};

export default Modal;
