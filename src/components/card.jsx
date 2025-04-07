function Card({ comics }) {

    return (

        comics.map((card) =>
            <div className="comic-card">
                <div className="comic-div-img">
                    <img className="comic-img" src={card.thumb} alt={card.title} />
                </div>
                <div>
                    {card.series}
                </div>
            </div>
        )
    );
}

export default Card;