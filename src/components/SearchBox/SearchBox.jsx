import s from "./SearchBox.module.css"

export const SearchBox = ({value, onChange}) => {
  return (
    <div>
      <label className={s.search}>
        <span>  Find contacts by name:</span>
        <input type="text" value={value} onChange={e => onChange(e.target.value)} />
      </label>
    </div>
  )
}

export default SearchBox;
