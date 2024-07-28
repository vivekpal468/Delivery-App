import {useState, useEffect} from "react";
import {Menu_API} from  "../utils/constant"


const useRestaurantMenu = (resid) =>{
    const[resInfo, setresInfo] = useState(null);

     useEffect(() => {
        fetchMenu();
    },[])


    const fetchMenu = async() =>{
        const data = await fetch(Menu_API + resid);
        const json = await data.json();
        setresInfo(json.data);
    };

    return resInfo;
};


export default useRestaurantMenu;   