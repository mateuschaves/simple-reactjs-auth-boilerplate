import React, {useState} from 'react';
import {Container, Form, FormTitle} from './styles';

import FormInput from '~/components/FormInput';
import FormButton from '~/components/FormButton';

import {InitialSigninStateProps, RootState} from '~/shared/store/app.state';

import {useDispatch, useSelector} from 'react-redux';
import {signinActions} from '~/store/ducks/Auth/Signin';

export default function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = useSelector<RootState, InitialSigninStateProps>(state => state.signin);

    const dispatch = useDispatch();

    function handleSignin() {
        dispatch(signinActions.signin({
            email,
            password,
        }));
    }

    return (
        <Container>
            <Form>
                <FormTitle>React Auth Boilerplate</FormTitle>
                <FormInput 
                    type="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <FormInput 
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
                <FormButton type="button" onClick={handleSignin} loading={signin.loading} disabled={signin.loading}>
                    Entrar
                </FormButton>
            </Form>
        </Container>
    )
}
