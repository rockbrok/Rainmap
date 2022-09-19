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
  const [type, setType] = useState("http://glennp.pythonanywhere.com/all");

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
              let URL = "http://glennp.pythonanywhere.com/audio/";
              return (
                <div key={data.id}>
                  <Marker
                    // icon={icon}
                    position={[data.latitude, data.longitude]}
                  >
                    <Popup closeButton={false}>
                      <span>{data.type}</span>
                      <AudioPlayer url={URL + data.filename} />
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

const AudioPlayer = ({ url }) => {
  const audioPlayer = useRef();
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState();

  const play = () => {
    if (url) {
      setPlaying(true);
      audioPlayer.current.play();
    }
  };

  const stop = () => {
    if (url) {
      audioPlayer.current.pause();
      audioPlayer.current.currentTime = 0;
    }
  };

  const onPlaying = () => {
    if (audioPlayer.current.paused) setPlaying(false);
  };

  const onLoadedMetadata = () => {
    if (audioPlayer.current) setDuration(audioPlayer.current.duration);
  };

  function durationSlice() {
    if (duration < 60) return Math.ceil(duration) + " secs";
    if (duration < 3600) return Math.ceil(duration / 60) + " mins";
    else if (duration > 3600) return Math.ceil(duration / 3600) + " hours";
  }

  return (
    <div className="flex flex-col">
      <span className="text-gray-500">{durationSlice()}</span>
      <div
        onClick={!playing ? play : stop}
        className="mt-1 ml-[-2px] h-7 w-7 cursor-pointer select-none"
      >
        <audio
          src={url}
          ref={audioPlayer}
          onTimeUpdate={onPlaying}
          onLoadedMetadata={onLoadedMetadata}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        {!playing ? (
          <span className="material-symbols-outlined icon">play_circle</span>
        ) : (
          <span className="material-symbols-outlined icon">pause_circle</span>
        )}
      </div>
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
        value="http://glennp.pythonanywhere.com/softrain"
        name={`Light`}
        checked={type === "http://glennp.pythonanywhere.com/softrain"}
        radiogroup="rain"
      />
      <Input
        id="hard"
        value="http://glennp.pythonanywhere.com/hardrain"
        name={`Hard`}
        checked={type === "http://glennp.pythonanywhere.com/hardrain"}
        radiogroup="rain"
      />
      <Input
        id="hybrid"
        value="http://glennp.pythonanywhere.com/hybrid"
        name={`Hybrid`}
        checked={type === "http://glennp.pythonanywhere.com/hybrid"}
        radiogroup="rain"
      />
      <Input
        id="thunder"
        value="http://glennp.pythonanywhere.com/thunder"
        name={`Thunder`}
        checked={type === "http://glennp.pythonanywhere.com/thunder"}
        radiogroup="rain"
      />
      <Input
        id="all"
        value="http://glennp.pythonanywhere.com/all"
        name={`All`}
        checked={type === "http://glennp.pythonanywhere.com/all"}
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
