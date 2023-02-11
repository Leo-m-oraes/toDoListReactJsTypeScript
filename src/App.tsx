import { useState } from 'react';
import * as Components from './App.styles';
import {Item} from './types/Item';
import {ListItem} from './components/ListItem'
import{ AddArea} from './components/AddArea';




const App = () => {
  
  const [list, setList] = useState<Item[]>([]);
    const [showCheckbox, setShowCheckbox] = useState<boolean>(false);
 

  const handleAddTask = (taskName: string) =>{
    setList([...list, {
      id:list.length +1,
      name:taskName,
      done:false
    }]);
    setShowCheckbox(true);
  }
  function deleteTask(id: number) {
    setList(list.filter(item => item.id !== id));
  }

return(
  <Components.Container>
   <Components.Area>
     <Components.Header>Lista de Tarefas</Components.Header>

      <AddArea  onEnter={handleAddTask}/>

     {list.map((Item, index)=>(
       <ListItem key={index} item={Item} onDelete={deleteTask} />
     ))}
   </Components.Area>
  </Components.Container>

  
)
}

export default App