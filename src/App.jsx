import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./globo.css";

export function App() {  
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Hëndy" 
            content="Saúde em primero lugar"
          />
          <Post
            author="Sù"
            content="Movimente-se mais para movimentar-se sempre"
          />
          <Post 
            author="Marciane"
            content="Nutricionista"
        />
          <Post /> 
        </main>
      </div>
    </div>
  )
}
