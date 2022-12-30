    

    
import axios from "axios";



export const post = async (Trending) => {
    try {
     
        await axios.post(`http://localhost:4000/user`, Trending);
       console.log("success");
    } catch (error) {
        console.log('Error while calling post API ', error);
    }
}

export const getpost = async ()=>{
    try{
        let response = await axios.get(`http://localhost:4000/data`);
        console.log(response);
        return response.data ;
    }catch(error){
        console.log('error while calling getpost' , error.message);
  }
  }