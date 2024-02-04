import { useState } from 'react';
import componentsImg from './assets/components.png';
import rea from './assets/react-core-concepts.png';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import Header from './components/Header';
import CoreConcepts from './components/CoreConcept';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './data';






function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedBTN) {
    setSelectedTopic(selectedBTN);
    // console.log(selectedTopic);


  }
  function handleReset() {
    setSelectedTopic(null);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conseptItem) => <CoreConcepts 
               {...conseptItem}/>)}
             
            

          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
            {/* <TabButton onSelect={handleReset}>Reset</TabButton> */}
          </menu>
          {!selectedTopic ? <p>Please select a topic</p> : <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}

              </code>
            </pre>


          </div>}


        </section>

      </main>
    </div>
  );
}

export default App;