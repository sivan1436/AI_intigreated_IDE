import proxy from 'express-http-proxy';


export function ProxyWithHeader(serviceUrl){
return proxy(serviceUrl,{
    proxyReqOptDecorator: (proxyReqOpts, req)=>{
     if(req.user){
        proxyReqOpts.headers['X-User-Id'] = req.user._id;
     }
     return proxyReqOpts;
    }
})
}