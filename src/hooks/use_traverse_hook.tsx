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

    const deleteNode = (tree:Structure, folderId: string) =>{
        tree.items = tree.items.filter(elem=> elem.id!==folderId)
        tree.items.forEach(item=>deleteNode(item, folderId))

        return tree
    }


    const renameNode = (tree:Structure, value: string,  id: string): Structure =>{
        if(tree.id==id) tree.name = value
tree.items.forEach(elem=> renameNode(elem,value, id))
  return tree;
    }
    


    return { insertNode, deleteNode, renameNode }


}

export default useTraverseTree


type xx = (number|string)[]
function chunk(array : xx , size =1){
    if(!Array.isArray(array)) return new Error("You passed wrong array")
    if(array.length < 2 || size <2) return array
    let startIndex = 0, endIndex = size
    let TotalSubArray =  Math.ceil(array.length/size)
    let result: any = []
    for (let i=startIndex; i<TotalSubArray; i++){
        array.slice(startIndex, endIndex).length && result.push(array.slice(startIndex, endIndex))
        startIndex =startIndex+size
        endIndex = endIndex +size

    }
    return result
}

const result = chunk(["a", "b", "c", "d"], 2)
console.log(result);

// const result2 = chunk(8, 3)
const result2 = chunk(["a", "b", "c", "d", "e", "f", "g"], 2)
// const result2 = chunk(["a", "b", "c", "d"], 3)
console.log(result2)


const findFalsy =(arr : any)=>{
let result: any =[]

result  = arr.filter((elem: any)  => typeof elem!="boolean" ||elem!=null ||elem!==undefined ||elem>0 || elem!=="")


return result
}

let res = findFalsy([true, 1,2,"", 0, "mehtab", null, undefined])
console.log(res)