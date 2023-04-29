import { useState } from 'react'
import axios from 'axios'
import Swal from "sweetalert2";


const useAxios = (url) => {
    const [data, setData] = useState([])
    const [isError, setIsError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

      // created style for toaseter
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });


   const postData = async (url,values) => {
    try {
const config = {
    headers: {
        "Content-Type" : "application/json"
    }
}
const retrivedValues = JSON.stringify(values)
console.log('stringed values from post method in post',values)
console.log('also url is: ',url)
const res = await axios.post(url,JSON.stringify(values), config)
Toast.fire({
    icon: "success",
    title: `Sent Successfully!`,
  });
    }catch(err){

    }finally {
        setIsLoading(false)
    }
   }
    
    return {
        data,
        isError,
        isLoading,
        postData
    }
}

export default useAxios