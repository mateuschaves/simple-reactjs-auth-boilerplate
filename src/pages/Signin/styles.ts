import styled from 'styled-components';

import {colors} from '~/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    background-color: ${colors.white};
    height: 100vh;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${colors.lightGray};
    border-radius: 8px;
    padding: 16px;
`