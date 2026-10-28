import redis from "../../Config/Redis.js";
export async function Protect(req,res,next) {
    try{
      const sessionId = req.cookies.sessionId
      if(!sessionId){
        return res.status(401).json({message: "Unauthorized"})
    }
   const result = await redis.get(`session-${sessionId}`)
   const data = JSON.parse(result)
   req.user = data
   next()
}
    
   catch(err){
    return res.status(500).json({message: "Internal Server Error", error: err})
}
}    
