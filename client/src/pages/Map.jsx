import Leaflet from 'leaflet';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Checkbox } from '../components/Form';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { t } from 'i18next';

// components
import { Page } from '../App';

export default function Map() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  const [checked, setChecked] = useState(null);

  return (
    <Page>
      <Helmet>
        <title>
          Rainmap | {t("nav.map")}
        </title>
      </Helmet>
      <section className="grid grid-rows-1 grid-cols-7 grid-flow-row-dense gap-6 px-8 w-full mb-6">
        <Form 
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          register={register}
          checked={checked}
          setChecked={setChecked}
        />
        <Cartogram
          MapContainer={MapContainer}
          TileLayer={TileLayer}
          Marker={Marker}
          Popup={Popup}
        />
      </section>
    </Page>
  )
}

const Cartogram = ({MapContainer, TileLayer, Marker, Popup}) => (
  <div className="col-span-6 flex flex-col rounded-lg border border-gray-200">
    <MapContainer
      center={[39.18186854291841, -29.303018769460255]}
      zoom={3}
      minZoom={2}
      maxZoom={13}
      maxBoundsViscosity={1.0}
      maxBounds={Leaflet.latLngBounds((Leaflet.latLng(-90, -200)), Leaflet.latLng(90, 200))}
      scrollWheelZoom={false}
      attributionControl={false}
      style={{ width: "100%", height: "100%", borderRadius: "8px", zIndex: "0" }}
    >
      <TileLayer
        url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          <b>Type:</b>&nbsp;Hard rain <br /> 
          <b>Duration:</b>&nbsp;4:20:16 <br />
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

const Form = ({onSubmit, handleSubmit, checked, setChecked }) => (
  <form 
    onSubmit={handleSubmit(onSubmit)} 
    className="row-span-1 col-span-1 flex flex-col p-6 gap-4"
  >
    <span className="uppercase text-sm font-medium">Filter by</span>
    <span className="text-sm">Duration</span>
    <Input
      id="under-20"
      value=""
      name={`< 20 minutes`}
      checked={checked}
      setChecked={setChecked}
    />
    <Input
      id="under-60"
      value=""
      name={`< 60 minutes`}
      checked={checked}
      setChecked={setChecked}
    />
    <span className="text-sm">Type</span>
    <Input
      id="light-rain"
      value=""
      name={`Light rain`}
    />
    <Input
      id="hard-rain"
      value=""
      name={`Hard rain`}
    />
    <Input
      id="hybrid-rain"
      value=""
      name={`Hybrid rain`}
    />
    <Input
      id="thunder"
      value=""
      name={`Thunder`}
    />
    <button 
      type="submit" 
      className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
    >
      Submit
    </button>
  </form>
);

const Input = (props, {checked, setChecked}) => {
  const toggle = evt => setChecked(current => current === evt.target.value ? null : evt.target.value);

  return (
  <div className="form-check">
    <Checkbox
      id={props.id}
      value={props.value}
      checked={checked === props.id}
      onChange={toggle}
    />
    <label
      className="form-check-label inline-block text-gray-800"
      for={props.id}>
      {props.name}
    </label>
  </div>
  )
}
