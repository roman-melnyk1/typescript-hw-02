import css from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
}

export const LoadMoreButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className={css.buttonWrapper}>
      <button className={css.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};
