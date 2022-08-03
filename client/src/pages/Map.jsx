import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';

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
      <div className="h-full">
        Text
      </div>
      <Form 
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          register={register}
        />
    </Page>
  )
}

const Form = ({onSubmit, handleSubmit, register}) => (
  <div class="w-60 h-full shadow-md bg-white px-1 absolute right-0">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-6 gap-4">
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
  </div>
)
