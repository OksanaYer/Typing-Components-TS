import Container from './layouts/Container';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Status from './components/Status';
import ProfileCard from './components/ProfileCard';
import Alert from './components/Alert';
import ProductList from './components/ProductList';
import Toggle from './components/Toggle';
import Avatar from './components/Avatar';

const App = () => {
  return (
    <Container style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Greeting name="Eva" />
      <Counter initialCount={0} />
      <Status status='loading' />
      <ProfileCard user={{ name: 'Ada', age: 67 }} />
      <Alert message= "All ok" type= "info" />
      <ProductList products={[{ id: 1, title: 'Book' }, { id: 2, title: 'Pen' }]} />
      <Toggle isOn={true} onToggle={() => console.log ("not a function")} />
      <Avatar url= "https://fastly.picsum.photos/id/556/200/300.jpg?hmac=TLwE28gIMuw2BUTndMuC3hoTlK6FtrE6Mx1UnR2dzu8" altText="random" />
    </Container>
  );
};

export default App;
