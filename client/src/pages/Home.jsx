import Leaflet from "leaflet";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useSwipeable } from "react-swipeable";
import { t } from "i18next";

// components
import { Page } from "../App";
import { Radio } from "../components/Form";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState(process.env.REACT_APP_SERVER + "/all");

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
      <section className="grid grid-rows-1 grid-cols-12 grid-flow-row-dense gap-6 p-4 md:px-8 w-full h-full">
        <Form onChangeValue={onChangeValue} type={type} />
        <Cartogram
          MapContainer={MapContainer}
          TileLayer={TileLayer}
          Marker={Marker}
          Popup={Popup}
          data={data}
          loading={loading}
        />
        <TouchForm type={type} setType={setType} />
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
    <div className="col-span-12 md:col-span-9 lg:col-span-10 flex flex-col rounded border border-gray-200">
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
          ""
        ) : (
          <>
            {data.audio.map((data) => {
              let URL = process.env.REACT_APP_SERVER + "/audio/";
              return (
                <div key={data.id}>
                  <Marker
                    // icon={icon}
                    position={[data.latitude, data.longitude]}
                  >
                    <Popup closeButton={false}>
                      <RainType data={data} />
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

const RainType = ({ data }) => {
  if (data.type === "Soft rain") return <span>{t("type.soft-rain")}</span>;
  else if (data.type === "Hard rain") return <span>{t("type.hard-rain")}</span>;
  else if (data.type === "Hybrid rain")
    return <span>{t("type.hybrid-rain")}</span>;
  else if (data.type === "Thunder") return <span>{t("type.thunder")}</span>;
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
    if (duration < 60) return Math.ceil(duration) + " " + t("duration.second");
    if (duration < 3600)
      return Math.ceil(duration / 60) + " " + t("duration.minute");
    else if (duration > 3600)
      return Math.ceil(duration / 3600) + " " + t("duration.hour");
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
    className="hidden row-span-1 col-span-3 lg:col-span-2 md:flex flex-col gap-3.5 w-max"
    onChange={onChangeValue}
  >
    <span className="text ml-[29px]">{t("type.type")}</span>
    <div className="flex flex-col gap-3">
      <Input
        id="soft"
        value={process.env.REACT_APP_SERVER + "/softrain"}
        name={t("type.soft")}
        checked={type === process.env.REACT_APP_SERVER + "/softrain"}
        radiogroup="rain"
      />
      <Input
        id="hard"
        value={process.env.REACT_APP_SERVER + "/hardrain"}
        name={t("type.hard")}
        checked={type === process.env.REACT_APP_SERVER + "/hardrain"}
        radiogroup="rain"
      />
      <Input
        id="hybrid"
        value={process.env.REACT_APP_SERVER + "/hybrid"}
        name={t("type.hybrid")}
        checked={type === process.env.REACT_APP_SERVER + "/hybrid"}
        radiogroup="rain"
      />
      <Input
        id="thunder"
        value={process.env.REACT_APP_SERVER + "/thunder"}
        name={t("type.thunder")}
        checked={type === process.env.REACT_APP_SERVER + "/thunder"}
        radiogroup="rain"
      />
      <Input
        id="all"
        value={process.env.REACT_APP_SERVER + "/all"}
        name={t("type.all")}
        checked={type === process.env.REACT_APP_SERVER + "/all"}
        radiogroup="rain"
      />
    </div>
  </div>
);

const TouchForm = ({ onChangeValue, type, setType }) => {
  const options = [
    {
      label: t("type.soft"),
      value: process.env.REACT_APP_SERVER + "/softrain",
    },
    {
      label: t("type.hard"),
      value: process.env.REACT_APP_SERVER + "/hardrain",
    },
    {
      label: t("type.hybrid"),
      value: process.env.REACT_APP_SERVER + "/hybrid",
    },
    {
      label: t("type.thunder"),
      value: process.env.REACT_APP_SERVER + "/thunder",
    },
    { label: t("type.all"), value: process.env.REACT_APP_SERVER + "/all" },
  ];

  const [counter, setCounter] = useState(4);

  const increase = () => {
    setCounter((c) => (c + 1) % options.length);
    setType(options[counter].value);
  };

  const decrease = () => {
    setCounter((c) => (c - 1 + options.length) % options.length);
    setType(options[counter].value);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => increase(),
    onSwipedRight: () => decrease(),
  });

  return (
    <div
      className="flex row-span-1 col-span-12 md:hidden flex-row gap-3.5 p-4 md:px-8 w-full items-center justify-center"
      {...handlers}
    >
      <div className="flex flex-row w-[200px] justify-between">
        <button
          onClick={() => {
            decrease();
          }}
          className="w-6 h-6"
        >
          <span
            className="material-symbols-outlined"
            style={{
              filter:
                "invert(25%) sepia(10%) saturate(1382%) hue-rotate(177deg) brightness(99%) contrast(84%)",
            }}
          >
            navigate_before
          </span>
        </button>
        <span>{options[counter].label}</span>
        <button
          onClick={() => {
            increase();
          }}
          className="w-6 h-6"
        >
          <span
            className="material-symbols-outlined"
            style={{
              filter:
                "invert(25%) sepia(10%) saturate(1382%) hue-rotate(177deg) brightness(99%) contrast(84%)",
            }}
          >
            navigate_next
          </span>
        </button>
      </div>
    </div>
  );
};

const Input = (props) => {
  return (
    <div className="form-check flex flex-row items-center">
      <div className="w-6 h-6 flex flex-col items-center justify-center mr-1.5">
        <Radio
          id={props.id}
          value={props.value}
          name={props.radiogroup}
          checked={props.checked}
        />
      </div>
      <label
        className="form-check-label inline-block text-gray-800 text-sm"
        htmlFor={props.id}
      >
        {props.name}
      </label>
    </div>
  );
};
