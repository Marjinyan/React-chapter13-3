import classes from "./style.module.css";

const Book = (props) => {
    return (
        <div className={classes.book}>
            <img src={props.pic} />
            <h4>{props.title}</h4>
            <p>{props.author}</p>
            <button>Order</button>
        </div>
    );
};
export default Book;