import { useParams } from 'react-router-dom';

function CoffeeHouseCard() {
    let { id } = useParams();

    return (
        <div>
            <h1>Detail of Coffee House with ID: {id}</h1>
        </div>
    );
}

export default CoffeeHouseCard;
