import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useUser } from "../../hooks/useUser";
import { useNavigate, useParams } from 'react-router';

export default function CadastroDadosPessoais() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            nome: '',
            sobrenome: '',
            descricao: '',
            cep: '',
            numero: '',
            empresas: '',
            data: ''
        },
        validationSchema: yup.object().shape({
            nome: yup.string().required(),
        }),
        onSubmit: (values) => {
            const newUser = { nome: values.nome, sobrenome: values.sobrenome, descricao: values.descricao, cep: values.cep, numero: values.numero, empresas: values.empresas, data: values.data };
            localStorage.setItem("usuario", JSON.stringify(newUser));
            alert('Cadastrado com sucesso');
            navigate('/sobre');
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit} noValidate>
                <fieldset>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" name="nome" onChange={formik.handleChange} value={formik.values.nome} required />
                        <label htmlFor="sobrenome">Sobrenome:</label>
                        <input type="text" name="sobrenome" onChange={formik.handleChange} value={formik.values.sobrenome} required />
                        <label htmlFor="cep">Cep:</label>
                        <input type="text" name="cep" onChange={formik.handleChange} value={formik.values.cep} required />
                        <label htmlFor="numero">Numero:</label>
                        <input type="number" name="numero" required onChange={formik.handleChange} value={formik.values.numero} />
                        <label htmlFor="descricao">Descricao:</label>
                        <textarea name="descricao" cols="40" rows="5" onChange={formik.handleChange} value={formik.values.descricao} required></textarea>
                    </div>
                    {formik.errors.nome && (
                        <div>
                            <p>Digite a informacao!</p>
                        </div>
                    )}
                </fieldset>
                <fieldset>
                    <label htmlFor="empresas">Empresa em que trabalha:</label>
                    <input className="experiencia" type="text" name="empresas" onChange={formik.handleChange} value={formik.values.empresas} required />
                    <input type="number" name="data" onChange={formik.handleChange} value={formik.values.data} required />
                </fieldset>
                <button type="submit">Submeter</button>
            </form>
        </div>
    );
}