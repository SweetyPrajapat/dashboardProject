import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../Analysis.css";
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import HorizontalBarChart from "../charts/HorizontalBarChart";
import CountUp from "react-countup";

export default function Home() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Stack spacing={2}>
                  <Stack spacing={2} direction={"row"}>
                    <Card
                      sx={{ minWidth: 40 + "%", height: 120 }}
                      className="gradient"
                    >
                      <CardContent>
                        <div className="iconstyle">Visitors</div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#ffffff" }}
                        >
                          <CountUp delay={0.2} end={22000} duration={0.3} />
                        </Typography>
                        <div className="iconstyle">Since Last week</div>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ minWidth: 40 + "%", height: 120 }}
                      className="gradientlight"
                    >
                      <CardContent>
                        <div className="iconstyle">Visitors</div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#ffffff" }}
                        >
                          <CountUp delay={0.4} end={32000} duration={0.3} />
                        </Typography>
                        <div className="iconstyle">Since Last week</div>
                      </CardContent>
                    </Card>
                  </Stack>
                  <Stack spacing={2} direction={"row"}>
                    <Card
                      sx={{ minWidth: 40 + "%", height: 120 }}
                      className="gradient"
                    >
                      <CardContent>
                        <div className="iconstyle">Visitors</div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#ffffff" }}
                        >
                          <CountUp delay={0.2} end={20000} duration={0.3} />
                        </Typography>
                        <div className="iconstyle">Since Last week</div>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ minWidth: 40 + "%", height: 120 }}
                      className="gradientlight"
                    >
                      <CardContent>
                        <div className="iconstyle">Visitors</div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#ffffff" }}
                        >
                          <CountUp delay={0.3} end={30000} duration={0.3} />
                        </Typography>
                        <div className="iconstyle">Since Last week</div>
                      </CardContent>
                    </Card>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <Card>
                  <CardContent>
                    <HorizontalBarChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <GeoChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <PieChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
