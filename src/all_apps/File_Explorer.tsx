import React,{useState} from 'react'
import Folder from '../components/Folder'
import { structure } from '../data/json_data'
import { Structure } from '../interfaces_types/interfaces'
import useTraverseTree from '../hooks/use_traverse_hook'
import "../App.css"

export const File_Explorer = () => {
    const [explorerData, setExplorerData] = useState(structure)

    const { insertNode, deleteNode, renameNode } = useTraverseTree()

    const handleInsertNode =( folderId:string, item : string, isFolder : boolean | null ) :Structure => {
        if(isFolder!==null){

            const finalTree = insertNode(explorerData, folderId, item, isFolder )
    
           setExplorerData(finalTree)
           return finalTree
        }else {
          return  explorerData
        }

    }

    const handelDeleteNode = ( folderId: string ) =>{
       return  deleteNode(explorerData, folderId)
        
    }
    const handleRenameNode = (value : string, id : string)=>{
      return renameNode(explorerData,  value, id)
    }
  
    // useEffect(()=>{},[explorerData])
  return (
    <div className='main_app'>
      <Folder handleRenameNode={handleRenameNode} handelDeleteNode={handelDeleteNode}  handleInsertNode={handleInsertNode} explorer = {explorerData} />
    </div>
  )
}

// export default File_Explorer