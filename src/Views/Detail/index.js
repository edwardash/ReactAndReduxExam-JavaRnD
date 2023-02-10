import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toastr } from 'react-redux-toastr'
import { useSelector } from "react-redux";



const DetailPage = () => {



    const data1 = useSelector(state => state.allData);
    const [thisPageID, setthisPageID] = useState(useParams().id)
    // const parameters = useParams();



    useLayoutEffect(() => {
        searchInArrayItem(data1, thisPageID);
    }, [thisPageID, data1])

    const navigate = useNavigate();




    let pushToHomePage = () => {
        navigate(`/`);
    }





    const [thisData, setthisData] = useState();


    const searchInArrayItem = (arr, id) => {

        let flag = false;

        arr.map((arrIt) => {
            if (id == arrIt.id) {
                setthisData(arrIt);
                flag = true;
                return;
            }
        });


        if (flag === false) {
            toastr.error('Wrong Product ID', "Redirecting")
            setTimeout(() => {
                pushToHomePage();
            }, 1000);
        }


    }



    const addToCart = (id) => {
        let localSt = localStorage.getItem("cart");
        if (localSt) {
            let nData = JSON.parse(localSt);

            if (searchInArray(nData, id) == true) {
            } else {
                nData.push(id);
                localStorage.setItem("cart", JSON.stringify(nData));
            }
        } else {
            let arr = [];
            arr.push(id);
            localStorage.setItem("cart", JSON.stringify(arr));
        }
    }


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

        <>
            {
                thisData ?
                    <div style={{ height: '100vh', overflow: 'hidden', width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '60%', height: '100%', margin: 'auto' }}>
                            <div style={{ height: '50%', border: '2px solid black', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }}>
                                <div>
                                    <img src={thisData.image} alt={"product.name"} style={{ width: '20rem', height: '20rem' }} />
                                </div>
                                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: "2px" }}>

                                    <div style={{ margin: "2px" }}>
                                        <p style={{ margin: 0 }}>{thisData.name}</p>
                                        <p style={{ margin: 0 }}>{thisData.des}</p>
                                        <p style={{ margin: 0 }}>{thisData.price}</p>
                                    </div>
                                    <div>
                                        <button style={{ width: '100%', padding: '10px', borderRadius: '5px', background: 'wheat', margin: "2px" }}

                                            onClick={
                                                () => addToCart(thisData.id)
                                            }

                                        >Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    :

                    null

            }
        </>
    )
}

export default DetailPage