
import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import "./globo.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/hendy17.png',
      name: 'Hëndy Vorpagél',
      role: 'Dev: SHCore'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de adicionar um novo projeto no meu portfólio, e estou super animado para compartilhar com vocês! 🚀' },
      { type: 'paragraph', content: 'O Blog_Dev é uma plataforma de blog que desenvolvi do zero' },
      { type: 'paragraph', content: 'Nome do pro focada em oferecer uma experiência intuitiva tanto para os leitores quanto para os autores.' },
      { type: 'link', content: 'hendyvorpagel@gmail.com' },
    ],
    publishedAt: new Date('2023-09-21 21:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/durexex.png',
      name: 'Eduardo Duriex Lopes',
      role: 'Prof: Durexex'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de adicionar um novo projeto no meu portfólio, e estou super animado para compartilhar com vocês! 🚀' },
      { type: 'paragraph', content: 'O Blog_Dev é uma plataforma de blog que desenvolvi do zero' },
      { type: 'paragraph', content: 'Nome do pro focada em oferecer uma experiência intuitiva tanto para os leitores quanto para os autores.' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-09-22 20:00:00')
  }
];

export function App () {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post            
              post={post}
            />
          ))}
        </main>
      </div>
    </div>
  );
}


