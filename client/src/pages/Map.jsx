import Leaflet from 'leaflet';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import '../index.css';

// components
import { Page } from '../App';

export default function Map() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Page>
      <Helmet>
        <title>
          Rainmap | Map
        </title>
      </Helmet>
      <section className="grid grid-rows-1 grid-cols-7 grid-flow-row-dense gap-6 px-8 w-full mb-6">
        <Form 
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          register={register}
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
      center={[51.505, -0.09]}
      zoom={13}
      minZoom={2}
      maxBoundsViscosity={1.0}
      maxBounds={Leaflet.latLngBounds((Leaflet.latLng(-90, -1200)), Leaflet.latLng(90, 1200))}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%", borderRadius: "8px", zIndex: "0" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          Hi Jess <br /> Taco Bell?.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

const Form = ({onSubmit, handleSubmit, register}) => (
  <form onSubmit={handleSubmit(onSubmit)} className="row-span-1 col-span-1 flex flex-col p-6 gap-4">
    <span className="uppercase text-sm font-medium">Filter by</span>
    <span className="text-sm">Length</span>
    <div class="form-check">
      <input {
        ...register('under-20',
          { required: true })
      }
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        {`< 20 minutes`}
      </label>
    </div>
    <div class="form-check">
      <input {
        ...register('under-60',
          { required: true })
      }
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        {`< 60 minutes`}
      </label>
    </div>
    <span className="text-sm">Type</span>
    <div class="form-check">
      <input {
        ...register('light-rain',
          { required: true })
      }
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        {`Light rain`}
      </label>
    </div>
    <div class="form-check">
      <input {
        ...register('hard-rain',
          { required: true })
      }
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        {`Hard rain`}
      </label>
    </div>
    <div class="form-check">
      <input {
        ...register('hybrid-rain',
          { required: true })
      }
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        {`Hybrid rain`}
      </label>
    </div>
    <div class="form-check">
      <input {
        ...register('thunder',
          { required: true })
      }
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        {`Thunder`}
      </label>
    </div>
    <button type="button" class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
  </form>
);
