import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(props) {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/fabiosalves.png'/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fabio Alves</strong>
              <time title='07 de Abril às 13:59' dateTime='2023-04-07 16:59:00'>Há cerca de 1h</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
            

          </header>

          <p>
            {props.content}
          </p>

        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>24</span>
          </button>
        </footer>

      </div>



    </div>
  )
}