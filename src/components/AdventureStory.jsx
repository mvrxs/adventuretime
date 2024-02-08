import React, { useState, useRef, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Nav from './nav.jsx';
import End from './end.jsx';

// Defino los tipos de listas que se pueden arrastrar
const Types = {
    CHARACTER: 'character',
    WEAPON: 'weapon',
    LOCATION: 'location',
};

const DraggableItem = ({ type, item, onDrop }) => {
    const [, drag] = useDrag({
        type,
        item: { type, value: item },
    });

    return (
        <div ref={drag} className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded dark:text-slate-200">
            {item}
        </div>
    );
};

const AdventureStory = () => {

    const [story, setStory] = useState({ character: '', weapon: '', location: '' });
    const [locationImage, setLocationImage] = useState(null);
    const [characterImage, setCharacterImage] = useState(null);
    const [weaponImage, setWeaponImage] = useState(null);
    const handleDrop = (type, value) => {
        setStory((prevStory) => ({ ...prevStory, [type]: value }));

        if (type === Types.LOCATION) {
            const locationImageMap = {
                'Ice Kingdom': './places/ice.png',
                'City of Thieves at Night': './places/thief.png',
                'Breakfast Kingdom': './places/break.png',
            };
            setLocationImage(locationImageMap[value]);
        }

        if (type === Types.CHARACTER) {
            const characterImageMap = {
                Finn: './finn/finbase.png',
                Marceline: './marceline/marcybase.png',
                Simon: './simon/simonbase.png',
            };
            setCharacterImage(characterImageMap[value]);
            setWeaponImage(null);
        }


        if (type === Types.WEAPON) {
            let weaponImageMap = {};
            if (story.character === 'Finn') {
                weaponImageMap = {
                    'Demon Blood Sword': './finn/finsword.png',
                    'Nightosphere Amulet': './finn/finamulet.png',
                    'Electrode Gun': './finn/fingun.png',
                };
            }
            else if (story.character === 'Marceline') {
                weaponImageMap = {
                    'Demon Blood Sword': './marceline/marcysword.png',
                    'Nightosphere Amulet': './marceline/marcyamulet.png',
                    'Electrode Gun': './marceline/marcygun.png',
                };
            }
            else if (story.character === 'Simon') {
                weaponImageMap = {
                    'Demon Blood Sword': './simon/simonsword.png',
                    'Nightosphere Amulet': './simon/simonamulet.png',
                    'Electrode Gun': './simon/simongun.png',
                };
            }
            setWeaponImage(weaponImageMap[value]);
        }
    };

    const ElementsText = () => {
        setCharacterImage(null);
        setWeaponImage(null);
        setLocationImage(null);
    };
    const [, drop] = useDrop({
        accept: [Types.CHARACTER, Types.WEAPON, Types.LOCATION],
        drop: (item) => handleDrop(item.type, item.value),
    });

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex flex-col w-full h-screen">
                <Nav />
                <main className="flex flex-col md:flex-row items-center justify-between py-0 px-4 md:px-6 lg:py-6 lg:px-10 bg-gray-300 dark:bg-zinc-500 h-screen gap-9">
                    <div className={`mb-4 md:mb-0 md:w-1/2`}>

                        <div className="flex flex-col items-center">
                            <div className="my-4">
                                <h2 className="text-2xl font-bold mb-2 dark:text-white text-black">Adventure Story Time</h2>

                                <div ref={drop}>
                                    <p className="dark:text-white text-black">
                                        In the magical kingdom of Ooo, where fantasy and fun intertwine, our fearless adventurer, &nbsp;
                                        <b>{story.character || '_____________'}</b>, with a brave heart, decided to embark on a new odyssey.
                                        Equipped with their reliable <b>{story.weapon || '_____________'}</b>, an essential tool for any hero,
                                        they headed towards the mysterious <b>{story.location || '____________'}</b>, a place filled with secrets and challenges.
                                    </p>
                                    <p className="dark:text-white text-black">
                                        As they walked through the enchanted forest, <b>{story.character || '_____________'}</b> encountered
                                        magical creatures and extravagant characters. The sound of the wind whispered ancient legends,
                                        and the glow of the stars illuminated the path to the next feat.
                                    </p>
                                    <p className="dark:text-white text-black">
                                        With each step, <b>{story.character || '_____________'}</b> faced crucial decisions.
                                        Will they use the <b>{story.weapon || '_____________'}</b> to defeat challenging enemies, or will they seek a peaceful solution?
                                        Destiny held unexpected encounters, from the Candy City to the Mountain of Fire;
                                        each destination revealed new opportunities and challenges.
                                    </p>
                                    <p className="dark:text-white text-black">
                                        And so, our story continues, with <b>{story.character || '_____________'}</b> forging their legend in the Land of Ooo,
                                        leaving traces of courage and bravery wherever they go. What will be the next chapter in this exciting adventure?
                                        Only time will tell!
                                    </p>

                                </div>
                            </div>
                            <div className="flex space-x-5 rounded-lg px-5">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 dark:text-slate-900 text-black">Personajes</h3>
                                    <DraggableItem type={Types.CHARACTER} item="Finn" onDrop={handleDrop} />
                                    <DraggableItem type={Types.CHARACTER} item="Marceline" onDrop={handleDrop} />
                                    <DraggableItem type={Types.CHARACTER} item="Simon" onDrop={handleDrop} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-2 dark:text-slate-900 text-black">Armas</h3>
                                    <DraggableItem type={Types.WEAPON} item="Demon Blood Sword" onDrop={handleDrop} />
                                    <DraggableItem type={Types.WEAPON} item="Nightosphere Amulet" onDrop={handleDrop} />
                                    <DraggableItem type={Types.WEAPON} item="Electrode Gun" onDrop={handleDrop} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-2 dark:text-slate-900 text-black ">Lugares</h3>
                                    <DraggableItem type={Types.LOCATION} item="Ice Kingdom" onDrop={handleDrop} />
                                    <DraggableItem type={Types.LOCATION} item="City of Thieves at Night" onDrop={handleDrop} />
                                    <DraggableItem type={Types.LOCATION} item="Breakfast Kingdom" onDrop={handleDrop} />
                                </div>
                            </div>

                            <div className="flex mt-4 gap-3">
                                <button
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-2 rounded"
                                    onClick={() => setStory({ character: '', weapon: '', location: '' }) && ElementsText()}
                                >
                                    Limpiar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='md:w-1/2 bg-slate-900 relative'>

                        {/* Capa para el lugar */}
                        {locationImage && (
                            <img
                                alt="Location Image"
                                className="md:h-auto w-full "
                                src={locationImage}
                                style={{
                                    aspectRatio: "400/200",
                                    objectFit: "cover",
                                    position: "absolute",
                                    top: -200,
                                    left: 0,
                                }}
                                width="600"
                            />
                        )}

                        {/* Capa para el personaje */}
                        {characterImage && (
                            <img
                                alt="Character Image"
                                className="md:h-auto w-full "
                                src={characterImage}
                                style={{
                                    aspectRatio: "400/200",
                                    objectFit: "cover",
                                    position: "absolute",
                                    top: -200,
                                    left: 0,
                                }}
                                width="600"
                            />
                        )}

                        {/* Capa para el personaje con el arma */}
                        {weaponImage && (
                            <img
                                alt="Weapon Image"
                                className="md:h-auto w-full "
                                src={weaponImage}
                                style={{
                                    aspectRatio: "400/200",
                                    objectFit: "cover",
                                    position: "absolute",
                                    top: -200,
                                    left: 0,
                                }}
                                width="600"
                            />
                        )}
                    </div>
                </main>
                <End />
            </div>
        </DndProvider>
    );
};

export default AdventureStory;
