import Image from "../../atoms/image"

const PokemonCard = ({ filteredPokemon = [] }) => {
  return (
    <>
      {filteredPokemon.map((poke, index) => (
        <div
          key={index}
          className="h-48 border border-black flex flex-col justify-center items-center cursor-not-allowed shadow-lg rounded-md 2k:h-64 qhd:h-72 hover:bg-blue-200 hover:shadow-2xl"
        >
          <p>{poke.name}</p>
          <Image poke={poke} />
        </div>
        
      ))}
    </>
  )
}

export default PokemonCard;