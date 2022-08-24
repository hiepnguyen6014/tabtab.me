import { AboutUsParagraph } from '../AboutUs.style';
import ItemBoard from './ItemBoard';

const BoardManagement: React.FC<{}> = () => {
  return (
    <div className="container-fluid my-4">
      <AboutUsParagraph>
      <h2>Board Management</h2>
      <ItemBoard />
      <ItemBoard />
      </AboutUsParagraph>
    </div>
  );
};

export default BoardManagement;
