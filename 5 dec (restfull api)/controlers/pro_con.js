const storage = require("node-persist");
storage.init();
const addproduct=async(req,res)=>{
    const{task}=req.body;
    try {
        const resp= await storage.setItem(id,{});
        res.status(201).send({message:"product address", resp})
    } catch (error) {
        res.status(500).send({message:"error in adding",error})  
    }
}

const getallproduct= async(req,res)=>{
    try {
        const resp=await storage.values();
        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error);
    }
}

