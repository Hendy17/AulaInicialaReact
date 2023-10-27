
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
      nome: 'Hëndy Vorpagél',
      role: 'Dev: SHCore'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio' },
      { type: 'paragraph', content: 'um projeto que fiz no NLW Return, evento da Rocketseat' },
      { type: 'paragraph', content: 'nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-09-21 21:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/durexex.png',
      nome: 'Eduardo Duriex Lopes',
      role: 'Prof: Durexex'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio' },
      { type: 'paragraph', content: 'um projeto que fiz no NLW Return, evento da Rocketseat' },
      { type: 'paragraph', content: 'nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-09-22 20:00:00')
  }
];

function App () {
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

export default App;
