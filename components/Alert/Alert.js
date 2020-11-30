import styles from "./Alert.module.sass";
import cn from "classnames";

export default function Alert({ children, type }) {
  const className = cn({
    [styles.success]: type === "success",
    [styles.error]: type === "error"
  });
  return <div className={className}>{children}</div>;
}
