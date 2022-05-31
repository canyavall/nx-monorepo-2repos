import {accountApi} from "../../basics/constants/api.constants";

// Create the type of the data to be sent

// Create the axios request


const axiosRequest = axios.get(`${accountApi}`)

// Create a custom hook with react-query and error handling

const useGetAccount = (account:string) => {
  const [getAccount, loading, data, error] = useReactQuery (axiosRequest)

  if (error) {
    // Global error handler
  }

  return [getAccount, loading, data, error]
}
