import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const isConnect = () => setStatus('online');
    const notConnect = () => setStatus('offline');
  
    window.addEventListener('online', isConnect);
    window.addEventListener('offline', notConnect);

    return () => {
      window.removeEventListener('online', isConnect);
      window.removeEventListener('offline', notConnect);
    }
  }, [status]);

  return (
    <div className={classNames('status', { 'status_offline': status === 'offline' })}>{status}</div>
  );
}

export default ConnectionStatus;

