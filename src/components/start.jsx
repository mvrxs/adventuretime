import Nav from './nav.jsx';
import End from './end.jsx';

export default function Start({ toggleHistory }) {
    return (
        <div className="flex flex-col w-full h-screen">
            <Nav />
            <main className="flex flex-col md:flex-row items-center justify-between py-0 px-4 md:px-6 lg:py-6 lg:px-10 bg-gray-300 dark:bg-zinc-500 h-screen">
                <div className="mb-4 md:mb-0 md:w-1/2">
                    <h1
                        className="text-3xl mb-4 md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                        ADVENTURE TIME
                    </h1>
                    <div className="mt-2 text-gray-600 dark:text-white text-justify mr-24">
                        <p>Welcome to the magical land of Ooo, where fun and adventure intertwine at every corner! In "Adventure Time," the acclaimed animated series, we follow Finn, the brave and cheerful human, and his loyal friend Jake, a dog with magical powers, on an epic journey through a realm full of extravagant creatures, captivating princesses, and unforgettable villains.</p>
                        <p>With its unique blend of irreverent humor, deep emotions, and surrealistic narrative, "Adventure Time" not only immerses us in a world of fantasy but also invites us to reflect on friendship, courage, and the complexity of life.</p>
                        <p>Get ready to dive into a vibrant and colorful universe, where each episode is an open door to unrestrained imagination and unexpected emotions. It's Adventure Time!</p>
                    </div>
                    <div className="flex justify-center mt-5">
                        <button
                            onClick={toggleHistory}
                            className="rounded-md bg-emerald-300 p-5 text-sm font-medium transition-colors hover:bg-slate-400 hover:text-white focus:bg-zinc-900 focus:text-emerald-400 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-400/50 data-[state=open]:bg-slate-400/50 text-gray-600 dark:hover:text-gray-700 dark:bg-teal-500 dark:hover:bg-teal-600  dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 shadow-md"
                        >
                            Start your adventure now!
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img
                        alt="Header Image"
                        className="w-full h-64 object-cover md:h-auto shadow-lg rounded-xl mb-8 md:mb-4"
                        height="100"
                        src="./alls.png"
                        style={{
                            aspectRatio: "400/200",
                            objectFit: "cover",
                        }}
                        width="500" />
                </div>
            </main>
            <End />
        </div>
    );
}
