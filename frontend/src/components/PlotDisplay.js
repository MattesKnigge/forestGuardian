import React, { useEffect, useState } from 'react';
import Speedometer from 'react-d3-speedometer';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const PlotDisplay = () => {
    const [data, setData] = useState({
        temperature: { timestamp: "", value: "-25" },
        humidity: { timestamp: "", value: "0" },
        pressure: { timestamp: "", value: "800" }
    });
    const [error, setError] = useState(null);
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

    const handleSnackbarClose = () => {
        setOpenErrorSnackbar(false);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/sensorknoten-vogelhaus/test");
                console.dir(response);
                setData(response.data);
            } catch (error) {
                setError('An error occurred while fetching sensor data.');
                setOpenErrorSnackbar(true);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="plot-display-content">
            <div className="headline-plot">
                <h1 style={{ textAlign: 'center' }}>Air Sensors {data.temperature.timestamp}</h1>
            </div>
            <div className="gauge-container">
                <div className="gauge-item temp">
                    <h3 className={"headline-plot"}>Temperature</h3>
                    <Speedometer
                        value={parseInt(data.temperature.value)}
                        currentValueText="#{value} °C"
                        currentValuePlaceholderStyle={'#{value}'}
                        minValue={-25}
                        maxValue={45}
                        needleColor="black"
                        segmentColors={["#8f0000", "red", "orange", "green", "green", "orange", "red", "#8b0000"]}
                        segments={8}
                        width={400}
                        customSegmentLabels={[{}, {}, {}, {}, {}, {}, {}, {}]}
                        textColor={"#537A5A"}
                    />
                </div>
                <div className="gauge-item hum-pres">
                    <div className="gauge-item hum">
                        <h3 className={"headline-plot"}>Humidity</h3>
                        <Speedometer
                            value={parseInt(data.humidity.value)}
                            currentValueText="#{value} %"
                            currentValuePlaceholderStyle={'#{value}'}
                            minValue={0}
                            maxValue={110}
                            needleColor="black"
                            segments={6}
                            customSegmentLabels={[{}, {}, {}, {}, {}, {}]}
                            segmentColors={["#8f0000", "red", "orange", "green", "green", "green"]}
                            textColor={"#537A5A"}
                        />
                    </div>
                    <div className="gauge-item pres">
                        <h3 className={"headline-plot"}>Pressure</h3>
                        <Speedometer
                            value={parseInt(data.pressure.value)}
                            currentValueText="#{value} hPa"
                            currentValuePlaceholderStyle={'#{value}'}
                            minValue={800}
                            maxValue={1110}
                            needleColor="black"
                            segments={3}
                            customSegmentLabels={[{}, {}, {}]}
                            segmentColors={["red", "orange", "green"]}
                            textColor={"#537A5A"}
                        />
                    </div>
                </div>
            </div>
            <Snackbar
                open={openErrorSnackbar}
                autoHideDuration={3000} //Duration to hide the snackbar in ms
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleSnackbarClose}>
                    {error}
                </MuiAlert>
            </Snackbar>
        </div>
    );
};

export default PlotDisplay;
