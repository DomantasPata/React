import styles from "./Header.module.css";
import { useSettingsContext } from "../Context/SettingsContextProvider";

export default function Header() {
  const { setShow } = useSettingsContext();
  function handleChange(e) {
    setShow(e.target.value);
  }
  return (
    <div className={styles.header}>
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png"
        alt="huywei"
      />
      <select onChange={handleChange} name="" id="">
        <option value="show">Show</option>
        <option value="no">Dont Show</option>
      </select>
    </div>
  );
}
