
import data from './data'
import { post } from '../../lib/axios';
// api/trending

export default function handler(req, res){
    const { Trending } = data;
    post(Trending);
   
   
    return res.status(404).json({ error: "Data Not Found"})
}