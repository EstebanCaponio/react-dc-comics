import comics from "../data/comics";
import Card from "./card";

function Main() {
    return (
        <main>
            <div>
                <Card comics={comics} />
            </div>
        </main>
    );
}

export default Main;