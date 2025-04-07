import comics from "../data/comics";
import Card from "./card";

function Main() {
    return (
        <main>
            <div className="cards-container">
                <Card comics={comics} />
            </div>
        </main>
    );
}

export default Main;