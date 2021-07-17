import React from 'react';
import {Container} from "react-bootstrap";

const Account = () => {
    return (
        <Container fluid={true}>
            <div className={'account login'}>
                GalileoGalileu@mail.ru
            </div>
            <div className={'account emailacc'}>
                Филлипп Преображенский
            </div>

        </Container>
    );
};

export default Account;