import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import './App.css';
import CuadrosJson from "./components/CuadrosJson";



const useStyles = makeStyles(() => ({
  container: {
    paddingTop: "20px",
    paddingBottom: "20px",
    fontFamily: "Bebas-Bold",
  }
}));


function App() {

  const classes = useStyles();
  return (
    <div className="App">
      <>
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
              <CuadrosJson />
            </Grid>
          </Grid>
        </Container>
      </>
    </div>
  );
}

export default App;
