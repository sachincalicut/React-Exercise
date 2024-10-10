import { Button } from 'antd';
import {HiOutlineSun, HiOutlineMoon} from 'react-icons/hi';

const ToggleThemeSwitch = ({darkTheme, toggleTheme}) => {
  return (
    <div className='toggle-theme-btn'>
        <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun/>: <HiOutlineMoon/>}
        </Button>
       
    </div>
  );
};

export default ToggleThemeSwitch