import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from "@mui/material";
import IConsultas from "../../types/IConsultas";
import emotionStyled from "@emotion/styled";


const CelulaEstilizada = emotionStyled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--font-principal)"
    },

    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--font-principal)"
    }
}))

const LinhaEstilizada = emotionStyled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }
}))

function Tabela({ consultas }: { consultas: IConsultas[] | null }) {

    return (
        <>
            <TableContainer component={Paper}></TableContainer>
            <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                <TableHead>
                    <TableRow>
                        <CelulaEstilizada>Data</CelulaEstilizada>
                        <CelulaEstilizada>Horário</CelulaEstilizada>
                        <CelulaEstilizada>Profissional</CelulaEstilizada>
                        <CelulaEstilizada>Especialidade</CelulaEstilizada>
                        <CelulaEstilizada>Paciente</CelulaEstilizada>
                        <CelulaEstilizada>Modalidade</CelulaEstilizada>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {consultas?.map((linha) => {
                        return (
                            <LinhaEstilizada>
                                <CelulaEstilizada component="th" scope="row">{new Date(linha.data).toLocaleDateString()}</CelulaEstilizada>
                                <CelulaEstilizada component="th" scope="row">{linha.horario}</CelulaEstilizada>
                                <CelulaEstilizada component="th" scope="row">{linha.profissional[0].nome}</CelulaEstilizada>
                                <CelulaEstilizada component="th" scope="row">{linha.profissional[0].especialidade}</CelulaEstilizada>
                                <CelulaEstilizada component="th" scope="row">{linha.paciente}</CelulaEstilizada>
                                <CelulaEstilizada component="th" scope="row">{linha.modalidade}</CelulaEstilizada>
                            </LinhaEstilizada>
                        )
                    })}

                </TableBody>
            </Table>
        </>
    )

}

export default Tabela;