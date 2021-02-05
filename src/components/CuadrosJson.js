import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import icono from '../assets/iconoCanal.png';


const useStyles = makeStyles(() => ({
    flexcontainer: {
        display: "flex",
        flexWrap: "wrap"
    },

    flexitem: {
        minWidth: "75px",
        height: "80px",
        margin: "10px",
        flex: 1
    },
}));



const CuadrosJson = () => {


    const cajas = [
        {
            id: 1,
            color: "red"
        },
        {
            id: 2,
            color: "red"
        },
        {
            id: 3,
            color: "purple"
        },
        {
            id: 4,
            color: "red"
        },
        {
            id: 5,
            color: "green"
        },
        {
            id: 6,
            color: "green"
        },
        {
            id: 7,
            color: "blue"
        },
        {
            id: 8,
            color: "green"
        },
        {
            id: 9,
            color: "#33FFF9"
        },
        {
            id: 10,
            color: "orange"
        },
        {
            id: 11,
            color: "#33FFF9",
            imagen: <img src={icono} alt="" srcset="" style={{
                width: "50px",
                height: "50px",
                borderRadius: "150px",
                marginTop: "10px"
            }} />
        },
        {
            id: 12,
            color: "yellow",
            imagen: <img src={icono} alt="" srcset="" style={{
                width: "50px",
                height: "50px",
                borderRadius: "150px",
                marginTop: "10px"
            }} />
        },
        {
            id: 13,
            color: "yellow"
        },
        {
            id: 14,
            color: "purple"
        },
        {
            id: 15,
            color: "red"
        },
        {
            id: 16,
            color: "red"
        },
        {
            id: 17,
            color: "pink"
        },
        {
            id: 18,
            color: "green",
            imagen: <img src={icono} alt="" srcset="" style={{
                width: "50px",
                height: "50px",
                borderRadius: "150px",
                marginTop: "10px"
            }} />
        },
        {
            id: 19,
            color: "pink"
        },
        {
            id: 20,
            color: "green"
        },
        {
            id: 21,
            color: "green"
        },
        {
            id: 22,
            color: "#33FFF9"
        },
        {
            id: 23,
            color: "pink"
        },
        {
            id: 24,
            color: "#33FFF9",
            imagen: <img src={icono} alt="" srcset="" style={{
                width: "50px",
                height: "50px",
                borderRadius: "150px",
                marginTop: "10px"
            }} />
        },
        {
            id: 25,
            color: "yellow"
        },
        {
            id: 26,
            color: "yellow"
        },
    ];

    const classes = useStyles();

    return (
        <>
            <Container maxWidth="xl" className={classes.flexcontainer}>
                <Grid container spacing={1}>
                    <>
                        {cajas.map((inf, i) => {
                            return (
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={12}
                                    key={`${inf.id}-${i}`}
                                    className={classes.flexitem}
                                    style={{ background: inf.color }} /*por cada caja que hagas ,ponele el color que esta en el json */
                                >
                                    {inf.imagen}
                                </Grid>
                            );
                        })}
                    </>
                </Grid>
            </Container>

        </>
    )
}

export default CuadrosJson;  