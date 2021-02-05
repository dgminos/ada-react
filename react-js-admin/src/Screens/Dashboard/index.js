
import React from "react";
import Layout from "../../Layout";
import Main from "../../Main";
import { LikeButton } from "../../components";

const Dashboard = () => {
    return (
        <Layout title="Home">
            <Main>
                <h1>Dashboard</h1>

                <LikeButton />
            </Main>
        </Layout>
    );
};

export { Dashboard };