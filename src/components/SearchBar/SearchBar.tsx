import { useState, FormEvent } from 'react';
import css from './Searchbar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.form}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>
        <input
          className={css.input}
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
