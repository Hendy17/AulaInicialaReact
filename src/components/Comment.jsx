import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Hendy17.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className={styles.commentHeader}>
                        <div className={styles.authorAndTime}>
                            <strong>Hëndy Vorpagél</strong>
                            <time title="15 de Setembro às 7:00hs" dateTime="2023-09-15 7:00:00">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom dev, parabéns!</p>
                </div>

                <footer className={styles.commentFooter}>
                    <button className={styles.commentButton}>
                        <ThumbsUp /> Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
