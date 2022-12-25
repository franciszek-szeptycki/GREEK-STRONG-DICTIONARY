import {useReducer} from "react";
import {reducer, State} from "./context/reducers";
import {AppContext} from "./context";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

export default ({children, initialState = {}}: {children: any, initialState?: State | any}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <QueryClientProvider client={queryClient}>
            <AppContext.Provider value={{state, dispatch}} >
                {children}
            </AppContext.Provider>
        </QueryClientProvider>
    )
}