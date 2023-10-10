import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, deleteComment }) {
    const [likeCount, setLinkCount] = useState(0);

    function handleDeleteComment() {
        deleteComment(content);
    }

    function handleLikeComment () {
        setLinkCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>            
            <Avatar hasBorder={false} src="https://github.com/durexex.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eduardo Durexex Lopes</strong>
                            <time title="15 de Setembro às 7:00hs" dateTime="2023-09-15 7:00:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp /> 
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
