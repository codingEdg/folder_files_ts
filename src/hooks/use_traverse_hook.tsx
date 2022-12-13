import { Structure } from "../interfaces_types/interfaces"

const useTraverseTree = () => {

    function insertNode(tree:Structure, folderId: string, item: string, isFolder: boolean):Structure {
        if(tree.id == folderId && tree.isFolder ){
            tree.items.unshift(
                {
                    id : new Date().getTime().toString(),
                    name : item,
                    isFolder ,
                    items : []
                }
            )
            return tree
        }

        let latestNode : Structure[] = []

        latestNode = tree.items.map((elem)=>{
            return insertNode(elem, folderId, item, isFolder)
        })

        return {...tree, items : latestNode}

    }
    


    return { insertNode }


}

export default useTraverseTree