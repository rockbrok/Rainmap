import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex flex-col items-center">
      <Card />
    </main>
    </>
  );
}

const Card = () => (
  <div className="flex flex-col items-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <img className="flex m-4 w-44 h-44 rounded-full border border-gray-100 shadow-sm" src="https://live.staticflickr.com/2087/2334490457_168660db11_b.jpg" alt="rain image" />
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rain sound of the day</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here is the most popular rain sound for today.</p>
        <div className="flex flex-col items-center">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span class="relative inline-flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <span class="material-symbols-outlined">play_arrow</span>
              &nbsp;Click to play audio
          </span>
        </button>
        </div>
    </div>
  </div>
)
