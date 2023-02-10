import React, { useEffect } from 'react';
import Routes from './Routes';
import ReduxToastr from 'react-redux-toastr';
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from '../src/Actions/index.js';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.allData);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <nav style={{ backgroundColor: "black", padding: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <a href="/" style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>
              ShooppyFI XYZ
            </a>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a href="/cart" style={{ color: "white", textDecoration: "none", paddingRight: "10px" }}>Cart</a>
          </div>
        </div>
      </nav>

      <Routes />

      <ReduxToastr
        // timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        getState={(state) => state.toastr}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick />

    </>
  );
}

export default App;
