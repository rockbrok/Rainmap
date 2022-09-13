import Leaflet from "leaflet";
import { useState, useEffect, useRef } from "react";
import { Radio } from "../components/Form";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { t } from "i18next";
import axios from "axios";

// components
import { Page } from "../App";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [type, setType] = useState("/allaudio");

  function onChangeValue(event) {
    setType(event.target.value);
  }

  useEffect(() => {
    getData();
  }, [type]);

  const getData = async () => {
    try {
      let res = await axios({
        url: type,
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Page title={`Rainmap`}>
      <section className="grid grid-rows-1 grid-cols-7 grid-flow-row-dense gap-6 px-8 w-full mb-6 h-full">
        <Form onChangeValue={onChangeValue} type={type} />
        <Cartogram
          MapContainer={MapContainer}
          TileLayer={TileLayer}
          Marker={Marker}
          Popup={Popup}
          data={data}
          loading={loading}
        />
      </section>
    </Page>
  );
}

const Cartogram = ({
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  data,
  loading,
}) => {
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState("");
  const audioRef = useRef();

  //  Create the Icon
  const LeafIcon = Leaflet.Icon.extend({
    options: {},
  });

  const blueIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
    // iconAnchor: null,
    // popupAnchor: null,
    // shadowUrl: null,
    // shadowSize: null,
    // shadowAnchor: null,
    // iconSize: [32, 32],
    // iconAnchor: [32, 64],
  });

  const [icon, setIcon] = useState(blueIcon);

  return (
    <div className="col-span-6 flex flex-col rounded border border-gray-200">
      <MapContainer
        center={[14.421687435151673, -16.804670843543096]}
        zoom={2}
        minZoom={2}
        maxZoom={13}
        maxBoundsViscosity={1.0}
        maxBounds={Leaflet.latLngBounds(
          Leaflet.latLng(-90, -200),
          Leaflet.latLng(90, 200)
        )}
        scrollWheelZoom={false}
        attributionControl={false}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "4px",
          zIndex: "0",
        }}
      >
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />

        {loading ? (
          "loading"
        ) : (
          <>
            {data.audio.map((data) => {
              let URL = "http://localhost:5000/audio/";
              let audio = new Audio(URL + data.filename);

              const onLoadedMetadata = () => {
                if (audioRef.current) {
                  setDuration(audioRef.current.duration);
                }
              };

              const play = () => {
                setPlaying(true);
                audioRef.current.play();
              };

              const pause = () => {
                setPlaying(false);
                audioRef.current.pause();
              };

              return (
                <div key={data.id}>
                  <Marker
                    icon={icon}
                    position={[data.latitude, data.longitude]}
                    eventHandlers={{
                      mouseover: (event) => event.target.openPopup(),
                    }}
                  >
                    <Popup closeButton={false}>
                      <span>{data.type}</span>
                      {/* <span>{duration}</span> */}
                      <span className="text-gray-500">3 mins</span>
                      <button
                        className="mt-1 ml-[-2px] justify-self-start w-7 h-7 active:outline-none"
                        onClick={playing ? pause : play}
                      >
                        {playing ? (
                          <span class="material-symbols-outlined icon">
                            pause_circle
                          </span>
                        ) : (
                          <span class="material-symbols-outlined icon">
                            play_circle
                          </span>
                        )}

                        <audio
                          ref={audioRef}
                          onLoadedMetadata={onLoadedMetadata}
                          src={URL + data.filename}
                        />
                      </button>
                    </Popup>
                  </Marker>
                </div>
              );
            })}
          </>
        )}
      </MapContainer>
    </div>
  );
};

const Form = ({ onChangeValue, type }) => (
  <div
    className="row-span-1 col-span-1 flex flex-col pr-6 pl-6 pb-6 pt-0 gap-3.5"
    onChange={onChangeValue}
  >
    <span className="uppercase text font-medium">Rain Type</span>
    <div className="flex flex-col gap-3">
      <Input
        id="light"
        value="/softrain"
        name={`Light`}
        checked={type === "/softrain"}
        radiogroup="rain"
      />
      <Input
        id="hard"
        value="/hardrain"
        name={`Hard`}
        checked={type === "/hardrain"}
        radiogroup="rain"
      />
      <Input
        id="hybrid"
        value="/hybrid"
        name={`Hybrid`}
        checked={type === "/hybrid"}
        radiogroup="rain"
      />
      <Input
        id="thunder"
        value="/thunder"
        name={`Thunder`}
        checked={type === "/thunder"}
        radiogroup="rain"
      />
      <Input
        id="all"
        value="/allaudio"
        name={`All`}
        checked={type === "/allaudio"}
        radiogroup="rain"
      />
    </div>
  </div>
);

const Input = (props) => {
  return (
    <div className="form-check flex flex-row items-center">
      <Radio
        id={props.id}
        value={props.value}
        name={props.radiogroup}
        checked={props.checked}
      />
      <label
        className="form-check-label inline-block text-gray-800"
        htmlFor={props.id}
      >
        {props.name}
      </label>
    </div>
  );
};
