import React from 'react';

import Styled from 'styled-components';

const Header = Styled.div `
background-color: #eee;
position: relative;
width: 100%;
height: 60px;
`
export default function HeaderComponent() {
    return (
        <Header></Header>
    );
}