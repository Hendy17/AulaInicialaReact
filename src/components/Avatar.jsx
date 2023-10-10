import styles from "./Avatar.module.css";

export function Avatar({ hasBorder,src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder}
      src={src}
      alt="Avatar"
    />
  );
}
