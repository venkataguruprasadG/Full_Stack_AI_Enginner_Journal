function Project10() {
    const fruitStore = [
        { id: 1, name: "Apple", price: "20" },
        { id: 2, name: "Banana", price: "10" }
    ]

    return (
        <div>
            <h1>Fruit Store</h1>
            <ul>
                {fruitStore.map((fruit) => (
                    <li key={fruit.id} className="fruit-item">
                        <h2>{fruit.name}</h2>
                        <p>Price: ${fruit.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Project10;