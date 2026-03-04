import Card from "./card";

function Project12() {
    const fruitStore = [
        {
            id: 1, name: "Apple", price: "20"
        },
        {
            id: 2, name: "Banana", price: "10"
        }
    ]

    return (
        <div>
            <h1>Fruit Store</h1>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {fruitStore.map((fruit) => (
                    <Card key={fruit.id} title={fruit.name} desc={`Price: $${fruit.price}`} />
                ))}
            </div>
        </div>
    )
}

export default Project12;