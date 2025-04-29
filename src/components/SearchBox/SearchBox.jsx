import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css"
import { changeFilter } from "../../redux/filterSlice";

export const SearchBox = () => {
  const filter = useSelector(state => state.filter.name)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <label className={s.search}>
        <span>  Find contacts by name:</span>
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  )
}

export default SearchBox;
