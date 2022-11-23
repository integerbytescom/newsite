import {ref,onValue} from "firebase/database";
import {useEffect, useState} from "react";
import {realtimeDB} from "../pages/database";

//for get data from realtime database
export const useGetData = (url) =>{

    const [data,setData] = useState([])

    useEffect(() =>{
        onValue(ref(realtimeDB,url),snapshot => {
            setData([])
            const dataInner = snapshot.val();
            // console.log(dataInner);
            if (dataInner){
                // eslint-disable-next-line
                Object.values(dataInner).map(elem => {
                    setData(old => [...old,elem])
                })
            }else {
                return []
            }
        })
        // eslint-disable-next-line
    },[url])

    return data
}
