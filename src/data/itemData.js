const DbList =[
    {
        id:1  ,
        cate  :  'vehiculo' ,
        title : "vehiculo1",
        price : 20000,
        desc  : 'carro economico',
        stock :  20,
        picUrl: "https://api.lorem.space/image/car?0" 
    },{
        id:2 ,
        cate  :  'vehiculo' ,
        title : "carro",
        price : 28500,
        desc  : 'carro bonito',
        stock:  22,
        picUrl: "https://api.lorem.space/image/car?23" 
    },{
        id:3 ,
        cate  :  'vehiculo' ,
        title : "automobil",
        price : 32500,
        desc  : 'carro veloz',
        stock:  2,
        picUrl: "https://api.lorem.space/image/car?4" 
    }
    ,{
        id:4 ,
        cate  :  'vehiculo' ,
        title : "automobil",
        price : 32500,
        desc  : 'carro veloz',
        stock:  2,
        picUrl: "https://api.lorem.space/image/car?4" 
    }
]

const task = new Promise((response)=>{
    response(DbList);
},2000)

export function getItem() {
    return task;
}