import { t } from 'i18next';
import {useState, useEffect} from 'react';
import axios from 'axios';

// components
import { Page } from '../App';

export default function Home() {
  const [data, setData] = useState([{}]);

  function getData() {
    axios({
      method: "GET",
      url:"/members",
    })
    .then((response) => {
      const res =response.data
      console.log(res)
      setData(({
        profile_name: res.members[0],
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

    useEffect(() => {
      getData();
    }, [])

  return (
    <Page
      title={`Rainmap`}
    >
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
          // title={t("home.card1.title")}
          title={data.profile_name}
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
          title={t("home.card2.title")}
          button={<Button />}
        />
        <Card
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/3/34/Rain_nd_hill.jpg')",
            backgroundPosition: "bottom",
            height: "20rem",
            justifyContent: "center"
          }}
          titleStyle={{
            userSelect: "none",
            cursor: "pointer"
          }}
          hover={<div className="flex justify-center select-none items-center z-10 opacity-0 bg-gradient-to-t cursor-pointer rounded-lg from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />}
          title={t("home.card3")}
        />
        <Card
          style={{
            backgroundImage: "url('https://live.staticflickr.com/4146/5038376688_820a9e81c2_b.jpg')",
            backgroundPosition: "top",
            height: "20rem",
            justifyContent: "center"
          }}
          titleStyle={{
            userSelect: "none",
            cursor: "pointer"
          }}
          hover={<div className="flex justify-center items-center z-10 opacity-0 bg-gradient-to-t cursor-pointer rounded-lg from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />}
          title={t("home.card4")}
        />
      </section>
    </Page>
  );
}

const Card = (props) => (
  <div className="flex flex-col group relative p-5 text-white bg-cover bg-no-repeat rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" style={props.style}>
    <div className="flex flex-col items-center content-center justify-self-center justify-items-center justify-content-center">
      {props.hover}
      <h5 className="text-center mb-2 text-3xl font-bold whitespace-wrap z-20" style={props.titleStyle}>{props.title}</h5>
      {props.button}
    </div>
    {props.children}
  </div>
);

const List = () => (
  <>
    <ListItem
      text={t("home.card1.first")}
      icon={<span className="material-symbols-outlined">routine</span>}
    />
    <ListItem
      text={t("home.card1.second")}
      icon={<span className="material-symbols-outlined">monitor_heart</span>}
    />
    <ListItem
      text={t("home.card1.third")}
      icon={<span className="material-symbols-outlined">sentiment_satisfied</span>}
    />
    <ListItem
      text={t("home.card1.fourth")}
      icon={<span className="material-symbols-outlined">favorite</span>}
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
    <p className="mb-3 text-xl">{t("home.card2.subtitle")}</p>
    <button type="button">
      <span className="material-symbols-outlined" style={{ fontSize: "40px" }} id="play">
        play_circle
      </span>
    </button>
  </>
);