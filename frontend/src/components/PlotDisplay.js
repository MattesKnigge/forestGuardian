import React, {useEffect, useState} from 'react';
import Speedometer from 'react-d3-speedometer';
import axios from "axios";



const PlotDisplay = () => {
    const [data, setData] = useState({ temperature : { timestamp : "", value: "-25"}, humidity: { timestamp : "", value: "0"}, pressure: { timestamp : "", value: "800"}});
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/sensorknoten-vogelhaus/test/");
                console.dir(response );
                setData(response.data);
            } catch (error) {
            }
        }

        fetchData();
    }, []);

    return (
        <div className="plot-display-content">
            <h1 style={{ textAlign: 'center' }}>Air Sensors {data.temperature.timestamp}</h1>
            <div className="gauge-container">
                <div className="gauge-item temp">
                    <h3>Temperature</h3>
                    <Speedometer
                        value={parseInt(data.temperature.value)}
                        currentValueText="#{value} °C"
                        currentValuePlaceholderStyle={'#{value}'}
                        minValue={-25}
                        maxValue={45}
                        needleColor="black"
                        segmentColors={["#8f0000", "red", "orange", "green", "green", "orange", "red", "#8b0000",]}
                        segments={8}
                        width={400}
                        customSegmentLabels={[{}, {}, {}, {}, {}, {}, {}, {},]}
                        textColor={"black"}
                    />

                </div>
                <div className="gauge-item hum-pres">
                    <div className="gauge-item hum">
                        <h3>Humidity</h3>
                        <Speedometer
                            value={parseInt(data.humidity.value)}
                            currentValueText="#{value} %"
                            currentValuePlaceholderStyle={'#{value}'}
                            minValue={0}
                            maxValue={110}
                            needleColor="black"
                            startColor="red"
                            endColor={"green"}
                            segments={6}
                            customSegmentLabels={[{}, {}, {}, {}, {}, {},]}
                            segmentColors={["#8f0000", "red", "orange", "green", "green", "green"]}
                            textColor={"black"}
                        />
                    </div>
                    <div className="gauge-item pres">
                        <h3>Pressure</h3>
                        <Speedometer
                            value={parseInt(data.pressure.value)}
                            currentValueText="#{value} hPa"
                            currentValuePlaceholderStyle={'#{value}'}
                            minValue={800}
                            maxValue={1110}
                            needleColor="black"
                            startColor="red"
                            endColor="green"
                            segments={3}
                            customSegmentLabels={[{},{},{},]}
                            segmentColors={["red", "orange", "green"]}
                            textColor={"black"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlotDisplay;
//Windgeschwindigkeit in km/h bzw. stärke
// Niederschlag -> Wann/Wie viel
//Windrichtung
//Mikrofon -> Geräusche (erkennung von Tieren) -> Hochfrequenz?
//Bodenfeuchtigkeit
//Bodentermperatur
//Feinstaubsensor -> Waldbrandvorsorge