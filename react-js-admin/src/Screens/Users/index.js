import React, { useState } from "react";
import Layout from "../../Layout";
import Main from "../../Main";
import data from "./data";
import { AddUsersForm } from './components'

const Users = () => {

    const [inhabitants, setInhabitants] = useState(data)

    const Add = (newUser) => {

        const { id, name, age, image, height } = newUser

        setInhabitants([...inhabitants, {
            id: id,
            name: name,
            age: age,
            image: image,
            height: height
        }])
    }

    console.log(inhabitants)

    return (
        <Layout id={15}>
            <Main>
                <h1>Users</h1>

                <AddUsersForm handleAddUser={Add} />

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Altura</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inhabitants.map(({ id, name, thumbnail, age, height }) => {
                            return (
                                <tr>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td><img src={thumbnail} height="80" alt="profile" /></td>
                                    <td>{age}</td>
                                    <td>{height}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </Main>
        </Layout>
    );
};

export { Users };