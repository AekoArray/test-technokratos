import React, { useState } from "react";
import Modal from "../modal";
import "./index.css";

const UserList = ({ data }) => {

    const [modalShow, setModalShow] = useState(false);

    const [modalData, setModalData] = useState({});

    function handleClick(item) {
        setModalShow(true);
        setModalData(item);
    }

    return (
        <div>
            <ul className="list">
            {data.length &&
            data.map((item) => <li key={item.id} onClick={() => handleClick(item)}>
                <img src={item.avatar} alt="ой"/>
                <a className="fio">{item.name} {item.fname.charAt(0)}. {item.mname.charAt(0)}.</a>
                <a className="balance">Баланс: {item.balance.toFixed(2)}</a>
                <a className="date">Последнее изменение: {item.lastUpdatedAt.substr(0,10)}</a>
                <a className="status">{(item.status === 0) ? "Заблокирован" : (item.status === 1) ? "Подписка активна" : "Приостановлена"}</a>
                </li>)}
            </ul>
            <Modal data={modalData} show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    );
};

export default UserList;
