import React, { useState } from 'react'
import { Layout, Main } from '../../../components'
import './add.css'


const Add = () => {

    const [title, setTitle] = useState()

    return (

        <Layout >
            <Main title="Agregar Tarea" showAddButton>
                <form>
                    <div className="form-group">
                        <label for="titulo">Título</label>
                        <input type="text" name="titulo" className="form-control" id="titulo" placeholder="Título" value="" />
                    </div>
                    <div className="form-group">
                        <label for="fecha">Fecha</label>
                        <input type="date" name="fecha" className="form-control" id="fecha" placeholder="" value="" />
                    </div>

                    <div className="form-group">
                        <label for="textarea">Descripción</label>
                        <textarea className="form-control" id="textarea" rows="3" value=""></textarea>
                    </div>
                    <div className="form-group">
                        <label for="asignado">Asignado</label>
                        <select className="form-control" id="asignado">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </form>
            </Main >
        </Layout >

    )
}

export { Add }