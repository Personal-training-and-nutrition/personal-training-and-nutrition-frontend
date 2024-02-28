import { useState } from 'react';
import styles from './UserNoteForm.module.scss';

type UserNoteFormProps = {
  title: string;
  content: string;
  handleComment?: (message: string) => void;
};

function UserNoteForm({ title, content, handleComment }: UserNoteFormProps) {
  const [message, setMessage] = useState<string>(content);

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    if (handleComment) handleComment(message);
  }

  return (
    <form className={styles.userNoteForm} onSubmit={handleSubmit}>
      <p className={styles.userNoteForm__title}>{title}</p>
      <textarea
        className={styles.userNoteForm__input}
        name="comment"
        id="comment"
        value={message}
        placeholder="Оставьте заметку об этой тренировке"
        onChange={(evt) => setMessage(evt.target.value)}
      ></textarea>

      <button type="submit" className={styles.userNoteForm__sendButton}>
        Отправить
      </button>
    </form>
  );
}

export default UserNoteForm;
