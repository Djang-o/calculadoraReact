import Input from './components/Input';
import Button from './components/Button';
import {Container, Content, Row} from './styles';
import { useState } from 'react';
const App = () => {
 const [currentNumber, setCurrentNumber] =  useState('0');
 const [firsNumber, setFirstNumber] = useState('0');
 const [operation , setOperation] = useState();
 const handleOnClear =() => {
  setCurrentNumber('0');
  setFirstNumber('0');
  setOperation(' ');
 }
 const handleAddNumber = (number) =>{

      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
 }
 const handleSumNumber = () => {
  if (firsNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('+');
    
  }else{
    const sum = Number(firsNumber) + Number(currentNumber);
    setCurrentNumber(String(sum));
    setOperation('')
  }
 }

 const handleSubNumber = () => {
  if (firsNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('-');
    
  }else{
    const sub = Number(firsNumber) - Number(currentNumber);
    setCurrentNumber(String(sub));
    setOperation('')
  }
 }
 const handleMultNumber = () => {
  if (firsNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('*');
    
  }else{
    const mult = Number(firsNumber) * Number(currentNumber);
    setCurrentNumber(String(mult));
    setOperation('')
  }
 }

 const handleDivNumber = () => {
  if (firsNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('/');
    
  }else{
    const div = Number(firsNumber) / Number(currentNumber);
    setCurrentNumber(String(div));
    setOperation('')
  }
 }





 const handleEqualsNumber = () => {
  if (firsNumber !== '0' && operation !== '' && currentNumber !== ''){
    switch(operation){
      case '+':
        handleSumNumber();
        break;
      case '-':
        handleSubNumber();
        case '*':
          handleMultNumber();       
          case '/':
            handleDivNumber();       
       
        default:
          break;
    }
   
  }
 }


  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber}/>
          <Row>
          <Button label = "*" onClick={handleMultNumber}/>
          <Button label = "/" onClick={handleDivNumber}/>
          <Button label = "C" onClick={handleOnClear}/>
          <Button label = "0" onClick={() => handleAddNumber('0')}/>
      
          </Row>
          <Row>
          <Button label = "7" onClick={() => handleAddNumber('7')}/>
          <Button label = "8" onClick={() => handleAddNumber('8')}/>
          <Button label = "9" onClick={() => handleAddNumber('9')}/>
          <Button label = "-" onClick={handleSubNumber}/>
      
          </Row>
          <Row>
          <Button label = "4" onClick={() => handleAddNumber('4')}/>
          <Button label = "5" onClick={() => handleAddNumber('5')}/>
          <Button label = "6" onClick={() => handleAddNumber('6')}/>
          <Button label = "+" onClick={handleSumNumber}/>
         
          </Row>
          <Row>
          <Button label = "1" onClick={() => handleAddNumber('1')}/>
          <Button label = "2" onClick={() => handleAddNumber('2')}/>
          <Button label = "3" onClick={() => handleAddNumber('3')}/>
          <Button label = "=" onClick={handleEqualsNumber}/>
         
          </Row>
          
        </Content>
       </Container>
    </div>
  );
}

export default App;
