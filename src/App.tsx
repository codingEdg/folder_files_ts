import React, {useState} from 'react'
import "./App.css"
import Folder from './components/Folder'
import { structure } from './data/json_data'
import useTraverseTree from './hooks/use_traverse_hook'
import { Structure } from './interfaces_types/interfaces'
const App = () => {
    const [explorerData, setExplorerData] = useState(structure)

    const { insertNode } = useTraverseTree()

    const handleInsertNode =( folderId:string, item : string, isFolder : boolean | null ) :Structure => {
        if(isFolder!==null){

            const finalTree = insertNode(explorerData, folderId, item, isFolder )
    
           setExplorerData(finalTree)
           return finalTree
        }else {
          return  explorerData
        }

    }
  
  return (
    <div className='main_app'>
      <Folder handleInsertNode={handleInsertNode} explorer = {explorerData} />
    </div>
  )
}

export default App