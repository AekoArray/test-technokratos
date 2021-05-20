import React, { useEffect, useState } from "react";
import UserList from "../userList";
import "./index.css";

const MainPage = () => {
    const [data, setData] = useState([]);

    const [isLoaded, setIsLoaded] = useState(false);

    const [menu, setMenu] = useState(3);

    useEffect(() => {
        getData();
    },[]);

    function getData() {
        try {
        fetch("https://watchlater.cloud.technokratos.com/get/array")
            .then((res) => res.json())
            .then((result) => {
            setData(result);
            setIsLoaded(true);
            });
        } catch (e) {
        console.log(e);
        }
    }

    function filterData() {
        if(menu === 3) {
            return data;
        } else {
            return data.filter((val) => {
            if (val.status === menu) {
                return val;
            }
            });
            }
    }

    return (
        <div className="main">
        <div className="menu">
            <a
            className={(menu === 3) ? "active" : "not-active"}
            href="#"
            onClick={() => {setMenu(3)}}
            >
            Все
            </a>
            <a
            className={(menu === 0) ? "active" : "not-active"}
            href="#"
            onClick={() => {setMenu(0)}}
            >
            Заблокированные
            </a>
            <a
            className={(menu === 1) ? "active" : "not-active"}
            href="#"
            onClick={() => {setMenu(1)}}
            >
            Активные
            </a>
        </div>
        <div className="list">
            {!isLoaded ? (
            <div>Loading</div>
            ) : (
            <UserList  data={filterData()} />
            )}
        </div>
        </div>
    );
};

export default MainPage;
