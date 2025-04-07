import comics from "../data/comics";
import Card from "./card";

function Main() {
    return (
        <main>
            <div className="container-comics">
                <Card comics={comics} />
            </div>
            <div className="container-btn">
                <div className="btn-comic">
                    LOAD MORE
                </div>
            </div>
        </main>
    );
}

export default Main;