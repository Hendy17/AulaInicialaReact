import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.header}>
                {/* Informações do autor */}
                <div className={styles.author}>
                    <Avatar src="https://github.com/Hendy17.png" />
                    <div className={styles.authorInfo}>
                        <strong>Hëndy Vorpagél</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                {/* Data de publicação */}
                <time title="15 de Setembro às 7:00hs" dateTime="2023-09-15 7:00:00">
                    Publicado há 1 hora
                </time>
            </header>

            <div className={styles.content}>
                {/* Conteúdo do post */}
                <p>Fala galera 👋</p>
                <p>Acabei de subir mais um projeto no meu portfólio.</p>
                <p>É um projeto que fiz no NLW Return, evento da Rocketseat.</p>
                <p>O nome do projeto é DoctorCare 🚀</p>

                <p>
                    <a href="">jane.design/doctorcare</a>
                </p>

                {/* Hashtags */}
                <p>
                    <a href="">#novoprojeto</a>{" "}
                    <a href="">#nlw</a>{" "}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            {/* Formulário de comentário */}
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe seu comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment /> 
                <Comment /> 
                <Comment />               
            </div>
        </article>
    );
}
