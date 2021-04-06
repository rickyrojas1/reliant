import React from 'react';
import './ServicePage.scss';

const ServicePage = () => (
  <div className="services-page">
    <div className="background-img">
      <div />
      <h1 className="services-page-header">
        Our Services
      </h1>
    </div>
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
    <div className="content-row blue">

      <div className="service">

        <h2>Pump, Ground Ladder, and Aerial Testing</h2>
        <p>
          For an added convenience to our customers, Reliant is able to offer Pump,
          Ground Ladder, and Aerial Testing to our services.
          Ask about a quote today!

        </p>
      </div>
      <div className="img-2" />
    </div>
    <div className="content-row">

      <div className="img-3" />
      <div className="service">

        <h2>Hard Suction Testing </h2>
        <p>
          Reliant offers NFPA required Dry-Vacuum Testing of hard suction hoses.
          This important part of testing aims to help prevent discovery of
          drafting issues during Firematic operation.
        </p>

      </div>
    </div>
  </div>
);

export default ServicePage;
