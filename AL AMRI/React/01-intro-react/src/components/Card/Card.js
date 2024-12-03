import classes from "./Card.module.css"
import Button from "../Button/Button"

export const Card = ({name, photo, description}) => {
    return (
        <div className={classes.card}>
            <img src={photo} alt="Portrait" className={classes["card-image"]}/>
            <div className={classes["card-content"]}>
                <h2 className={classes["card-title"]}>{name}</h2>
                <p className={classes["card-description"]}>
                    {description}
                </p>
                <Button/>
            </div>
        </div>
    )
}