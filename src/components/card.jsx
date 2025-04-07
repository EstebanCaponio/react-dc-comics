function Card({ comics }) {

    return (

        comics.map((card) =>
            <div>
                <div>
                    <img src={card.thumb} alt={card.title} />
                </div>
                <div>
                    {card.series}
                </div>
            </div>
        )
    );
}

export default Card;