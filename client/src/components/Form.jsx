import { useForm } from 'react-hook-form';

export const Label = (props) => (
  <label 
      htmlFor={props.for}
      className="form-label inline-block mb-2 text-gray-700"
      style={props.style}
    >
      {props.name}
  </label>
);

export const Input = (props) => {
  const { register, formState: { errors } } = useForm();

  return (
    <input {
      ...register(props.id,
        { required: true })
      }
      type={props.type}
      id={props.id}
      value={props.value}
      style={props.style}
      aria-describedby={props.describedby}
      placeholder={props.placeholder}
      className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    />
  )
}

export const Select = (props) => {
  const { register, formState: { errors } } = useForm();

  return (
    <select {
      ...register(props.id,
        { required: true })
      }
      id={props.id}
      aria-describedby={props.describedby}
      autoComplete={props.autoComplete}
      className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    >
      {props.children}
    </select>
  )
}

export const Button = (props) => (
  <button
    type="submit"
    id="save"
    onClick={props.click}
    disabled={props.disabled}
    className="w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
  >
    {props.name}
  </button>
);

export const Path = (props) => (
  <p className="text-gray-800 mt-6 text-center">
    {props.description}&nbsp;
    <button
      onClick={() => props.setShow(!props.show)}
      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
    >
      {props.name}
    </button>
  </p>
);

export const Checkbox = (props) => {
  const { register, formState: { errors } } = useForm();

  return (
    <input {
      ...register(props.id,
        { required: true })
      }
      type="checkbox"
      id={props.id}
      value={props.value}
      style={props.style}
      onChange={props.change}
      className="form-check-input 
        appearance-none 
        h-4 w-4 
        border border-gray-300 
        rounded-sm 
        bg-white 
        checked:bg-blue-600 checked:border-blue-600 
        focus:outline-none 
        transition duration-200 
        bg-no-repeat bg-center bg-contain 
        float-left 
        mr-2 
        cursor-pointer"
    />
  )
}