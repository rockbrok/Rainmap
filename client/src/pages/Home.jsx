import { Helmet } from 'react-helmet';

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <Helmet>
      <title>Rainmap | Home</title>
    </Helmet>
    <Navbar />
    <section className="grid grid-rows-2 grid-cols-4 grid-flow-row-dense gap-6 items-center my-8 px-8 w-full">
      <Card 
        style={{
          backgroundImage: "url('https://cdn.stocksnap.io/img-thumbs/960w/MKZ6C61S8L.jpg')", 
          backgroundPosition: "bottom", 
          height: "100%", 
          gridRow: "span 2 / span 2", 
          gridColumn: "span 2 / span 2"
        }}
        title="Benefits of listening to rain"
        children={<List />}
      />
      <Card 
        style={{
          backgroundImage: "url('https://live.staticflickr.com/128/403890859_9f57030196_b.jpg')", 
          backgroundPosition: "bottom", 
          height: "20rem", 
          gridColumn: "span 2 / span 2", 
          justifyContent: "center"
        }}
        title="Rain sound of the day"
        button={<Button />}
      />
      <Card 
        style={{
          backgroundImage: "url('https://live.staticflickr.com/2908/14585835518_ececc6dde7_b.jpg')", 
          height: "20rem", 
          justifyContent: "center"
        }}
        title="Light rain sounds"
      />
      <Card 
        style={{
          backgroundImage: "url('https://live.staticflickr.com/5574/14816852688_d3e65036e3_b.jpg')", 
          backgroundPosition: "top", 
          height: "20rem",
          justifyContent: "center"
        }}
        title="Thunder sounds"
      />
      </section>
    <Footer />
    </>
  );
}

const Card = (props) => (
  <div className="flex flex-col p-5 text-white bg-cover bg-no-repeat rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" style={props.style}>
    <div className="flex flex-col items-center content-center justify-self-center justify-items-center justify-content-center">
      <h5 className="mb-2 text-4xl font-bold tracking-tight whitespace-pre">{props.title}</h5>
        {props.button}
    </div>
    {props.children}
  </div>
);

const List = () => (
  <>
  <ListItem
    text="Integer semper quam eget elit scelerisque, a dapibus massa imperdiet."
  />
  <ListItem
    text="Vestibulum non lectus lacinia, fermentum massa vel, cursus tellus."
  />
  <ListItem
    text="Aliquam vehicula eros eu iaculis venenatis."
  />
  <ListItem
    text="Integer laoreet urna sed nisi pretium scelerisque posuere quis neque."
  />
  <ListItem
    text="Nunc nec risus at est laoreet ornare."
  />
  <ListItem
    text="Aenean semper est viverra hendrerit vehicula."
  />
  <ListItem
    text="Nunc nec risus at est laoreet ornare."
  />
  <ListItem
    text="Aenean semper est viverra hendrerit vehicula."
  />
  </>
);

const ListItem = (props) => (
  <li className="flex flex-row items-center gap-4 my-2">
    <span class="material-symbols-outlined">circle</span>
    <span className="text-white text-2xl">{props.text}</span>
  </li>
);

const Button = () => (
  <>
  <p className="mb-3 text-xl">Here is the most popular rain sound for today.</p>
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
      <span class="relative inline-flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        <span class="material-symbols-outlined">play_arrow</span>
        &nbsp;Click to play audio
      </span>
    </button>
  </>
);