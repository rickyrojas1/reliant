import React from 'react';
import './ServicePage.scss';

const ServicePage = () => (
  <div className="services-page">
    <h1 className="services-page-header">
      Services
    </h1>
    <div className="content-row">

      <div className="img-1" />
      <div className="service">

        <h2>Fire Hose Testing </h2>
        <p>
          Reliant offers OSHA required hose testing in
          accordance with NFPA 1962. Reliant provides hose testing
          service for all hose within your department’s inventory.
          We will unpack, record, service test, inspect, and repack with detail
          and precision. We will also test any and all spare inventory.
          The condition of your hose inventory is our main priority,
          having a direct impact on the safety of your departments members.
          Reliant guarantees that you will be more than satisfied
          with the “Parade Pack” finished product,
          your apparatus will now carry.
        </p>

      </div>
    </div>
  </div>
);

export default ServicePage;
