import React, {useState} from 'react'
import useTraverseTree from '../hooks/use_traverse_hook';
import { Structure } from '../interfaces_types/interfaces'

interface Props {
    explorer : Structure
    handleInsertNode : (folderId:string, item : string, isFolder : boolean)=>Structure
    handelDeleteNode : (folderId:string)=>Structure
    handleRenameNode: ( value : string,  id: string) => Structure
}
interface Initial_ShowInput {
    visible : boolean;
    isFolder : boolean | null
}

const Folder = ({handleRenameNode,handelDeleteNode, handleInsertNode, explorer} : Props) => {

   

    const initial_ShowInput : Initial_ShowInput = {
        visible : false,
        isFolder : null
    }

    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState(initial_ShowInput)
    const [rename, setRename] = useState(false)

    const onAddFolder =( e:  React.KeyboardEvent<HTMLElement>  ) =>{
        if(e.keyCode ==13  && (e.target as HTMLInputElement).value){
            if(showInput.isFolder!==null){

                  handleInsertNode(explorer.id, (e.target as HTMLInputElement).value , showInput.isFolder)
                setShowInput({...showInput, visible : false})
                setExpand(true)
            }
        }

    }



    const onDelete =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string)=>{
        e.stopPropagation()
        handelDeleteNode(id)
        
    }

    const onRename = ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id : string, isFolder: boolean)=>{
       handleFolder(e,isFolder)
       setRename(true)
    }

    const handleRenameInput =( e:  React.KeyboardEvent<HTMLElement>)=>{
        if(e.keyCode ==13  && (e.target as HTMLInputElement).value){

            handleRenameNode ((e.target as HTMLInputElement).value , explorer.id, )
                setShowInput({...showInput, visible : false})
                setExpand(true)
        }
    }

    // const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    //     console.log(event.key==="Enter" );
    //   };

    const handleFolder =(e:React.MouseEvent<HTMLButtonElement>, isFolder: boolean )=>{
        e.stopPropagation()
        if(isFolder){
            setShowInput({
                visible : !showInput.visible,
                isFolder : isFolder
            })
        }else{
            setShowInput({
                visible : !showInput.visible,
                isFolder : isFolder
            })
        }
    }




    if(explorer.isFolder){
        return (
          <div style={{marginTop : 5, marginLeft : 5}} >
                  <div className='folder' onClick={()=> setExpand(!expand)} >
                  <span>🗂 {explorer.name}</span>
                <div>  
                    <button onClick={(e)=>handleFolder(e, true)} >Folder +</button>
                    <button onClick={(e)=>handleFolder(e, false)} >File +</button>
                    <button onClick={(e)=>onDelete(e, explorer.id)} >X</button>
                    <button onClick={(e)=>onRename(e, explorer.id, explorer.isFolder)} >Rename</button>
                  </div>
                  </div>
                  {
                    showInput.visible && (
                        <div className='input_container' >
                            <span>{showInput.isFolder ? "🗂" : "📄" } </span>
                            <input 
                            className='input_container__input' 
                            onKeyDown={rename ? handleRenameInput :  onAddFolder}
                            type="text" 
                            autoFocus
                            onBlur={()=>setShowInput({...showInput, visible : !showInput.visible})}
                            />
                        </div>
                    )
                  }
                  <div style={{display: expand ? "block" : "none", paddingLeft : 10}}>
                      {explorer.items.map((elem) =>{
                          return <Folder handleRenameNode={handleRenameNode} handelDeleteNode={handelDeleteNode} handleInsertNode={handleInsertNode}  key={elem.id} explorer={elem} />
                      })}
                  </div>
          </div>
        )

    }else{
        return (
            <div className='shit'>
                <span className='file' >📄 {explorer.name}</span>
            <button onClick={(e)=>onDelete(e, explorer.id)} >X</button>
            </div>
        )
    }
}

export default Folder