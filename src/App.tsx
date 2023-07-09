import "./index.css";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img
          src="https://p-u.popcdn.net/event_details/posters/000/015/476/large/ad9835c4c331028d648d8dfe1af0e30d498ed727.png?1688482510"
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="profile-info">
        <h1>BNK48 3rd Generation Concert "Rabbit in Wonderland"</h1>
        <p>
          The first major concert of BNK48's 3rd Generation, spanning over a
          period of more than 2 years, is about to take place.
        </p>
        <p>
          Debuting as the full-fledged BNK48, this group of bunnies is ready to
          emerge from the forest and shine brightly. They will showcase their
          full abilities in singing, playing instruments, and dancing in the
          BNK48 3rd Generation Concert, "Rabbit in Wonderland."
        </p>
        <p>
          If you don't want to miss out on the fun, entertainment, and
          heartwarming moments that you've never seen before, don't forget to
          come and join us.
        </p>
        <a
          href="https://www.eventpop.me/e/15476/3rd-gen-concert"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Buy Ticket
        </a>
      </div>
    </div>
  );
};

export default App;
