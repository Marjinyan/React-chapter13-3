import Book from "../Book/Book";
import classes from "./style.module.css";

const BookList = (props) => {
    return (
        <div className={classes.list}>
            {props.books.map((book) => (
                <Book key={book.id} {...book} />
            ))}
        </div>
    );
};
export default BookList;
