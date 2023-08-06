import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return <div>Home
    <button onClick={()=>navigate('/login')}>Get Started!</button>
  </div>;
};

export default Home;
