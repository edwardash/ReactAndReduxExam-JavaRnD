import React, { useState, useEffect, useLayoutEffect } from 'react'
import ProductList from '../Home/ProductList';
import { useSelector } from "react-redux";
const CartPage = () => {


    const [arrOfCart, setarrOfCart] = useState();

    const [localStList, setlocalStList] = useState();

    let data1 = useSelector(state => state.allData);
    let localSt = localStorage.getItem("cart");

    useEffect(() => {
        if (localSt)
            setlocalStList(JSON.parse(localSt));
    }, []);


    useEffect(() => {
        if (localSt)
            setlocalStList(JSON.parse(localSt));
    }, [localSt]);




    useLayoutEffect(() => {
        let arr = [];
        if (localStList)
            localStList.map((item) => {
                data1.map((itemInside) => {
                    if (item === itemInside.id) {
                        arr.push(itemInside);
                    }
                })
            })
        setarrOfCart(arr);
    }, [localStList, data1])



    useEffect(() => {
    }, [arrOfCart])
    const searchInArray = (arr, item) => {
        let flag = false;
        arr.map((arrIt) => {
            if (item == arrIt) {
                flag = true;
            }
        });
        return flag;
    }




    return (
        <div>
            {arrOfCart ? <ProductList products={arrOfCart} /> : null}
        </div>
    )
}

export default CartPage