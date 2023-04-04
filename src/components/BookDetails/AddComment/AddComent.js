import { useForm } from "../../../hooks/useForm";

export const AddComment = ({
    onCommentSubmit
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        comment: '',
    }, onCommentSubmit);

    return (
        <div className="addCommentContainer">
            <h4>Add new comment:</h4>
            <form id="createComment" method="" onSubmit={onSubmit}>
                <div className="textComment">
                    <textarea
                        value={values.comment}
                        onChange={changeHandler}
                        placeholder="Comment..."
                        name="comment"
                        id="comment"
                        cols="30" rows="3">
                    </textarea>
                </div>
                <input className="btnCreateComment" type="submit" value="Add" />
            </form>
        </div>
    );
};