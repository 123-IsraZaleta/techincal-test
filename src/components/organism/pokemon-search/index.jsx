import Image from "../../atoms/image"
import InputSimple from "../../atoms/input-simple"

const PokemonSearch = ({ searchTerm = '', setSearchTerm }) => {
  const poke = {name:'pikachu', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="bg-lime-200 h-[15%] flex 2k:h-[10%]">

      <div className="w-[10%] flex items-center 2k:w-[5%] hover:cursor-pointer">
        <Image poke={poke} />
      </div>

      <div className="w-[90%] flex items-center justify-center gap-3 2k:w-[95%]">
        <h1>¿Qué pokemon estas buscando?:</h1>
        <InputSimple
          searchTerm={searchTerm}
          handleSearch={handleSearch}
        />
      </div>

    </div>
  )
}

export default PokemonSearch;