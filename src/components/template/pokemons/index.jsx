import { useEffect, useState } from 'react'
import axios from 'axios'

import PokemonSearch from '../../organism/pokemon-search'
import PokemonList from '../../organism/pokemon-list'


const Pokemons = () => {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151') // Limite para obtener los primeros 151 Pokémon
        const pokemonData = await Promise.all(
          response.data.results.map(async (poke) => {
            const pokeDetails = await axios.get(poke.url)
            return {
              name: poke.name,
              image: pokeDetails.data.sprites.front_default,
            }
          })
        )
        setPokemon(pokemonData)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemonList()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div className="h-full w-full">

      <PokemonSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <PokemonList
        pokemon={pokemon}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
    </div>
  )
}

export default Pokemons;