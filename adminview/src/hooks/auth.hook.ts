//hook для авторизации обрабатываем токен и переводим человека в систтему
import {useState,useCallback,useEffect} from 'react'


const storageName:any = 'userData'

export const useAuth = () => {
    const [token,setToken] = useState(null)
    const [userId, setUserId] = useState(null)
   
    const login = useCallback((jwtToken:any,id:any) => {
      
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem(storageName,JSON.stringify({
            userId: id,token: jwtToken
        }))

    },[])

    const logout = useCallback(() => {
       
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    
    },[])

    useEffect(()=>{


        const newdata:any = localStorage.getItem(storageName)
        const data = JSON.parse(newdata)
        // console.log(data.token)
        if(data && data.token){
            login(data.token, data.userId)
        }
    },[login])



    return {login,logout,token, userId}
}