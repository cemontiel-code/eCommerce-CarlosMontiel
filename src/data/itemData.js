const DbList =[
    {
        id:1  ,
        category :  'car' ,
        title : "vehiculo1",
        price : 20000,
        desc  : 'carro economico',
        stock :  20,
        picUrl: "https://api.lorem.space/image/car?0" 
    },{
        id:2 ,
        category :  'car' ,
        title : "carro",
        price : 28500,
        desc  : 'carro bonito',
        stock:  22,
        picUrl: "https://api.lorem.space/image/car?23" 
    },{
        id:3 ,
        category :  'car' ,
        title : "automobil",
        price : 32500,
        desc  : 'carro veloz',
        stock:  2,
        picUrl: "https://api.lorem.space/image/car?4" 
    }
    ,{
        id:4 ,
        category :  'car' ,
        title : "automobil",
        price : 32500,
        desc  : 'carro mas veloz',
        stock:  2,
        picUrl: "https://api.lorem.space/image/car?5" 
    }
    ,{
        id:5 ,
        category :  'part' ,
        title : "bujias para Ford Explorer - MOTORCRAFT ",
        price : 5,
        desc  : 'Bujias (spark plug) de cobre para Ford Explorer 2009 - 2010',
        stock:  50,
        picUrl: "https://http2.mlstatic.com/D_NQ_NP_681415-MLV48622023585_122021-O.webp" 
    }
    ,{
        id:6 ,
        category :  'part' ,
        title : "Empacadura de Camara VOLKSWAGEN ",
        price : 15,
        desc  : 'EMPACADURA DE CAMARA ASBESTOVehiculo VOLKSWAGENModelo GOL SAVEIRO PARATI GOLF  SKU: 1816 Referencia: 026-103-383-K',
        stock:  50,
        picUrl: "https://http2.mlstatic.com/D_NQ_NP_827858-MLV48700571971_122021-O.webp" 
    }
    ,{
        id:7 ,
        category :  'part' ,
        title : "Amortiguador",
        price : 100,
        desc  : 'Es un amortiguador',
        stock:  78,
        picUrl: "https://http2.mlstatic.com/D_NQ_NP_626826-MLV46232083223_062021-O.webp?&auto=format&fit=crop&w=600&h=200" 
    }
    ,{
        id:9 ,
        category :  'misc' ,
        title : "Neumatico ",
        price : 80,
        desc  : 'Es un Neumatico',
        stock:  47,
        picUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_763629-MLV40621523137_012020-F.jpeg" 
    }
    ,{
        id:8 ,
        category :  'misc' ,
        title : "Aceite 15w40 Mineral Valvoline ",
        price : 80,
        desc  : 'Aceite para motor (980ml) 15w40 Mineral Valvoline',
        stock:  47,
        picUrl: "https://http2.mlstatic.com/D_NQ_NP_758704-MLV46102163910_052021-O.webp" 
    }

]

const task = new Promise((response)=>{
    response(DbList);
},2000)

export function getItem() {
    return task;
}