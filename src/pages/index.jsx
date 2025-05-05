import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Jogini } from '../components/Jogini';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    {
      <>
        <Jogini />
      </>
   }

  </div>
);