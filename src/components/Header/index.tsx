import React, { useCallback } from 'react';
import Links from '../Links';
import { useHistory } from 'react-router';

const Header: React.FC = () => {
  const history = useHistory();

  const OnClickHome = useCallback(() => {
    history.push('/');
  }, []);

  const OnClickAbout = useCallback(() => {
    history.push('/about');
  }, []);

  const OnClickWorks = useCallback(() => {
    history.push('/works');
  }, []);

  const OnClickContact = useCallback(() => {
    history.push('/contact');
  }, []);

  return (
    <div
      className={
        history.location.pathname === '/'
          ? 'bg-black flex flex-col justify-between items-center absolute top-1/3 bg-opacity-0 w-full h-44'
          : 'bg-gray-100 flex justify-around items-center h-24 shadow'
      }
    >
      <h1
        className={
          history.location.pathname === '/'
            ? 'text-gray-700 font-mono font-extralight tracking-widest'
            : 'text-gray-700 tracking-widest font-serif text-2xl'
        }
      >
        {history.location.pathname === '/' ?"Welcome To MY PORTFOLIO ":"MY PORTFOLIO"}
      </h1>
      <Links
        OnClickHome={OnClickHome}
        OnClickAbout={OnClickAbout}
        OnClickWorks={OnClickWorks}
        OnClickContact={OnClickContact}
      />
    </div>
  );
};

export default Header;
