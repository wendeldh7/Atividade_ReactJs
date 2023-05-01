import { useState } from 'react'
import './Form.css';




const Form = () =>{

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [result, setResult] = useState("");
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
        setResult(bmi.toFixed(2));
        console.log(result)
    }

    let show = false;

    if (result > 1){
        show = true
    }

    return(
        <div className='formControl'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Nome</label>
                <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="">Altura | Ex: 1.55</label>
                    <input type="number" className='height' value={height}
                    onChange={(e) => setHeight(e.target.value)}/>
                    <label htmlFor="">Peso Kg</label>
                    <input type="number" className='weight' value={weight}
                    onChange={(e) => setWeight(e.target.value)}/>
                <button type='submit'>Calcular</button>
            </form>
            <div className='result'>
                {show && <p>Olá {name} seu IMC é {result}</p>}
                <div className='classes'>
                    <div className={`caixas baixo ${result < 18.5 && result > 1 ? 'active' : ''}`}><span>Baixo Peso</span></div>
                    <div className={`caixas normal ${result >= 18.5 && result <= 24.9 ? 'active' : ''}`}><span>Peso Normal</span></div>
                    <div className={`caixas sobre ${result >= 25 && result <= 29.9 ? 'active' : ''}`}><span>Sobrepreso</span></div>
                    <div className={`caixas pre ${result >= 30 && result <= 34.9 ? 'active' : ''}`}><span>Pré-Obeso</span></div>
                    <div className={`caixas ob1 ${result >= 35 && result <= 39.9 ? 'active' : ''}`}><span>Obeso I</span></div>
                    <div className={`caixas ob2 ${result > 40 ? 'active' : ''}`}><span>Obeso II</span></div>
                </div>
            </div>
        </div>
    )
}

export default Form