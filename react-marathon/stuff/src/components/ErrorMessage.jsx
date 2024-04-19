
const ErrorMessage = () => {
    let foodItems = ["Fruits", "Vegetables", "Pulses", "Grians", "Ice cream"];

    return <div>
        {foodItems.length === 0 && <h3>I am still hungry</h3>}
    </div>
}

export default ErrorMessage;