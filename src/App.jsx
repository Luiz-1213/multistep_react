// Componentes
import{ GrFormNext, GrFormPrevious} from "react-icons/gr"
import{FiSend} from "react-icons/fi"
import UseForm from "./components/UseForm"
import ReviewForm from "./components/ReviewForm"
import Thanks from "./components/Thanks"
import Steps from "./components/Steps"

// Hooks
import { transition } from "./hooks/transition"
import { useState } from "react"


// Styles
import './App.css'


const formTemplete = {
  name:"",
  email:"",
  rewiew:"",
  comment:"",
}

function App() {
  const[data, setData]=useState(formTemplete)

  const updateFieldHandler = (key, value) =>{
    setData((prev)=>{
      return {...prev, [key]: value }
    })
  }
  
  const formComponents =[
    <UseForm data={data}  updateFieldHandler={updateFieldHandler}/>, 
    <ReviewForm data={data}  updateFieldHandler={updateFieldHandler}/>, 
    <Thanks data={data}/>
  ];

  const {currentStep, currentComponent, changeStep, isLastStep, isFirtsStep} = transition(formComponents);
  
  return (
   <div className="app">
      <div className="header">
        <h2>Deixe a sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep= {currentStep}/>
        <form onSubmit={(e)=>changeStep(currentStep +1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            {!isFirtsStep &&(
              <button type='button' onClick={()=> changeStep(currentStep -1)}>
                <GrFormPrevious/>
                <span>Voltar</span>
              </button>
            )}
            
            {isLastStep ? (
              <button type='button'> 
                <span>Enviar</span>
                <FiSend/>
              </button>
            ):(
              <button type='submit'> 
                <span>Avançar</span>
                <GrFormNext/>
              </button>
            )}
          </div>
        </form>
      </div>
   </div>
  )
}

export default App
