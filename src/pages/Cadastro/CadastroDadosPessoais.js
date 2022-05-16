import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useUser } from "../../hooks/useUser";
import { useNavigate, useParams } from 'react-router';

const imageMimeType = /image\/(png|jpg|jpeg)/i;

export default function CadastroDadosPessoais() {
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            nome: '',
            sobrenome: '',
            descricao: '',
            cep: '',
            numero: '',
            empresas: '',
            data: '',
            descricaoExperiencia: '',
            imagem: '',
            faculdade: '',
            anoCurso: '',
            descricaoCurso: '',
            hobby: ''
        },
        validationSchema: yup.object().shape({
            nome: yup.string().required(),
        }),
        onSubmit: (values) => {
            const newUser = {
                nome: values.nome, sobrenome: values.sobrenome, descricao: values.descricao, cep: values.cep, numero: values.numero,
                empresas: values.empresas, data: values.data, descricaoExperiencia: values.descricaoExperiencia, imagem: values.imagem,
                faculdade: values.faculdade, anoCurso: values.anoCurso, descricaoCurso: values.descricaoCurso, hobby: values.hobby
            };
            localStorage.setItem("usuario", JSON.stringify(newUser));
            alert('Cadastrado com sucesso');
            navigate('/sobre');
        },
    });

    const changeHandler = (e) => {
        const file = e.target.files[0];
        if (!file.type.match(imageMimeType)) {
            alert("Image mime type is not valid");
            return;
        }
        setFile(file);
    }
    useEffect(() => {
        let fileReader, isCancel = false;
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                formik.values.imagem = result
                if (result && !isCancel) {
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(file);
            formik.values.imagem = fileDataURL;
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }

    }, [file]);

    return (
        <div>
            <form onSubmit={formik.handleSubmit} noValidate>
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" name="nome" onChange={formik.handleChange} value={formik.values.nome} required />
                        <label htmlFor="sobrenome">Sobrenome:</label>
                        <label htmlFor="imagem">Imagem</label>
                        <input type="file" name="imagem" onChange={changeHandler} id="bannerImage" />
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
                    <legend>Dados Profissionais</legend>
                    <label htmlFor="empresas">Empresa em que trabalha:</label>
                    <input className="experiencia" type="text" name="empresas" onChange={formik.handleChange} value={formik.values.empresas} required />
                    <label htmlFor="data">Ano de início</label>
                    <input type="number" name="data" onChange={formik.handleChange} value={formik.values.data} required />
                    <label type="text" htmlFor="descricaoExperiencia" >Descreva sua função</label>
                    <textarea name="descricaoExperiencia" cols="40" rows="5" onChange={formik.handleChange} value={formik.values.descricaoExperiencia} required></textarea>
                </fieldset>
                <fieldset>
                    <legend>Dados Educacionais</legend>
                    <label htmlFor="faculdade">Faculdade onde estuda:</label>
                    <input type="text" name="faculdade" onChange={formik.handleChange} value={formik.values.faculdade} required />
                    <label htmlFor="anoCurso">Ano de início</label>
                    <input type="number" name="anoCurso" onChange={formik.handleChange} value={formik.values.anoCurso} required />
                    <label htmlFor="descricaoCurso">Descricao do Curso:</label>
                    <textarea name="descricaoCurso" cols="40" rows="5" onChange={formik.handleChange} value={formik.values.descricaoCurso} required></textarea>
                </fieldset>
                <fieldset>
                    <legend>Hobbies</legend>
                    <label htmlFor="hobby">Qual seu hobby?</label>
                    <input type="text" name="hobby" onChange={formik.handleChange} value={formik.values.hobby} />
                </fieldset>
                <button type="submit">Submeter</button>
            </form>
        </div>
    );
}