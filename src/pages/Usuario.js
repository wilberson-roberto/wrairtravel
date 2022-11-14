import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import 'react-bootstrap'
import { Container } from "react-bootstrap";
import CRUD from "../components/CRUD";

const Usuario = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <Container>
                <section className="profile">
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </section>

                <h4>Passagens:</h4>
                <CRUD />
            </Container>
        )
    );
};

export default Usuario;