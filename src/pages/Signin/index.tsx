import React, {useState} from 'react';
import {Container, FormContainer, FormTitle} from './styles';

import FormInput from '~/components/FormInput';
import FormButton from '~/components/FormButton';

import {Formik} from 'formik';

import {InitialSigninStateProps, RootState} from '~/shared/store/app.state';

import {useDispatch, useSelector} from 'react-redux';
import {signinActions} from '~/store/ducks/Auth/Signin';

interface FormValues {
    email: string;
    password: string;
}

export default function Signin() {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const initialFormValues: FormValues = {
        email: '',
        password: '',
    }

    const signin = useSelector<RootState, InitialSigninStateProps>(state => state.signin);

    const dispatch = useDispatch();

    function handleSignin(values: FormValues) {
        const {email, password} = values;
        dispatch(signinActions.signin({
            email,
            password,
        }));
    }

    return (
        <Container>
            <Formik
                initialValues={initialFormValues}
                onSubmit={handleSignin}
            >
                <FormContainer>
                    <FormTitle>React Auth Boilerplate</FormTitle>
                    <FormInput 
                        type="email"
                        name="email"
                        placeholder="Email"
                        // onChange={e => setEmail(e.target.value)}
                        // value={email}
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        placeholder="Senha"
                        // onChange={e => setPassword(e.target.value)}
                        // value={password}
                    />
                    <FormButton type="submit" loading={signin.loading} disabled={signin.loading}>
                        Entrar
                    </FormButton>
                </FormContainer>
            </Formik>
        </Container>
    )
}
