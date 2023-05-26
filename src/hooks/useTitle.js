import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`Disney Zone | ${title}`
    },[title])
}
export default useTitle;
