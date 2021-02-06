import Card from './components/Card/Card';
import Heading from './components/Common/Heading/Heading';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import './styles/home.module.css';

function Home() {
  return (
    <div className="Home">
      <Header/>
      <Heading title={"Old Car Available"}/>
      <Card/>
      <Form/>
    </div>
  );
}

export default Home;
