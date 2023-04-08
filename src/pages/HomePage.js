import { LayoutPage, ButtonStyled } from "../components/LayoutComponents" 
import { lazy, Suspense, useState } from "react"
import NavBar from "../components/navBar"
import Loader from "../components/Loader"

const FormCreate = lazy(() => import('../components/FormCreate'))

const HomePage = () => {
    const [newForm, setNewForm] = useState(false)
    const [finishedCreation, setFinishedCreation] = useState(false)

    const activeForm = (evt) => {
        evt.preventDefault()
        setNewForm(!newForm)
    }

    return (    
        <LayoutPage>
            <NavBar/>

            {!(newForm) && (    
                <ButtonStyled onClick={activeForm}>
                    Crear nuevo Formulario
                </ButtonStyled>
            )}

            {newForm &&
                <Suspense fallback={<Loader text='Cargando'/>}>
                    <FormCreate/>
                </Suspense>
            }
        </LayoutPage>
    )
} 

export default HomePage