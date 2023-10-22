import React from 'react';
import Speedometer from 'react-d3-speedometer';

function randomTemp(min, max) {
    min = Math.ceil(-25);
    max = Math.floor(42);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomHum(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomPres(min, max) {
    min = Math.ceil(800);
    max = Math.floor(1100);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const data = {
    temp: { timestamp: '2023-10-20 23:40:24', value: randomTemp() },
    hum: { timestamp: '2023-10-20 23:40:24', value: randomHum() },
    pres: { timestamp: '2023-10-20 23:40:24', value: randomPres() },
};

// Function to format a timestamp as a normal date and time string
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

const timestampTemp = formatTimestamp(data.temp.timestamp);
const timestampHum = formatTimestamp(data.hum.timestamp);
const timestampPres = formatTimestamp(data.pres.timestamp);


const customSegmentLabelsPressure = [
    { text: '', position: '0' },
    { text: '', position: '50' },
    { text: '', position: '100' },
];
const customSegmentLabelsHumidity = [
    { text: '', position: '0' },
    { text: '', position: '20' },
    { text: '', position: '40' },
    { text: '', position: '60' },
    { text: '', position: '80' },
    { text: '', position: '100' },
];
const customSegmentLabelsTemperature = [
    { text: '', position: 'Outside' },
    { text: '', position: 'Outside' },
    { text: '', position: 'Outside' },
    { text: '', position: 'Outside' },
    { text: '', position: 'Outside' },
    { text: '', position: 'Outside' },
    { text: '', position: 'Outside' },
    { text: '', position: 'Outside' },
];



const PlotDisplay = () => {
    return (
        <div className="plot-display-content">
            <h1 style={{ textAlign: 'center' }}>Air Sensors {timestampTemp}</h1>
            <div className="gauge-container">
                <div className="gauge-item temp">
                    <h3>Temperature</h3>
                    <Speedometer
                        value={data.temp.value}
                        currentValueText="#{value} °C"
                        currentValuePlaceholderStyle={'#{value}'}
                        minValue={-25}
                        maxValue={45}
                        needleColor="black"
                        segmentColors={["#8f0000", "red", "orange", "green", "green", "orange", "red", "#8b0000",]}
                        segments={8}
                        width={400}
                        customSegmentLabels={customSegmentLabelsTemperature}
                        textColor={"black"}
                    />

                </div>
                <div className="gauge-item hum-pres">
                    <div className="gauge-item hum">
                        <h3>Humidity</h3>
                        <Speedometer
                            value={data.hum.value}
                            currentValueText="#{value} %"
                            currentValuePlaceholderStyle={'#{value}'}
                            minValue={0}
                            maxValue={110}
                            needleColor="black"
                            startColor="red"
                            endColor={"green"}
                            segments={6}
                            customSegmentLabels= {customSegmentLabelsHumidity}
                            segmentColors={["#8f0000", "red", "orange", "green", "green", "green"]}
                            textColor={"black"}
                        />
                    </div>
                    <div className="gauge-item pres">
                        <h3>Pressure</h3>
                        <Speedometer
                            value={data.pres.value}
                            currentValueText="#{value} hPa"
                            currentValuePlaceholderStyle={'#{value}'}
                            minValue={800}
                            maxValue={1110}
                            needleColor="black"
                            startColor="red"
                            endColor="green"
                            segments={3}
                            customSegmentLabels={customSegmentLabelsPressure}
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