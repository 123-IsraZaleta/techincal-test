
const InputSimple = ({ searchTerm = '', handleSearch }) => (
  <input
    type="text"
    className="pl-2"
    placeholder="Search Pokémon"
    value={searchTerm}
    onChange={handleSearch}
  />
)

export default InputSimple;