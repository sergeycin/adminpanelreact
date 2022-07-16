export const makeRequest = async(url:string,method:string,body?:any) => {
        let headers:any = {}
    try{
        if (body){
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }

        const response = await fetch(url, {
            method,body,headers
        })
        const data = await response.json()
        return data

    }
    catch(e){
        return e
    }
}