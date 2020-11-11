import React from "react";
import { useState, useMemo, useEffect } from "react";
import TableContainer from "./TableContainer";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TableComponent(props) {
    const [drinkData, setDrinkData] = useState([]);

    useEffect(() => {
        fetch('/api/json/v1/1/search.php?s=')
      .then(res => res.json())
      .then(data => setDrinkData(data.drinks));
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: 'Drink Name',
                accessor: 'strDrink',
            },
            {
                Header: 'Category',
                accessor: 'strCategory',
            },
            {
                Header: 'IngredientList',
                accessor: (value) => {
                    return  `${value.strIngredient1 ? value.strIngredient1 : ""}
                ${value.strIngredient2 ? "," + value.strIngredient2 : ""}
                ${value.strIngredient3 ? "," + value.strIngredient3 : ""}
                ${value.strIngredient4 ? "," + value.strIngredient4 : ""}
                ${value.strIngredient5 ? "," + value.strIngredient5 : ""}
                ${value.strIngredient6 ? "," + value.strIngredient6 : ""}
                ${value.strIngredient7 ? "," + value.strIngredient7 : ""}
                ${value.strIngredient8 ? "," + value.strIngredient8 : ""}
                ${value.strIngredient9 ? "," + value.strIngredient9 : ""}
                ${value.strIngredient10 ? "," + value.strIngredient10 : ""}
                ${value.strIngredient11 ? "," + value.strIngredient11 : ""}
                ${value.strIngredient12 ? "," + value.strIngredient12 : ""}
                ${value.strIngredient13 ? "," + value.strIngredient13 : ""}
                ${value.strIngredient14 ? "," + value.strIngredient14 : ""}
                ${value.strIngredient15 ? "," + value.strIngredient15 : ""}`},
            }
        ],
        []
      );

    return(
        <div>
            <Container style={{ marginTop: 100 }}>
                <TableContainer columns={columns} data={drinkData} />
            </Container>
        </div>
    );
}

export default TableComponent;
