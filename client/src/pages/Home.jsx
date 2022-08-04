import { Helmet } from 'react-helmet';

// components
import { Page } from '../App';

export default function Home() {
  return (
    <Page>
      <Helmet>
        <title>Rainmap</title>
      </Helmet>
      <section className="grid grid-rows-2 grid-cols-4 grid-flow-row-dense gap-6 items-center my-8 px-8 w-full">
        <Card 
          style={{
            backgroundImage: "url('https://cdn.stocksnap.io/img-thumbs/960w/MKZ6C61S8L.jpg')", 
            backgroundPosition: "bottom", 
            height: "100%", 
            gridRow: "span 2 / span 2", 
            gridColumn: "span 2 / span 2",
            justifyContent: "center",
            alignItems: "center"
          }}
          title="Benefits of listening to rain"
          children={<List />}
        />
        <Card 
          style={{
            backgroundImage: "linear-gradient(to right, #a3a26c, #94923a)",
            backgroundPosition: "bottom", 
            height: "20rem", 
            gridColumn: "span 2 / span 2", 
            justifyContent: "center"
          }}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          title="Rain sound of the day"
          button={<Button />}
        />
        <Card 
          style={{
            backgroundImage: "url('https://live.staticflickr.com/8330/8102240427_80d3e71512_b.jpg')", 
            backgroundPosition: "left", 
            height: "20rem", 
            justifyContent: "center"
          }}
          titleStyle={{
            userSelect: "none",
            cursor: "pointer"
          }}
          hover={<div className="flex justify-center select-none items-center z-10 opacity-0 bg-gradient-to-t cursor-pointer rounded-lg from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"/>}
          title="Light rain sounds"
        />
        <Card 
          style={{
            backgroundImage: "url('https://live.staticflickr.com/5574/14816852688_d3e65036e3_b.jpg')", 
            backgroundPosition: "top", 
            height: "20rem",
            justifyContent: "center"
          }}
          titleStyle={{
            userSelect: "none",
            cursor: "pointer"
          }}
          hover={<div className="flex justify-center items-center z-10 opacity-0 bg-gradient-to-t cursor-pointer rounded-lg from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"/>}
          title="Thunder sounds"
        />
      </section>
    </Page>
  );
}


const Card = (props) => (
  <div className="flex flex-col group relative p-5 text-white bg-cover bg-no-repeat rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" style={props.style}>
    <div className="flex flex-col items-center content-center justify-self-center justify-items-center justify-content-center">
      {props.hover}
      <h5 className="mb-2 text-3xl font-bold whitespace-pre z-20" style={props.titleStyle}>{props.title}</h5>
        {props.button}
    </div>
    {props.children}
  </div>
);

const List = () => (
  <>
  <ListItem
    text="Improved sleep quality"
    icon={<span class="material-symbols-outlined">routine</span>}
  />
  <ListItem
    text="Lowers blood pressure"
    icon={<span class="material-symbols-outlined">monitor_heart</span>}
  />
  <ListItem
    text="Increases confidence and self-esteem"
    icon={<span class="material-symbols-outlined">sentiment_satisfied</span>}
  />
  <ListItem
    text="Provides stress relief"
    icon={<span class="material-symbols-outlined">psychology</span>}
  />
  </>
);

const ListItem = (props) => (
  <li className="flex flex-row items-center gap-4 my-2">
    {props.icon}
    <span className="text-white text-2xl whitespace-nowrap">{props.text}</span>
  </li>
);

const Button = () => (
  <>
  <p className="mb-3 text-xl">Here is the most popular rain sound for today.</p>
  <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
    <span class="material-symbols-outlined">play_arrow</span>
    &nbsp;Click to play audio
  </button>
  </>
);