
import { useAuthContext } from '../../contexts/AuthContext';
import { useBookContext } from "../../contexts/BookContext";

export const Profile = () => {
    const { userId, username, userEmail } = useAuthContext();
    const { books } = useBookContext();

    let names = (books.filter((x) => x._ownerId === userId));

    return (
        <div className="profile">
            <h1>Profile</h1>
            <img src="https://pic.onlinewebfonts.com/svg/img_550782.png" alt="" />
            <section className="profileContainer">
                <h2>Userame: <span>{username}</span></h2>
                <h2>Email: <span>{userEmail}</span></h2>
                <h2>My books:
                    <span>
                        {names.map((x, i) => {
                            return <p key={i}>{i + 1 + '. ' + x.bookName}
                            </p>
                        })}
                    </span>
                </h2>
            </section>
        </div>
    );
};