function Card({ comics }) {

    return (

        comics.map((card) =>
            <div className="card">
                <div>
                    <img className="card-img" src={card.thumb} alt={card.title} />
                </div>
                <div>
                    {card.series}
                </div>
            </div>
        )
    );
}

export default Card;