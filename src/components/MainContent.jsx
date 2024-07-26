import { useState, useEffect } from "react";
// MUI components
import Grid from "@mui/material/Unstable_Grid2";
// Divider = <hr> خط مثل
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Prayer from "./Prayer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// external librarys
import axios from "axios";
import moment from 'moment'
import "moment/locale/ar";

moment.locale('ar')
console.log(moment().format('LLL'))




// images
import fajr from "../Images/fajr-prayer.png";
import dohr from "../Images/dhhr-prayer.png";
import asr from "../Images/asr-prayer.png";
import mahreb from "../Images/night-prayer.png";
import isha from "../Images/sunset-prayer.png";

export default function MainContent() {

  
const [timings, setTimings] = useState({
  Fajr: "",
  Dhuhr: "",
  Asr: "",
  Maghrib: "",
  Isha: "",
});
  

const [CityObj, setCityObj] = useState({
  displayName: "الأسكندرية",
  apiName: "alexandria",
  isoCode: 'EGY'
});

  const GetTimings = async (Cityobj) => {
    const response = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity/17-09-2023?country=${Cityobj.isoCode}&city=${Cityobj.apiName}`
    );

    setTimings(response.data.data.timings);
  };

  useEffect(() => {
    
    GetTimings(CityObj);
    
    

  }, [GetTimings]);


  const handleCity = (event) => {
    setCityObj(event.target.value)
    
   const time = moment().format("MMMM Do YYYY, h:mm:ss")
   console.log(time)
  };

  const avilableCities = [
  {displayName: "الاسكندرية",
  apiName: "alexandria",
  isoCode: 'EGY'},
  {displayName: "مكة المكرمة",
  apiName: "makkah%20al%20mokarama",
  isoCode: 'SA'},
  {displayName: "مطروح",
  apiName: "matroh",
  isoCode: 'EGY'}
  ]


  return (
    <>
      {/* TOP ROW */}
      <Grid container marginBottom={"50px"}>
        <Grid xs={6}>
          {/* التوقيت + المدينة */}
          <div>
            <h2>4:20 | 9 2023 سبتمبر</h2>
            <h1>{CityObj.displayName}</h1>
          </div>
        </Grid>

        <Grid xs={6}>
          {/* التوقيت + المدينة */}
          <div>
            <h2>متبقي حتى صلاة المغرب</h2>
            <h1>20:10:20</h1>
          </div>
        </Grid>
      </Grid>
      {/*== TOP ROW ==*/}
      <Divider style={{ borderColor: "#fff", opacity: "0.1" }} />

      {/* Stack */}
      <Stack
        direction="row"
        justifyContent={"space-between"}
        marginTop={"50px"}
      >
        <Prayer img={fajr} name="الفجر" time={timings.Fajr} />
        <Prayer img={dohr} name="الظهر" time={timings.Dhuhr} />
        <Prayer
          img={asr}
          name="العصر"
          time={
            timings.Asr.split(":")[0] - 12 + ":" + timings.Asr.split(":")[1]
          }
        />
        <Prayer
          img={mahreb}
          name="المغرب"
          time={
            timings.Maghrib.split(":")[0] -
            12 +
            ":" +
            timings.Maghrib.split(":")[1]
          }
        />
        <Prayer
          img={isha}
          name="العشاء"
          time={
            timings.Isha.split(":")[0] - 12 + ":" + timings.Isha.split(":")[1]
          }
        />
      </Stack>
      {/* Prayer part */}

      {/* SELECT CITY */}
      <Stack direction="row" justifyContent={"center"} marginTop={"40px"}>
        <FormControl style={{ width: "20%", color: "#fff" }}>
          <InputLabel style={{ color: "#fff" }}>
            المدينة
          </InputLabel>
          <Select
            value=""
            onChange={handleCity}
          >

            {avilableCities.map(cityObj => {
              return (
                <MenuItem
              value={cityObj}
              key={cityObj.displayName}
            >
              {cityObj.displayName}
            </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Stack>
    </>
  );
}
