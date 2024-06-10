
const Image = ({ poke = {} }) => {
  return (
    <img
      src={poke.image}
      alt={poke.name}
    />
  )
}

export default Image;