import IConsultas from "./types/IConsultas"
import useFetch from "./useFetch"

const useDadosConsulta = () => {
    return useFetch<IConsultas[]>({ url: 'consultas' });
}

export default useDadosConsulta;