import Grid from "@mui/material/Grid"
import { Menu } from "./components/Menu"
import { Button } from "./components/Button"
import HelloImg from './assets/hello.svg'

function App() {
  return (
    <>
      <Menu/>
      <Grid container spacing={4} sx={{ marginTop: '5px' }} className="container">
          <Grid item xs={7}>
            <Grid item xs={12}>
              <h2>Comece hoje a <span className="backText text-white">encantar</span> seu cliente!</h2>
            </Grid>
            <Grid item xs={8}>
              <p>
                Crie agora mesmo sua conta gratuita e comece a ter um melhor relacionamento e
                comunicação com o seu cliente, de forma fácil, rápida e profissional.
              </p>
            </Grid>
            <Grid item xs={6}>
              <Button Variant="contained" Text="Criar Conta"/>
              <Button Variant="outlined" Text="Saiba Mais"/>
            </Grid>
          </Grid>
          <Grid item xs={2}>
              <img src={HelloImg} alt="hello" width="407" height="177" />
          </Grid>
          
      </Grid>
    </>
  )
}

export default App
