import React from 'react'

const AddUsersForm = ({ handleAddUser }) => {

    const handleSubmit = (event) => {

        event.preventDefault();

        const { id, name, age, image, height } = event.target

        const newUser = {
            id: id.value,
            name: name.value,
            age: age.value,
            image: image.value,
            height: height.value
        }

        handleAddUser(newUser);

    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="id" placeholder="id" type="text" />
            <input name="name" placeholder="name" type="text" />
            <input name="age" placeholder="age" type="text" />
            <input name="image" placeholder="image" type="text" />
            <input name="height" placeholder="height" type="text" />
            <button type="submit">Agregar</button>
        </form>
    )
}

export { AddUsersForm }