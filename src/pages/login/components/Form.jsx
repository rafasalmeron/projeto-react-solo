import {Box, TextField} from "@mui/material";
import {A1, Button, FormStyle} from "../styled.jsx";

function Form() {
    return(
            <FormStyle>
                <Box sx={{display: 'flex', flexDirection: 'column', width: 500, maxWidth: '100%'}}>
                    <TextField
                        fullWidth
                        label="E-mail ou telefone"
                        id="fullWidth"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Senha"
                        id="fullWidth"
                        margin="normal"
                    />
                </Box>
                <A1 href="#"><strong>Esqueceu a senha?</strong></A1>
                {/*<Span><Checkbox defaultChecked size="small"/>Me mantenha na conta</Span>*/}
                <Button>Entrar</Button>
            </FormStyle>
    )
}
export default Form