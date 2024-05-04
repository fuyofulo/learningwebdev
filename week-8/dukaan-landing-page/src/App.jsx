import RevenueCard from "./components/RevenueCard";

function App() {
  return <div className="grid grid-cols-4"> 
    <RevenueCard title={"Amount pending"} amount={"92,124.43"} orderCount={13} />
    </div>
}

export default App;
