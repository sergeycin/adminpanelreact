import {useState,useCallback} from 'react'
 


export const useHttp = () =>{
    const [loading] = useState<boolean | undefined>(false)
    const [error,setError] = useState<String | null>(null)
    const request = useCallback(async(url:any,method='GET',body:any = null, headers:any= {}) =>{
    
        try{

            if (body){
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }


           const response = await fetch(url, {
                method,body,headers
            })
            const data = await response.json()
            if(!response.ok){
                throw new Error(data.message || 'Erorr ...')
            }

       

            return data
        }catch(e:any){
       
            setError(e.message)
            throw e
        }
        
    },[])

    const clearError = useCallback( ()=> setError(null),[] )

    return{loading,request,error,clearError}
}