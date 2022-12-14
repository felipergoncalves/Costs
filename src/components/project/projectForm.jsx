import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function projectForm({btnText}){

    const [categories, setCategorie] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => setCategorie(data))
    .catch((err) => console.log(err))
    }, [ ])

    return (
        <form className = {styles.form}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Digite o nome do Projeto"
            />
            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />
            <Select
            name="category_id"
            text="Selecione a categoria"
            options={categories}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default projectForm