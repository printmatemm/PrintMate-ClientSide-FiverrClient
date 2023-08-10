import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';
import Display from './Display';

export default function Dashboard() {
  const context = useContext(Context);
  const navigate = useNavigate();

  const [unReadOrders, setUnReadOrders] = useState([]);
  const [readOrders, setReadOrders] = useState([]);
  const [view, setView] = useState('Not Contacted');

  useEffect(() => {
    if (!context.AdminLoggedIn) {
      navigate('/admin/login');
    }
  }, [context.AdminLoggedIn, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const uncontactedResponse = await fetch('http://localhost:4002/getUncontactedQuotations', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const uncontactedData = await uncontactedResponse.json();
        setUnReadOrders(uncontactedData.uncontactedQuotations);

        const contactedResponse = await fetch('http://localhost:4002/getContactedQuotations', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const contactedData = await contactedResponse.json();
        setReadOrders(contactedData.contactedQuotations);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchDataInterval = setInterval(fetchData, 5000);

    return () => clearInterval(fetchDataInterval);
  }, []);

  return (
    <>
      <div className='LoginNavigation'>
        <h1 className="Company-Name">Print<span>Mate</span></h1>
      </div>

      <div className='container'>
        <div className='ButtonContainer'>
          <button onClick={() => setView('Not Contacted')}>Not Contacted</button>
          <button onClick={() => setView('Contacted')}>Contacted</button>
        </div>
      </div>

      {view === 'Not Contacted' ? (
        <Display quotes={unReadOrders} />
      ) : (
        <Display quotes={readOrders} />
      )}
    </>
  );
}
