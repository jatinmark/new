    

    
import axios from "axios";



export const post = async (Trending) => {
    try {
     
        await axios.post(`https://4000-jatinmark-new-dk7oeae99ai.ws-us80.gitpod.io/user`, Trending);
       console.log("success");
    } catch (error) {
        console.log('Error while calling post API ', error);
    }
}

export const getpost = async ()=>{
    try{
        let response = await axios.get(`https://4000-jatinmark-new-dk7oeae99ai.ws-us80.gitpod.io/data`);
        console.log(response);
        return response.data ;
    }catch(error){
        console.log('error while calling getmessages' , error.message);
  }
  }