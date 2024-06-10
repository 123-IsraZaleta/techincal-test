import PokemonCard from "../../molecules/card"

const PokemonList = ({ pokemon = [], searchTerm = '' }) => {
  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-gray-200 h-[85%] overflow-auto p-10 grid grid-cols-2 gap-8 2k:h-[90%] 2k:grid-cols-4 qhd:grid-cols-5">
      <PokemonCard
        filteredPokemon={filteredPokemon}
      />
    </div>
  )
}

export default PokemonList;