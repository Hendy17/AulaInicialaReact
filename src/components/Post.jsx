import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(['Post muito bacana, hein?!']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });  

  function handleCreateNewComment(event) { 
    event.currentTarget.setCustomValidity('');   
    setComments([...comments, newCommentText]);
    setNewCommentText('');    
  }

  function handleNewCommentChange(event) { 
    event.target.setCustomValidity('');   
    setNewCommentText(event.target.value);  
  }

  function handleNewCommentInvalid (event) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }
  
  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
  
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
  
      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          } else {
            return null;
          }
        })}
      </div>
  
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
  
        <textarea
          name="comment"
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
  
      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
