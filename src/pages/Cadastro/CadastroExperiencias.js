import React from "react";
import { Formik, Form, Field, FieldArray } from 'formik';
import * as yup from "yup";
import { useUser } from "../../hooks/useUser";
import { useNavigate, useParams } from 'react-router';

export default function CadastroExperiencias() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { setNewUser } =
        useUser(id);
    var stored = JSON.parse(localStorage.getItem(id));
    // const formik = useFormik({
    //     initialValues: {
    //         nome: '',
    //         sobrenome: '',
    //         descricao: '',
    //         cep: '',
    //         numero: '',
    //         empresa: [],
    //     },
    //     validationSchema: yup.object().shape({
    //         nome: yup.string().required(),
    //     }),
    //     onSubmit: (values) => {
    //         const newUser = { id, nome: values.nome, sobrenome: values.sobrenome, descricao: values.descricao, cep: values.cep, numero: values.numero, empresa: values.empresa };
    //         setNewUser(newUser);
    //         alert('Cadastrado com sucesso');
    //         navigate('/cadastro-experiencias');
    //     },
    // });
    const onSubmit = (values) => {
        const newUser = { empresa: values.friends };
        stored.append(newUser)
        alert('Cadastrado com sucesso');
        navigate('/cadastro-experiencias');
    }
    return (
        <div>
            <Formik
                initialValues={{ friends: ['jared', 'ian', 'brent'] }}
                onSubmit={onSubmit}

                render={({ values }) => (
                    <Form>
                        <FieldArray
                            name="friends"
                            render={arrayHelpers => (
                                <div>
                                    {values.friends && values.friends.length > 0 ? (
                                        values.friends.map((friend, index) => (
                                            <div key={index}>
                                                <Field name={`friends.${index}`} />
                                                <button
                                                    type="button"
                                                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                >
                                                    -
                      </button>
                                                <button
                                                    type="button"
                                                    onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                                >
                                                    +
                      </button>
                                            </div>
                                        ))
                                    ) : (
                                        <button type="button" onClick={() => arrayHelpers.push('')}>
                                            {/* show this when user has removed all friends from the list */}
                    Add a friend
                                        </button>
                                    )}
                                    <div>
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            )}
                        />
                    </Form>
                )}
            />
        </div>
    );
}