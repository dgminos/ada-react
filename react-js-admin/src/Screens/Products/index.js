import React from "react";
import Layout from "../../Layout/";
import Main from "../../Main";

import { useMath } from "../../hooks";

const Products = () => {
    const { calcularIva, calcularSubtotal, calcularTotal } = useMath();

    return (
        <Layout title="Productos">
            <Main>
                <h1>Products</h1>

                <table>
                    <thead>
                        <th>id</th>
                        <th>name</th>
                        <th>iva</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Samsung Galaxy S20</td>
                            <td>{calcularIva(120000)}</td>
                            <td>{calcularSubtotal(3, 120000)}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>{calcularTotal(360000, 1234)}</td>
                        </tr>
                    </tfoot>
                </table>
            </Main>
        </Layout>
    );
};

export { Products };