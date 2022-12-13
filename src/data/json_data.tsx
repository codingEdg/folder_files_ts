import { Structure } from "../interfaces_types/interfaces"

export  const structure : Structure = {
    id : "1",
name : 'root',
isFolder : true,
items : [
    {
        id : "2",
        name : "first",
        isFolder : true,
        items : [
            {
                id : "3",
                name : 'one',
                isFolder : true,
                items : [
                    {
                        id : "4", 
                        name : "index.html",
                        isFolder : false,
                        items : []
                    },
                    {
                        id : '5',
                        name : 'style.css',
                        isFolder : false,
                        items : []
                    }
                ]
            },
            {
                id : '6',
                name : 'two',
                isFolder : true,
                items : [
                    {
                        id : '7', 
                        name :"index.py",
                        isFolder : false,
                        items : []

                    },
                    {
                        id : '8',
                        name : "style.py",
                        isFolder : false,
                        items : []
                    }
                ]
            }
            
        ]
    },
    {
        id : '9', 
        name : "second",
        isFolder : true,
        items : [
            {
                id : '10', 
                name : "one",
                isFolder : true,
                items : [
                    {
                        id : '11',
                        name : 'my.js',
                        isFolder : false,
                        items : [],

                    },
                    {
                        id : '12',
                        name : 'some.ts',
                        isFolder : false,
                        items : []
                    }
                ]
            }
        ]
    },
    {
        id : "13",
        name : "Third",
        isFolder : true,
        items : [
            {
                id : "14",
                name : "notepadd.js",
                isFolder : false,
                items : []
            },
            {
                id : "15",
                name : "some file.html",
                isFolder : false,
                items : []
            }
        ]
    }
]
}