function Random() {

    let number = Math.random() *100

    return <h3>
        random generated number: {Math.round(number)}
    </h3>
}

export default Random;