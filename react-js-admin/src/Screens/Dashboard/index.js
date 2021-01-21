import React from 'react'
import { useMath } from '../../hooks'
import Layout from '../../Layout'
import Main from '../../Main'

const Dashboard = () => {

    const { calcularIva } = useMath()

    return (
        <Layout>
            <Main>
                <h1>Dashboard</h1>
            </Main>
        </Layout>
    )
}

export { Dashboard }