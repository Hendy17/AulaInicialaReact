import { useState } from "react";
import { format, formatDistanceToNow } from 'date-fns';

import ptBR from "date-fns/locale/pt-BR";

import  { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";


export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);
  
    
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  

  function handleNewCommentChange(event) { 
    event.currentTarget.setCustomValidity('');   
    setNewCommentText(event.target.value);
  }
  

    setComments([...comments, newCommentText]);
    setNewCommentText('');    
  }     
   

  function handleNewCommentChange() { 
    event.currentTarget.setCustomValidity('');   
    setNewCommentText(event.target.value);
  
  }

  function handleNewCommentInvalid () {
    event.currentTarget.setCUstomValidity('Esse compo é obrigatorio');
  }
  

  function deleteComment(commentToDelete) {
    const commentWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentWithoutDeleteOne);
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        {/* Informações do autor */}
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.nome}</strong>
            <span>{author.role}</span>
          </div>
        </div>
  
        {/* Data de publicação */}
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
  
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
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
          <button type="submit">Publicar</button>
        </footer>
      </form>
  
      <div className={styles.commentList}>
        {comment.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
  