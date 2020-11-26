import React ,{useState} from 'react';
import {IonInput, IonItem, IonButton } from '@ionic/react';
import Listing from './Listing'

const ListContainer: React.FC = () => {

  const [input,setInput] = useState('');
  const [id, setId] = useState(0)
  const [todos,setTodos] = useState<Array<any>>([]);

  const validateInput =()=>{
    if(input.length >0){
      addTask();
    }
  }

  const addTask = () =>{
    let data: {task:string, id:number} = {
      task:input,
      id:id
    }
    todos.push(data);
    setTodos([...todos]);
    setId(id+1)
  }

  return (
      <>
        <IonItem>
          <IonInput clearInput value={input}id='input' placeholder="Add task" type="text" onIonChange={
              (event:any)=>{setInput(event.target.value)}
          }/>
        </IonItem>
        <IonButton expand="block" onClick={validateInput}>Add</IonButton>
        {todos.length >0 && todos.map((todo)=>{
          return(
            <Listing id={todo.id} task={todo.task} />
          )
        })}
      </>
  );
};

export default ListContainer;