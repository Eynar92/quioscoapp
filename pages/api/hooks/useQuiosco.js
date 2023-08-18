import { useContext } from "react"
import QuioscoContext from "../../../src/app/context/QuioscoProvider"

function useQuiosco() {
    return useContext(QuioscoContext);
}

export default useQuiosco
